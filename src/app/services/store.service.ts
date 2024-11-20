import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly BASE_URL = 'https://maxwell-backend-82fvq.ondigitalocean.app/store';

  constructor(private http: HttpClient) { }

  fetchProductsByCollection(collectionId: number): Observable<any> {
    const body = { collections: [collectionId] };
    return this.http.post<any>(`${this.BASE_URL}/products`, body);
  }

  fetchProductDetailById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/product/${productId}`);
  }

  fetchProductByCategory(categoryId: number): Observable<any> {
    const body = { categories: [categoryId] };
    return this.http.post<any>(`${this.BASE_URL}/products`, body);
  }
}
