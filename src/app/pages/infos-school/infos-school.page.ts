import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonIcon, } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuComponent } from "src/app/components/menu/menu.component";
import { HeaderComponent } from "src/app/components/header/header.component";
@Component({
  selector: 'app-infos-school',
  templateUrl: './infos-school.page.html',
  styleUrls: ['./infos-school.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonicModule, MenuComponent, HeaderComponent]
})
export class InfosSchoolPage implements OnInit {

  constructor(private navCtrl: NavController) { }

   viewChildren() {
    this.navCtrl.navigateForward('/children');
    }

     callPhone(phoneNumber: string) {
    // Supprimer les tirets pour avoir un format numérique
    const cleanNumber = phoneNumber.replace(/-/g, '');
    // Ouvrir le dialer avec le numéro
    window.open(`tel:${cleanNumber}`, '_system');
  }
  ngOnInit() {}


}
