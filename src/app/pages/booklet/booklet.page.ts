import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-booklet',
  templateUrl: './booklet.page.html',
  styleUrls: ['./booklet.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BookletPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
