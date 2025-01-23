import { Injectable } from '@angular/core';
import { banners } from 'src/app/dummy-data/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  getBanners() {
    return banners;
  }
}
