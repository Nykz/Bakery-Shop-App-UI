import { Component, input } from '@angular/core';
import { IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-image-circle',
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss'],
  imports: [IonAvatar]
})
export class ImageCircleComponent {

  image = input<string>('');

  constructor() { }

}
