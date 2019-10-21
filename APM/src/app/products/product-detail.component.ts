import { Component, OnInit } from '@angular/core';
import { IProducts } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product : IProducts;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
