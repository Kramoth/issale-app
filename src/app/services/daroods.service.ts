import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Service()
export class DaroodsService {
  private http = inject(HttpClient);
  getDaroods() {
    return this.http.get('assets/data/daroods.json');
  }
}
