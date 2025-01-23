import { NgClass } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-veg-nonveg-indicator',
  templateUrl: './veg-nonveg-indicator.component.html',
  styleUrls: ['./veg-nonveg-indicator.component.scss'],
  imports: [NgClass]
})
export class VegNonvegIndicatorComponent  implements OnInit {

  type = input<string>('veg');

  constructor() { }

  ngOnInit() {}

}
