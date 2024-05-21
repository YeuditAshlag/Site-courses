
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private apiUrl: string = 'https://localhost:7132/api/lecturer'; // Assuming the endpoint for lecturers is /lecturers

  constructor(private http: HttpClient) { }

  getAllLecturers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getLecturerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addLecturer(lecturer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, lecturer);
  }

  updateLecturer(lecturer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${lecturer.code}`, lecturer);
  }

  deleteLecturer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  checkLecturerCredentials(name: string, password: string): Observable<any> {
    return new Observable(observer => {
      console.log(name ,password)
      this.getAllLecturers().subscribe(lecturers => {
        console.log(lecturers)
        const foundLecturer = lecturers.find(lecturer => lecturer.nameLecturer === name && lecturer.password === password);
        if(foundLecturer){
          localStorage.setItem("IsLecturer","true");
          localStorage.setItem("user",name);
        }
        
         
         observer.next(foundLecturer);
         observer.complete();
      });
    });
  }
}
