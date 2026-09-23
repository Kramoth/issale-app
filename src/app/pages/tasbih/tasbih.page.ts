import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-tasbih',
  templateUrl: './tasbih.page.html',
  styleUrls: ['./tasbih.page.scss'],
  imports: [IonContent, IonButton]
})
export class TasbihPage {

  counter = 0;
  constructor() { }
  increment() {
    this.counter += 1;
  }
  reset() {
    this.counter = 0;
  }

}
