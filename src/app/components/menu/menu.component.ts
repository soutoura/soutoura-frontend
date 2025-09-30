import { Component, OnInit } from '@angular/core';
import { IonItem, IonContent, IonList, IonRouterOutlet, IonToolbar, IonHeader, IonTitle, IonMenu, IonIcon, IonImg, IonFooter, IonTabBar, IonApp, IonTabButton, IonLabel } from "@ionic/angular/standalone";
import { 
  mailOutline, eyeOffOutline, lockClosedOutline, 
  lockClosed, logoGoogle, businessOutline,
  peopleOutline,
  homeOutline,
  walletOutline, } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonLabel, IonTabButton, IonApp, IonTabBar, IonFooter, IonImg, IonIcon, IonTitle, IonHeader, IonToolbar, IonRouterOutlet, IonList, IonContent, IonItem, IonMenu],
})
export class MenuComponent  implements OnInit {

  constructor() {
      addIcons({logoGoogle,mailOutline,lockClosedOutline,eyeOffOutline,lockClosed,
        businessOutline, peopleOutline, homeOutline, walletOutline
      });
       }

  ngOnInit() {}

}
