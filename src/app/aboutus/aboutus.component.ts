import { Component, OnInit } from '@angular/core';
import { AboutusService } from './services/aboutus.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})


export class AboutusComponent implements OnInit {
  about;

  constructor(public a: AboutusService) { }

  ngOnInit() {
    this.a.getAboutus().subscribe(res => {
      this.about = res;
    });
  }

}





