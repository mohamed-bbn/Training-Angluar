import { Component, OnInit } from '@angular/core';
import { TermsservicesService } from './services/termsservices.service'

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})




export class TermsComponent implements OnInit {
  terms;

  constructor(public a: TermsservicesService) { }

  ngOnInit() {
    this.a.getTerms().subscribe(res => {
      this.terms = res;
    });
  }

}
