import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, wayOfLearn } from '../course.model';
import { CourseService } from '../course.service';
import { CourseModule } from '../course.module';

@Component({
  selector: 'app-course-details',
  // standalone: true,
  // imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course!:Course
  courseId!:number;
  likes: number = 0;
  dislikes: number = 0;

  
  constructor(private route:ActivatedRoute,private _courseService:CourseService,private router:Router){}
  ngOnInit():void{
    this.route.params.subscribe((param)=>{
      this.courseId=param['codeCourse'];
      console.log("paramId",this.courseId)
      this._courseService.getCourseById(this.courseId).subscribe({
        next:(res)=>{
          this.course=res;
          console.log("course",this.course)
        },
        error:(err)=>{
          console.log(err);
        }
      })
    })

    
  }
  return_func(){
    this.router.navigate(['courses'])
  }

  onLikeClick() {
    this.likes++;
    // Implement logic to store like count in database (optional)
  }

  onDislikeClick() {
    this.dislikes++;
    // Implement logic to store dislike count in database (optional)
  }

}
