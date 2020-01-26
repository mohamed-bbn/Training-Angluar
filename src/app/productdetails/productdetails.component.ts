import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  products: any[] = [];
  product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe((res) => {
      this.getProduct(res.id);
    })
  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
      })
  }

  getProduct(id) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

}


