import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.model';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this._http.get<Category[]>("https://localhost:7132/api/category");
  }
}