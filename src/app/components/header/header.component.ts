import { Component, Input, OnInit } from '@angular/core';
import { IonMenuButton, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent, IonIcon } from "@ionic/angular/standalone";
import { MenuComponent } from "../menu/menu.component";
import { chevronBackOutline } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonContent, IonButtons, IonBackButton, IonTitle, IonHeader, IonMenuButton, IonButton, IonHeader, IonToolbar, IonHeader, MenuComponent],
})
export class HeaderComponent  implements OnInit {
  @Input() titre: string = "";

  constructor() {
     addIcons({chevronBackOutline
      });
   }

  ngOnInit() {}

}
