import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonIcon} from '@ionic/angular/standalone';
import {
  mailOutline, eyeOffOutline, lockClosedOutline,
  lockClosed, logoGoogle, arrowForwardOutline, checkmarkOutline } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule ,  IonIcon]
})
export class WelcomePage implements OnInit {

  constructor() {
    addIcons({arrowForwardOutline,checkmarkOutline,logoGoogle,mailOutline,lockClosedOutline,eyeOffOutline,lockClosed});
  }

  ngOnInit() {
  }

}
