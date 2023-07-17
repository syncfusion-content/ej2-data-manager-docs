

import { DataManager, Query, ReturnOption, UrlAdaptor, Predicate } from '@syncfusion/ej2-data';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { Grid, Page } from '@syncfusion/ej2-grids';
import {
    AccumulationChart,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    PieSeries,
    AccumulationDataLabel,
    Inject,
  } from '@syncfusion/ej2-charts';

  Grid.Inject(Page);
  AccumulationChart.Inject(PieSeries, AccumulationDataLabel);

const SERVICE_URI: string =  'https://services.syncfusion.com/react/production/api/UrlDataSource?limit=15';

let query: Query = new Query();
let selectedValues: { [columnName: string]: string[] } = {};
let grid: Grid;
let pieChart: AccumulationChart;

function createDataManager(id: string): DataManager {
    return new DataManager({ url: SERVICE_URI, adaptor: new UrlAdaptor, enablePersistence: true, id: id });
}

function renderGridAndChart(dataSource: DataManager | object[]) {
    if (grid && pieChart){
        grid.destroy();
        pieChart.destroy();
    }
    grid = new Grid({
        dataSource: dataSource,
        allowPaging: true,
        pageSettings: {pageSize: 10},
        columns: columns,
        // dataBound: dataBound
    })
    grid.appendTo('#Grid');

    pieChart = new AccumulationChart({
        dataSource: dataSource,
        id: "pie-chart",
        legendSettings: { visible: true },
        enableAnimation: true,
        title: "Current Salary statistics",
        enableSmartLabels: true,
        enableBorderOnMouseMove: false,
        series: [{
        xName: "EmployeeID",
        yName: "CurrentSalary",
        startAngle: 0,
        endAngle: 360,
        radius: "75%",
        innerRadius: "40%",
        explode: true,
        explodeOffset: "10%",
        explodeIndex: 0,
        dataLabel: {
            visible: true,
            position: 'Outside',
            name: 'text',
            format: 'c1',
            font: {
            fontWeight: '600',
            },
        }}]
    }, '#element');
}

let dataManager: DataManager = createDataManager('Dummy');

let dropDownListObject: DropDownList = new DropDownList({
    dataSource: ['Johndoe', 'Marysmith', 'Robertwilliams'],
    placeholder: "Select an User",
    change: handleChangeDropdown,
});
dropDownListObject.appendTo('#ddlelement');

let sortButton: Button = new Button({ content: 'Sort' });
sortButton.appendTo('#sortButton');

let sortDialog: Dialog = null;

let filterButton: Button = new Button({ content: 'Filter' });
filterButton.appendTo('#filterButton');

let filterDialog: Dialog = null;

let executeButton: Button = new Button({ content: 'Render Grid' });
executeButton.appendTo('#executeButton');

let switchUserButton: Button = new Button({ content: 'Switch User' });
switchUserButton.appendTo('#switchUserButton');

let clearButton: Button = new Button({ content: 'Clear user Data' });
clearButton.appendTo('#clearButton');

const columns = [
    { field: 'EmployeeID', headerText: 'EmployeeID', width: '120', textAlign: 'Right' },
    { field: 'Employees', headerText: 'Employees', width: '150' },
    { field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2', width: '150' },
  ];


// function dataBound(args: any) {
//     piechart.dataSource = grid.getCurrentViewRecords();
// }

function reloadPage() {
    window.location.reload();
}

function handleChangeDropdown(e: any) {
    const buttonContainer: HTMLElement = document.querySelector('.button-container')!;
    const queryButtonContainer: HTMLElement = document.querySelector('.queryButton-container')!;
    const dropdownList: HTMLElement = document.querySelector('.dropdown-container .e-ddl')!;
    const dropdownContainer: HTMLElement = document.querySelector('.dropdown-container')!;
    if (e.value) {
        switchUserButton.element.style.display = 'inline-block';
        // dropdownList.classList.add('e-hide');
        // dropdownList.blur();
        const userSpan = document.createElement('span');
        userSpan.classList.add('userSpan');
        userSpan.innerHTML = e.value;
        dropdownContainer.replaceChild(userSpan, dropdownList);
        buttonContainer.style.display = 'flex';
        queryButtonContainer.style.display = 'inline';
      } else {
        switchUserButton.element.style.display = 'none';
        buttonContainer.style.display = 'none';
      }
    query = new Query();
    dataManager.dataSource.id = e.value;
    // const persistedQuery = dataManager.getPersistedData(dataManager.dataSource.id);
    // grid.showSpinner();
    // piechart.element.style.display = 'none';
    // if (isNullOrUndefined(persistedQuery)) {
    //     dataManager.executeQuery(query).then((e) => {
    //         grid.hideSpinner();
    //         grid.changeDataSource(e.result, columns);
    //         grid.pageSettings = {pageSize: 10 };
    //         piechart.element.style.display = 'block';
    //     });
    // }
    // else {
    //     dataManager = createDataManager(e.value);
    //     // grid.changeDataSource(dataManager, columns);
    //     grid.pageSettings = {pageSize: 10 };
    //     grid.dataSource = dataManager;
    //     // grid.pageSettings = {pageSize: 10 };
    //     grid.hideSpinner();
    //     piechart.element.style.display = 'block';
    // }
}

switchUserButton.element.onclick = (): void => {
    reloadPage();
}

clearButton.element.onclick = (): void => {
    dataManager.clearPersistence();
    dataManager = undefined;
    query = undefined;
    reloadPage();
}

// Sort button click handler
sortButton.element.onclick = (): void => {
    if (!sortDialog) {
      sortDialog = new Dialog({
        id: 'sort-dialog',
        header: 'Sort Query',
        showCloseIcon: true,
        animationSettings: { effect: 'None' },
        width: '300px',
        height: 'auto',
        isModal: true,
        target: '.grid-chart-container',
        content: generateSortDialogContent(),
      });
      sortDialog.appendTo('#sort-dialog');
    }
    
    sortDialog.show();
  };

  function generateSortDialogContent(): HTMLElement {
    const contentContainer = document.createElement('div');
    contentContainer.style.margin = '20px';
  
    const label = document.createElement('h3');
    label.textContent = 'Generate Sort Query';
    contentContainer.appendChild(label);
  
    const sortOptionsContainer = document.createElement('div');
    sortOptionsContainer.className = 'sort-options-container';
  
    columns.forEach((column) => {
      const sortOption = document.createElement('div');
      sortOption.className = 'sort-option';
  
      const columnLabel = document.createElement('label');
      columnLabel.textContent = column.headerText;
      sortOption.appendChild(columnLabel);

      const actionButton = document.createElement('div');
      const button = new Button({
        cssClass: `e-control e-btn e-lib e-flat sort-button ${column.field || 'none'}`,
        isToggle: true,
        content: 'none',
      });
      button.appendTo(actionButton);
      sortOption.appendChild(actionButton);

      button.element.setAttribute('id', `${column.field || 'none'}`);
      button.element.addEventListener('click', () => {
        const buttonText = button.element.innerText;
  
        if (buttonText === 'NONE') {
          button.element.innerText = 'ASCENDING';
        } else if (buttonText === 'ASCENDING') {
          button.element.innerText = 'DESCENDING';
        } else {
          button.element.innerText = 'NONE';
        }
      });
  
      sortOptionsContainer.appendChild(sortOption);
    });
  
    contentContainer.appendChild(sortOptionsContainer);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.marginTop = '20px';

    const okButtonDiv = document.createElement('div');
    const okButton = new Button({
      content: 'OK',
    });
    okButton.appendTo(okButtonDiv);
    buttonContainer.appendChild(okButtonDiv);

    okButton.element.addEventListener('click', () => {
        const sortOptions: NodeListOf<Element> = contentContainer.querySelectorAll('.sort-option .e-btn');
        query.queries = query.queries.filter((q) => q.fn !== 'onSortBy')
        sortOptions.forEach((sortOption) => {
            const columnField = sortOption.getAttribute("id"); // Get the last class from classList as the column field name
            const option = sortOption.innerHTML.toLowerCase();
        
            if (option === 'ascending') {
                query.sortBy(columnField, 'ascending');
            } else if (option === 'descending') {
                query.sortBy(columnField, 'descending');
            }
          });
          console.log(query);
          sortDialog.hide();
    });
  
    const cancelButtonDiv = document.createElement('div');
    const cancelButton = new Button({
      content: 'Cancel',
    });
    cancelButton.appendTo(cancelButtonDiv);
    buttonContainer.appendChild(cancelButtonDiv);
    contentContainer.appendChild(buttonContainer);

    cancelButton.element.addEventListener('click', () => {
        sortDialog.hide();
    })
  
    return contentContainer;
  }
  

  filterButton.element.onclick = (): void => {
    if (!filterDialog) {
      filterDialog = new Dialog({
        id: 'filter-dialog',
        header: 'Filter Query',
        showCloseIcon: true,
        animationSettings: { effect: 'None' },
        width: '300px',
        isModal: true,
        target: '.grid-chart-container',
        content: generateFilterDialogContent(),
      });
      filterDialog.appendTo('#filter-dialog');
    }
    filterDialog.show();
  };
  
  function generateFilterDialogContent(): HTMLElement {
    const contentContainer = document.createElement('div');
    contentContainer.style.margin = '20px';

    const label = document.createElement('p');
    label.textContent = 'Filter dialog content';
    contentContainer.appendChild(label);

    const filterOptionsContainer = document.createElement('div');
    filterOptionsContainer.className = 'filter-options-container';

    columns.forEach((column) => {
    const filterColumn = document.createElement('div');
    filterColumn.className = 'filter-column';
    filterColumn.setAttribute('key', column.field);

    const columnLabel = document.createElement('label');
    columnLabel.className = 'column-name';
    columnLabel.textContent = column.headerText;
    filterColumn.appendChild(columnLabel);

    const filterIconContainer = document.createElement('span');
    filterIconContainer.className = 'filter-icon-container';
    filterColumn.appendChild(filterIconContainer);

    const filterDropdown = document.createElement('div');
    filterDropdown.className = 'filter-dropdown';
    filterIconContainer.appendChild(filterDropdown);
    MultiSelect.Inject(CheckBoxSelection);
    const multiSelect: MultiSelect = new MultiSelect({
        fields: { text: column.field },
        placeholder: `Select ${column.headerText}`,
        mode: 'CheckBox',
        showSelectAll: true,
        showDropDownIcon: true,
        filterBarPlaceholder: `Search ${column.headerText}`,
        popupHeight: '350px',
        change: () => {
            handleMultiSelectChange(column.field, multiSelect);
        },
    });

    dataManager.executeQuery(new Query().take(15)).then((e) => {
        multiSelect.dataSource = e.result;
    });
    multiSelect.appendTo(filterDropdown);

    filterOptionsContainer.appendChild(filterColumn);
});

    contentContainer.appendChild(filterOptionsContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.marginTop = '20px';

    const okButtonDiv = document.createElement('div');
    const okButton = new Button({
      content: 'OK',
    });
    okButton.appendTo(okButtonDiv);
    buttonContainer.appendChild(okButtonDiv);

    okButton.element.addEventListener('click', () => {
        query.queries = query.queries.filter((q) => q.fn !== 'onWhere');
        const filterPredicates: Predicate[] = [];
        Object.entries(selectedValues).forEach(([columnName, selectedItems]) => {
            if (Array.isArray(selectedItems) && selectedItems.length) {
                selectedItems.forEach((selectedItem) => {
                    const predicate = new Predicate(columnName, 'equal', selectedItem);
                    filterPredicates.push(predicate);
                });
            }
        });
        // Create the filter query using the filter predicates
        const filterQuery = (filterPredicates.length > 0) ? query.where(Predicate.and(filterPredicates)) : query;
        console.log(filterQuery);
  
        filterDialog.hide();
    });
  
    const cancelButtonDiv = document.createElement('div');
    const cancelButton = new Button({
      content: 'Cancel',
    });
    cancelButton.appendTo(cancelButtonDiv);
    buttonContainer.appendChild(cancelButtonDiv);
    contentContainer.appendChild(buttonContainer);

    cancelButton.element.addEventListener('click', () => {
        filterDialog.hide();
    })

    return contentContainer;
  }

// Function to handle MultiSelect change event
function handleMultiSelectChange(columnName: string, multiSelect: MultiSelect) {
  selectedValues[columnName] = multiSelect.value as string[];
}



executeButton.element.addEventListener('click', () => {
    query.take(15);
    const gridChartContainer: HTMLElement = document.querySelector('.grid-chart-container')!;
    dataManager.executeQuery(query).then((e) => {
        // grid.changeDataSource(e.result, columns);
        // gridChartContainer.style.display = 'block';
                renderGridAndChart(e.result);
                query = new Query();
            });
        });

window.addEventListener('unload', () => {
    debugger;
})




