import { Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatboxEllipses, home, location, heart, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ home, location, heart, chatboxEllipses, person });
  }

  ngOnInit() {}
}
