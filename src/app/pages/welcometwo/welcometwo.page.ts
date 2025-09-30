import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonIcon } from '@ionic/angular/standalone';
import {
  mailOutline, eyeOffOutline, lockClosedOutline,
  lockClosed, logoGoogle, arrowForwardOutline, checkmarkOutline } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-welcometwo',
  templateUrl: './welcometwo.page.html',
  styleUrls: ['./welcometwo.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule]
})
export class WelcometwoPage implements OnInit {

  constructor() {
        addIcons({arrowForwardOutline,checkmarkOutline,logoGoogle,mailOutline,lockClosedOutline,eyeOffOutline,lockClosed});

  }

  ngOnInit() {
  }

}
