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
  template: 'items-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
 
  }
}