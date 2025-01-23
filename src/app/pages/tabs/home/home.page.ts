import { ListHeadingComponent } from './../../../components/list-heading/list-heading.component';
import { Component, computed, inject, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  location,
  cart,
  notifications,
  options,
} from 'ionicons/icons';
import { BannerComponent } from "../../../components/banner/banner.component";
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/interfaces/product.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { Banner } from 'src/app/interfaces/banner.interface';
import { BannerService } from 'src/app/services/banner/banner.service';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ProductListHorizontalComponent } from 'src/app/components/product-list-horizontal/product-list-horizontal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonCol,
    IonRow,
    IonText,
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    ListHeadingComponent,
    BannerComponent,
    CategoriesComponent,
    ProductListHorizontalComponent
],
})
export class HomePage implements OnInit {

  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
  }

  ngOnInit() {}
}
