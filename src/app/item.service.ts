import { Observable, of } from 'rxjs';

// item.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<any[]> {

  }
}
