import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';

 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
   constructor(private platform: Platform) {}

  async ngOnInit() {
    await this.platform.ready();

    Keyboard.setScroll({ isDisabled: false });
    Keyboard.setResizeMode({ mode: KeyboardResize.Body }); 
  }
}
