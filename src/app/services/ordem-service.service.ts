import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL = 'https://orderagendyapi.onrender.com/api/v1/orders';
@Injectable({
  providedIn: 'root',
})
export class OrdemServiceService {
  constructor(private http: HttpClient) {}

  fetchOrders() {
    return this.http.get(URL);
  }
}
