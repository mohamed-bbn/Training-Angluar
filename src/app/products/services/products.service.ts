import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=30');
  }

  getProduct(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }
}




