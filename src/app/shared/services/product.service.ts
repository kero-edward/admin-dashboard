import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://62fb62afe4bcaf5351837ac1.mockapi.io/product';

  constructor(private _HttpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this._HttpClient.get<any[]>(this.apiUrl);
  }
}
