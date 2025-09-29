import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton, IonIcon, IonItem } from '@ionic/angular/standalone';
import {
  mailOutline, eyeOffOutline, lockClosedOutline,
  lockClosed, logoGoogle } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-passwordforget',
  templateUrl: './passwordforget.page.html',
  styleUrls: ['./passwordforget.page.scss'],
  standalone: true,
  imports: [IonItem, IonIcon, IonButton, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PasswordforgetPage implements OnInit {
email: any;
send() {
throw new Error('Method not implemented.');
}

  constructor() {
    addIcons({mailOutline});
   }

  ngOnInit() {
  }

}
