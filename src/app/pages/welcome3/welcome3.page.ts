import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import {
  mailOutline, eyeOffOutline, lockClosedOutline,
  lockClosed, logoGoogle, arrowForwardOutline, checkmarkOutline } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
@Component({
  selector: 'app-welcome3',
  templateUrl: './welcome3.page.html',
  styleUrls: ['./welcome3.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule]
})
export class Welcome3Page implements OnInit {

  constructor() {
        addIcons({arrowForwardOutline,checkmarkOutline,logoGoogle,mailOutline,lockClosedOutline,eyeOffOutline,lockClosed});

  }

  ngOnInit() {
  }

}
