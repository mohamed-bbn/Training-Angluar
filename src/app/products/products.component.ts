import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  pageChange(newPage: number) {
    this.router.navigate(['/products'], { queryParams: { page: newPage } });
  }

  @Input() product;
  ShowSpinner: boolean = true;


  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        this.ShowSpinner = false;
      })
  }


  getProducts() {
    this.productsService.getProducts().subscribe(
      (images: any) => { this.products = images },
      (error) => {
        console.log(error)
      }
    )
  }
}


