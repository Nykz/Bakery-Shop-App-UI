import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { IonicSlides } from '@ionic/angular/standalone';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list-horizontal',
  templateUrl: './product-list-horizontal.component.html',
  styleUrls: ['./product-list-horizontal.component.scss'],
  imports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListHorizontalComponent  implements OnInit {

  products = input<Product[]>();
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
