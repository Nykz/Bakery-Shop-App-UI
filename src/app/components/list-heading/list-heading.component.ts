import { Component, input, OnInit } from '@angular/core';
import { IonItemDivider, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-heading',
  templateUrl: './list-heading.component.html',
  styleUrls: ['./list-heading.component.scss'],
  imports: [IonItemDivider, IonButton]
})
export class ListHeadingComponent  implements OnInit {

  heading = input<string>('');
  buttonTitle = input<string>('See All');

  constructor() { }

  ngOnInit() {}

}
