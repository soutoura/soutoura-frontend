import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { 
  mailOutline, eyeOffOutline, lockClosedOutline, 
  lockClosed, logoGoogle, businessOutline,
  peopleOutline,
  homeOutline,
  walletOutline,
  searchOutline, } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  imports: [IonContent, IonicModule],
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {
name: any;

  constructor() {
     addIcons({searchOutline
      });
  }

  ngOnInit() {}

}
