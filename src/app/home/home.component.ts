import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { AboutusService } from '../aboutus/services/aboutus.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  about;

  constructor(
    private productsService: ProductsService,
    public a: AboutusService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res;
    })

    this.a.getAboutus().subscribe(res => {
      this.about = res;
    });
  }

}
