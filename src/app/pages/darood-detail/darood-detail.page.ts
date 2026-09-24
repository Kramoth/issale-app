import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-darood-detail',
  templateUrl: './darood-detail.page.html',
  styleUrls: ['./darood-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DaroodDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
