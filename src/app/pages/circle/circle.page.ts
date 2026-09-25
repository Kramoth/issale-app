import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonModal, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
  imports: [IonContent, IonButton, IonModal, IonInput, CommonModule, FormsModule]
})
export class CirclePage{

  isModalOpen = false;
  target = 0;
  step = 0;
  constructor() { }
  steps = Array.from({ length: Math.floor(this.target / this.step) }, () => ({ coche: false }));
  remainder = this.target % this.step;
  remainderTick = false;
  tick(step: any) {
    step.coche = !step.coche;
    console.log("coche")
  }
  restant() {
    const done = this.steps.filter(p => p.coche).length * this.step;
    const remainderDone = this.remainderTick ? this.remainder : 0;
    return this.target - done - remainderDone;
  }

  genererGrille() {
    this.steps = Array.from(
      { length: Math.floor(Number(this.target) / Number(this.step)) },
      () => ({ coche: false })
    );
    this.remainder = this.target % this.step;
    this.remainderTick = false;
  }
  valider() {
    this.genererGrille();
    this.isModalOpen = false;
  }
}
