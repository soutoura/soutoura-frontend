import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { 
  mailOutline, eyeOffOutline, lockClosedOutline, 
  lockClosed, logoGoogle } from 'ionicons/icons';
import {
  addIcons
} from "ionicons";
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonImg, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, HeaderComponent]
})
export class LoginPage implements OnInit {
createAccount() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}
forgotPassword() {
throw new Error('Method not implemented.');
}
password: any;
email: any;
loginWithGoogle() {
throw new Error('Method not implemented.');
}

  constructor() {
      addIcons({logoGoogle,mailOutline,lockClosedOutline,eyeOffOutline,lockClosed});
       }

  ngOnInit() {
  }

}

