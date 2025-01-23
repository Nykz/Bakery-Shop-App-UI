import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { IonRow, IonicSlides } from '@ionic/angular/standalone';
import { Banner } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent  implements OnInit {

  swiperModules = [IonicSlides];
  bannerImages = input<Banner[]>([]);

  constructor() { }

  ngOnInit() {}

}