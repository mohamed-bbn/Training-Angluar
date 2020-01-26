import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TermsservicesService {

  constructor(private http: HttpClient) { }

  getTerms() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

}



