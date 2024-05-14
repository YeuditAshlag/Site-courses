import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCours() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'https://localhost:7132/api';



  constructor(private http: HttpClient) { }

  courseToEdit!:Course
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/Course`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/Course/${id}`);
  }
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/Course`,course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/Course/${id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.baseUrl}/Course/${id}`);
    
  }
}