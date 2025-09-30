import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton, IonIcon, IonItem, IonInput, IonLabel, IonRadio, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonRadio, IonLabel, IonInput, IonItem, IonIcon, IonButton, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelectOption]
})
export class InscriptionPage implements OnInit {
Login() {
throw new Error('Method not implemented.');
}
Inscription() {
throw new Error('Method not implemented.');
}
nom: any;
prenom: any;
email: any;
password: any;
role: any;
pays: any;
genre: any;
tel: any;
loginWithGoogle() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
