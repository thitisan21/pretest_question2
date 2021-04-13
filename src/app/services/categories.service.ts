import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get("https://api.publicapis.org/categories").pipe(tap(async (res: any) => {
    }));
  }
}
