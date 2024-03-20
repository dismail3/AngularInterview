// item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

// Mock data for the ItemService
const mockItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];


@Component({
  selector: 'app-item-list',
  template: `
    <h2>Item List</h2>
    <ul>
      <!-- Use Angular data binding to display items -->
      <li *ngFor="let item of items">{{ item.id }} - {{ item.name }}</li>
    </ul>
  `,
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // Fetch items from the ItemService
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}