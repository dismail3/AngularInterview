// item.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<any[]> {
    // Simulate fetching items from a mock API
    return of(/* Mock items data */);
  }
}
