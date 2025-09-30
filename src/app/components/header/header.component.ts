import { Component, Input, OnInit } from '@angular/core';
import { IonMenuButton, IonButton, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButtons, IonBackButton, IonTitle, IonHeader, IonMenuButton, IonButton, IonHeader, IonToolbar, IonHeader],
})
export class HeaderComponent  implements OnInit {
  @Input() titre: string = "";

  constructor() { }

  ngOnInit() {}

}
