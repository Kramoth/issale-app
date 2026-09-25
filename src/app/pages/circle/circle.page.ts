import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
  imports: [IonContent, IonButton, CommonModule, FormsModule]
})
export class CirclePage {
  target = 12000;
  step = 500;
  constructor() { }
  steps = Array.from({ length: this.target / this.step }, () => ({ coche: false }));
  tick(step: any) {
    step.coche = !step.coche;
    console.log("coche")
  }
  restant() {
    const done = this.steps.filter(p => p.coche).length * this.step;
    return this.target - done;
  }
}
