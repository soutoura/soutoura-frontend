import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonIcon, IonInput, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, mailOutline, lockClosedOutline } from 'ionicons/icons';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-login-association',
  templateUrl: './login-association.page.html',
  styleUrls: ['./login-association.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, CommonModule, FormsModule, IonItem, IonInput,]
})
export class LoginAssociationPage implements OnInit {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  

  ngOnInit() {
  }


  constructor(private authService: Auth) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  login() {
    if(!this.email || !this.password) {
      console.log('Veuillez remplir tous les champs.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        console.log('Connexion réussie ! Token:', response.token);
      },
      error: (error) => {
        console.log('this.email:', this.email);
        console.log('this.password:', this.password);
        console.error('Erreur de connexion:', error);
      },
    });
  }

  loginWithGoogle() {
    console.log('Login avec Google');
  }

  forgotPassword() {
    console.log('Mot de passe oublié');
  }

  goToRegister() {
    console.log('Créer un compte');
  }

  



}
