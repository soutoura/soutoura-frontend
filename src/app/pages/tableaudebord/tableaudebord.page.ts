import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-tableaudebord',
  templateUrl: './tableaudebord.page.html',
  styleUrls: ['./tableaudebord.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, ]
})
export class TableaudebordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
