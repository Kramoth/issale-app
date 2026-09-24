import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Service()
export class DaroodsService {
  private http = inject(HttpClient);
  getDaroods() {
    return this.http.get<any[]>('assets/data/daroods.json');
  }
  getDaroodById(id: number) {
    return this.getDaroods().pipe(
      map(daroods => daroods.find(d => d.id === id))
    );
  }
}
