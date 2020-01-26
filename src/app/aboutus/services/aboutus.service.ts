import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor(private http: HttpClient) { }

  getAboutus() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/1');
  }
}









