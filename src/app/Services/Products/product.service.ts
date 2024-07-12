import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  URL = "http://localhost:5000/api/product";

  getProducts():Observable<any[]> {
    return this.http.get<any[]>(this.URL)
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`)
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.URL, product)
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/${id}`, product)
  }
}
