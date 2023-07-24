

import { DataManager, Query, JsonAdaptor, Predicate } from '@syncfusion/ej2-data';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, ColumnModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import {
    AccumulationChart,
    PieSeries,
    AccumulationDataLabel,
  } from '@syncfusion/ej2-charts';

  Grid.Inject(Page);
  AccumulationChart.Inject(PieSeries, AccumulationDataLabel);
  MultiSelect.Inject(CheckBoxSelection);

  let data: Object[] = [
    {
        ProductID: 1,
        ProductName: 'Smartphone-A',
        Description: 'High-end smartphone with foldable screen',
        Price: 1999,
        Category: 'Electronics',
        customerReviews: 100
    },
    {
        ProductID: 2,
        ProductName: 'LED TV-A',
        Description: 'Large LED TV with 4K resolution',
        Price: 1499.99,
        Category: 'Electronics',
        customerReviews: 150
    },
    {
        ProductID: 3,
        ProductName: 'Sofa',
        Description: 'Comfortable sofa for your living room',
        Price: 799.99,
        Category: 'Furniture',
        customerReviews: 80
    },
    {
        ProductID: 4,
        ProductName: 'Dining Table',
        Description: 'Elegant dining table for your home',
        Price: 599.99,
        Category: 'Furniture',
        customerReviews: 60
    },
    {
        ProductID: 5,
        ProductName: 'Smartphone-B',
        Description: 'High-end smartphone with advanced features',
        Price: 1788,
        Category: 'Electronics',
        customerReviews: 90
    },
    {
        ProductID: 6,
        ProductName: 'T-Shirt',
        Description: 'Casual cotton t-shirt for everyday wear',
        Price: 19.99,
        Category: 'Clothing',
        customerReviews: 30
    },
    {
        ProductID: 7,
        ProductName: 'Smartphone-C',
        Description: 'High-end smartphone with advanced features',
        Price: 1588,
        Category: 'Electronics',
        customerReviews: 55
    },
    {
        ProductID: 8,
        ProductName: 'LED TV-B',
        Description: 'Large LED TV with 2K resolution',
        Price: 1888.55,
        Category: 'Electronics',
        customerReviews: 560
    },
    {
        ProductID: 9,
        ProductName: 'Wall Clock',
        Description: 'Decorative wall clock for your home',
        Price: 29.99,
        Category: 'Decoratives',
        customerReviews: 20
    },
    {
        ProductID: 10,
        ProductName: 'Vase',
        Description: 'Beautiful ceramic vase for your flowers',
        Price: 24.99,
        Category: 'Decoratives',
        customerReviews: 15
    },
    {
        ProductID: 11,
        ProductName: 'Laptop-A',
        Description: 'Powerful laptop for professional use',
        Price: 1299.99,
        Category: 'Electronics',
        customerReviews: 120
    },
    {
        ProductID: 12,
        ProductName: 'LED TV-C',
        Description: 'Large LED TV with 4K resolution',
        Price: 1500,
        Category: 'Electronics',
        customerReviews: 60
    },
    {
        ProductID: 13,
        ProductName: 'Dress',
        Description: 'Elegant dress for special occasions',
        Price: 59.99,
        Category: 'Clothing',
        customerReviews: 50
    },
    {
        ProductID: 14,
        ProductName: 'Shoes',
        Description: 'Stylish shoes for men and women',
        Price: 79.99,
        Category: 'Clothing',
        customerReviews: 65
    },
    {
        ProductID: 15,
        ProductName: 'Painting',
        Description: 'Artistic painting for home decoration',
        Price: 199.99,
        Category: 'Decoratives',
        customerReviews: 25
    },
    {
        ProductID: 16,
        ProductName: 'Headphones',
        Description: 'High-quality headphones for immersive audio',
        Price: 149.99,
        Category: 'Electronics',
        customerReviews: 130
    },
    {
        ProductID: 17,
        ProductName: 'Coffee Table',
        Description: 'Modern coffee table for your living room',
        Price: 249.99,
        Category: 'Furniture',
        customerReviews: 70
    },
    {
        ProductID: 18,
        ProductName: 'Laptop-B',
        Description: 'Powerful laptop for Business use',
        Price: 799,
        Category: 'Electronics',
        customerReviews: 85
    },
    {
        ProductID: 19,
        ProductName: 'Cushions',
        Description: 'Soft cushions for your sofa',
        Price: 14.99,
        Category: 'Decoratives',
        customerReviews: 10
    },
    {
        ProductID: 20,
        ProductName: 'Wireless Speaker',
        Description: 'Portable wireless speaker for music lovers',
        Price: 79.99,
        Category: 'Electronics',
        customerReviews: 75
    },
    {
        ProductID: 21,
        ProductName: 'Bookshelf',
        Description: 'Stylish bookshelf for your home library',
        Price: 349.99,
        Category: 'Furniture',
        customerReviews: 110
    }
];

let dataManager: DataManager = new DataManager({ json: data, adaptor: new JsonAdaptor, enablePersistence: true, id: 'id', ignoreOnPersist: ["onSortBy", "onSearch"] });

let query: Query = new Query();
let sortAndFilterQuery: Query = new Query();
let grid: Grid;
let pieChart: AccumulationChart;

const homeColumns: ColumnModel[] = [
    { type: 'checkbox', allowFiltering: false, allowSorting: false, width: '60' },
    { field: 'ProductID', headerText: 'Product ID', width: '50', textAlign: 'Center', isPrimaryKey: true, template: '#template', },
    { field: 'ProductName', headerText: 'Product Name', width: '80' },
    { field: 'Description', headerText: 'Description', width: '100' },
    { field: 'Price', headerText: 'Price', format: 'C2', width: '150' },
];

const wishColumns: ColumnModel[] = homeColumns.filter(column => column.type !== 'checkbox');

//Function to render grid and chart by passing required datasource as argument.
function renderGridAndChart(columns: object[], dataSource: DataManager | object[]) {
    if (grid && pieChart){
        grid.destroy();
        pieChart.destroy();
    }
    grid = new Grid({
        dataSource: dataSource,
        allowPaging: true,
        pageSettings: {pageSize: 10},
        selectionSettings: { persistSelection: true },
        columns: columns,
    })
    grid.appendTo('#Grid');

    pieChart = new AccumulationChart({
        dataSource: dataSource,
        id: "pie-chart",
        legendSettings: { visible: true },
        enableAnimation: true,
        title: "Customer Review statistics",
        enableSmartLabels: true,
        enableBorderOnMouseMove: false,
        series: [{
        xName: "ProductName",
        yName: "customerReviews",
        startAngle: 0,
        endAngle: 360,
        radius: "90%",
        innerRadius: "40%",
        dataLabel: {
            visible: true, position: 'Outside',
            connectorStyle: { type: 'Curve', length: '7px' }, name: 'text',
            font:  {fontWeight: '500', size: '12px' },
            template: '<div>${point.x}</div><div>Reviews: ${point.y}</div>'
        }
    }]
    }, '#chart');
}

let dropDownListObject: DropDownList = new DropDownList({
    dataSource: ['Johndoe', 'Marysmith', 'Robertwilliams'],
    placeholder: "Select an User",
    change: handleChangeDropdown
});
dropDownListObject.appendTo('#ddlelement');

let sortButton1: Button = new Button({ content: '<label id="sortActionLabel">Price - Low to High</label><img class="sortActionIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Flat/Sort-Ascending.png" alt="AddtoWishlist Icon">' });
sortButton1.appendTo('#sortButton1');
sortButton1.element.setAttribute("title", "Price - Low to High");

let sortButton2: Button = new Button({ content: '<label id="sortActionLabel">Price - High to Low</label><img class="sortActionIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Flat/Sort-Descending.png" alt="AddtoWishlist Icon">' });
sortButton2.appendTo('#sortButton2');
sortButton2.element.setAttribute("title", "Price - High to Low");

let AddtoWishlistButton: Button = new Button({  content: '<img class="ButtonIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Flat/Stack%20add.png" alt="AddtoWishlist Icon">' });
AddtoWishlistButton.appendTo('#AddtoWishlist');
AddtoWishlistButton.element.setAttribute("title", "Add to Wishlist");

let showWishListButton: Button = new Button({ content: '<img class="ButtonIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Flat/Rating%20-%2003.png " alt="show wishlist Icon">' });
showWishListButton.appendTo('#showWishListButton');
showWishListButton.element.setAttribute("title", "Show WishList");

let logOutButton: Button = new Button({ content: '<img class="ButtonIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Wireframe/Power%20Off-01-WF.png" alt="LogOut Icon">' });
logOutButton.appendTo('#logOutButton');
logOutButton.element.setAttribute("title", "Logout");

let clearButton: Button = new Button({ content: '<img class="ButtonIcon" src="https://www.syncfusion.com/Content/en-US/Downloads/Images/MetroStudio/GraphicsPackage/IconPackage/application/Flat/Garbage-Closed.png" alt="LogOut Icon">' });
clearButton.appendTo('#clearButton');
clearButton.element.setAttribute("title", "Clear Wishlist");

const categories = Array.from(new Set(data.map(item => (item as any).Category)))

const filterDropdown: HTMLElement = document.getElementById('filterDropdown')!;
// Initialize the multi-select category dropdown
const multiSelect = new MultiSelect({
    dataSource: categories,
    placeholder: 'Select category',
    mode: 'CheckBox',
    showSelectAll: true,
    filterBarPlaceholder: 'Search category',
    popupHeight: '350px',
    change: handleMultiSelectChange
});
multiSelect.appendTo(filterDropdown);

function reloadPage() {
    window.location.reload();
}

function handleChangeDropdown(e: any) {
    const buttonContainer: HTMLElement = document.querySelector('.button-container')!;
    const dropdownList: HTMLElement = document.querySelector('.dropdown-container .e-ddl')!;
    const dropdownContainer: HTMLElement = document.querySelector('.dropdown-container')!;
    const sortButtonContainer: HTMLElement = document.querySelector('.Sortbutton-row')!;
    if (e.value) {
        const userSpan = document.createElement('span');
        userSpan.classList.add('userSpan');
        userSpan.innerHTML = e.value;
        dropdownContainer.replaceChild(userSpan, dropdownList);
        sortButtonContainer.style.display = '';
        buttonContainer.style.display = '';
        logOutButton.element.style.display = '';

        dataManager.dataSource.id = e.value;
        const persistedData = dataManager.getPersistedData(dataManager.dataSource.id);
        query = new Query();
        if (persistedData && persistedData.queries && persistedData.queries.some(query => query.fn === 'onWhere')) {
            AddtoWishlistButton.element.style.display = 'none';
            showWishListButton.element.style.display = 'none';
            sortButtonContainer.style.display = 'none';
            renderGridAndChart(wishColumns, dataManager.executeLocal(query));
        }
        else {
            renderGridAndChart(homeColumns, dataManager.executeLocal(query));
        }
      } else {
        logOutButton.element.style.display = 'none';
        buttonContainer.style.display = 'none';
        sortButtonContainer.style.display = 'none';
      }
}

sortButton1.element.onclick = (): void => {
    if (sortButton1.element.classList.contains('clicked')) {
        sortButton1.element.classList.remove('clicked');
        sortAndFilterQuery = new Query();
        renderGridAndChart(homeColumns, dataManager.executeLocal(sortAndFilterQuery));
    }
    else {
        sortButton2.element.classList.remove('clicked');
        sortButton1.element.classList.add('clicked');
        sortAndFilterQuery.queries = sortAndFilterQuery.queries.filter((q) => q.fn !== 'onSortBy');
        sortAndFilterQuery.sortBy('Price', 'ascending');
        renderGridAndChart(homeColumns, dataManager.executeLocal(sortAndFilterQuery));
    }
}

sortButton2.element.onclick = (): void => {
    if (sortButton2.element.classList.contains('clicked')) {
        sortButton2.element.classList.remove('clicked');
        sortAndFilterQuery = new Query();
        renderGridAndChart(homeColumns, dataManager.executeLocal(sortAndFilterQuery));
    }
    else {
        sortButton1.element.classList.remove('clicked');
        sortButton2.element.classList.add('clicked');
        sortAndFilterQuery.queries = sortAndFilterQuery.queries.filter((q) => q.fn !== 'onSortBy');
        sortAndFilterQuery.sortBy('Price', 'descending');
        renderGridAndChart(homeColumns, dataManager.executeLocal(sortAndFilterQuery));
    }
}

logOutButton.element.onclick = (): void => {
    reloadPage();
}

clearButton.element.onclick = (): void => {
    const sortButtonContainer: HTMLElement = document.querySelector('.Sortbutton-row')!;
    dataManager.clearPersistence();
    query = new Query();
    AddtoWishlistButton.element.style.display = '';
    showWishListButton.element.style.display = '';
    sortButtonContainer.style.display = '';
    renderGridAndChart(homeColumns, dataManager.executeLocal(query));
}

AddtoWishlistButton.element.onclick = (): void => {
    const filteredProducts = grid.getSelectedRecords();
    if (filteredProducts.length) {
        query.queries = query.queries.filter((q) => q.fn !== 'onWhere');
        const filterPredicates: Predicate[] = [];
        filteredProducts.forEach((product) => {
            const predicate = new Predicate('ProductID', 'equal', product.ProductID);
            filterPredicates.push(predicate);
        });
        // Create the filter query using the filter predicates
        dataManager.dataSource.enablePersistence = true;
        const filterQuery = (filterPredicates.length > 0) ? query.where(Predicate.or(filterPredicates)) : query;
        console.log(filterQuery);
        alert(filteredProducts.length + ' items added to wishlist successfully.')
    }
    else {
        alert("Select atleast one item to add to wishlist");
    }
}

showWishListButton.element.addEventListener('click', () => {
    const SelectedProducts = grid.getSelectedRecords();
    if (SelectedProducts.length) {
        const sortButtonContainer: HTMLElement = document.querySelector('.Sortbutton-row')!;
        const userSpan: HTMLElement = document.querySelector('.userSpan')!;
        AddtoWishlistButton.element.style.display = 'none';
        showWishListButton.element.style.display = 'none';
        sortButtonContainer.style.display = 'none';
        dataManager.dataSource.id = userSpan.innerHTML;
        renderGridAndChart(wishColumns, dataManager.executeLocal(query));
        query = new Query();
    }
    else {
        alert('wishlist is empty');
    }
});


function handleMultiSelectChange() {
    const selectedCategories = multiSelect.value as string[];

    if (selectedCategories.length) {
        const filterPredicates = selectedCategories.map(category => {
        return new Predicate('Category', 'equal', category);
        });
        sortAndFilterQuery.queries = sortAndFilterQuery.queries.filter((q) => q.fn !== 'onWhere');
        sortAndFilterQuery.where(Predicate.or(filterPredicates));
        dataManager.dataSource.enablePersistence = false;
        // Apply the filter based on the selected categories
        renderGridAndChart(homeColumns, dataManager.executeLocal(sortAndFilterQuery));
    }
    else {
        renderGridAndChart(homeColumns, dataManager.executeLocal(new Query()));
    }
}





