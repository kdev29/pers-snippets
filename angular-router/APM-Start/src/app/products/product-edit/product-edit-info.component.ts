import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product, ProductResolved } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product: Product;
  // product = { id: 1, productName: 'test', productCode: 'test' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {

      if(this.productForm) {
        this.productForm.reset();
      }

      this.product = (<ProductResolved>data['product']).product;

    });
  }
}
