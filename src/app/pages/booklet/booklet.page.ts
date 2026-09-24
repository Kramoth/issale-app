import { Component, OnInit, inject } from '@angular/core';
import { DaroodsService } from '../../services/daroods.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-booklet',
  templateUrl: './booklet.page.html',
  styleUrls: ['./booklet.page.scss'],
  imports: [IonContent, IonList, IonItem, IonLabel, CommonModule, FormsModule, RouterLink]
})
export class BookletPage {


  constructor() { }
  private daroodsService = inject(DaroodsService);
  daroods$=this.daroodsService.getDaroods();
}
