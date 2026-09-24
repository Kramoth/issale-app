import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaroodsService } from '../../services/daroods.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-darood-detail',
  templateUrl: './darood-detail.page.html',
  styleUrls: ['./darood-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DaroodDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private daroodsService=inject(DaroodsService)
  id = this.route.snapshot.paramMap.get('id');
  darood$ = this.daroodsService.getDaroodById(Number(this.id));
  constructor() { }
  ngOnInit() {
    console.log(this.id);
  }
}
