import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon]
})
export class HomePage {

  cards = [
    { title: "Livret Issale Sawab", icone: "assets/icon/book.svg", subtitle:"Ouvrir le booklet", path:"/tabs/booklet"},
    { title: "Tasbih", icone: "assets/icon/tasbih2.svg", subtitle: "Ouvrir l'outils Tasbih", path:"/tabs/tasbih" },
    { title: "Compteur", icone: "assets/icon/usersRound.svg", subtitle: "Utilitaire pour compter a plusieurs", path:"/tabs/circle" },
  ]
  private router = inject(Router);
  constructor() { }
  go(path: string) {
    console.log(path);
    this.router.navigateByUrl(path);
  }

}
