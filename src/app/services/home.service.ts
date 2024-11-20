import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner, ICollection, ILayout } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly BASE_URL = 'https://maxwell-backend-82fvq.ondigitalocean.app/home';

  constructor(private http: HttpClient) { }

  // Fetch banners
  getBanners(): Observable<IBanner[]> {
    return this.http.get<IBanner[]>(`${this.BASE_URL}/banners`);
  }

  // Fetch all collections
  getAllCollections(): Observable<ICollection[]> {
    return this.http.get<ICollection[]>(`${this.BASE_URL}/collection/all`);
  }

  // Fetch a single collection by ID
  getCollectionById(id: number): Observable<ICollection> {
    return this.http.get<ICollection>(`${this.BASE_URL}/collection/${id}`);
  }

  // Fetch layout details
  getLayouts(): Observable<ILayout[]> {
    return this.http.get<ILayout[]>(`${this.BASE_URL}/layout`);
  }

}
