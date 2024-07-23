Create an Angular service called ItemService that provides a method called getItems() to fetch items from a mock API endpoint. The mock API should return an array of item objects with properties id and name.
Create an Angular component called ItemList that displays the list of items fetched from the ItemService.
The ItemList component should render each item in a list format, displaying the item's id and name.
Use Angular data binding to dynamically display the list of items fetched from the ItemService in the ItemList component.
Use Angular dependency injection to inject the ItemService into the ItemList component to fetch items.
Write unit tests for the ItemList component to ensure that it correctly displays the list of items fetched from the ItemService.


Write unit tests for the ItemList component to ensure that it correctly displays the list of items fetched from the ItemService. Test cases should cover scenarios such as:

Testing that the component renders correctly with mock data.
Testing that the component handles errors gracefully if the item fetching fails.
Testing that the component correctly displays each item in the list.
The candidate should demonstrate an understanding of Angular testing techniques using TestBed, Jasmine, and the Angular testing utilities.