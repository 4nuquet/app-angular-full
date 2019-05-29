import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from '../interfaces/Item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {

   }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.BASE_URL}/items`);
  }

  getItem(id: string): Observable<Item>{
    return this.http.get<Item>(`${this.BASE_URL}/items/${id}`);
  }

  createItem(item: Item): Observable<Item>{
    return this.http.post<Item>(`${this.BASE_URL}/items`, item);
  }

  deleteItem(id: string): Observable<Item> {
    return this.http.delete<Item>(`${this.BASE_URL}/items/${id}`);
  }

  updateItem(id: string, item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.BASE_URL}/items/${id}`, item);
  }

}
