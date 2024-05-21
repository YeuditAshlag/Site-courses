import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/category.model';
import { User } from '../../user/user.model';


@Component({
  selector: 'app-all-courses',
  // standalone: true,
  // imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  public listCourses!:Course[];
  public courses:Course[]=[];
  categories: Category[] = [];
  isShow:boolean=false;
 // styleUrls: ['./all-courses.component.scss']


  //asdfghjkluytresrtyuiouytretyu
  newdate=new Date();
  nextWeekDateString=new Date(this.newdate.getTime()+7*24*60*60*1000);
  nextWeekDate=new Date(this.nextWeekDateString);
  user:User=new User();
  getWithSplit(course:any){
    const dateString=course.dateStart;
    const partDate=dateString.split('-');
    const dateObject = new Date(`${partDate[2]}-${partDate[1]}-${partDate[0]}`);
    console.log("a", dateObject, "b", this.nextWeekDate);
    return dateObject < this.nextWeekDateString ? 'date' : null;
  }


  private source$:Observable<any>=new Observable((observer)=>{
    observer.next("hjkbjb hb")
    observer.next(2)
    setTimeout(()=>{
      observer.next(3)
    },3000)
    observer.complete()
    observer.next(4)
  })
  constructor(private _courseService:CourseService,private _categories:CategoriesService, private router:Router){}

  ngOnInit(): void {
    const lecturerPassword = sessionStorage.getItem('lecturerPassword');
    const userPassword = sessionStorage.getItem('userPassword');
  
    if (!lecturerPassword && !userPassword) {
      // אם אף מהם אינם קיימים בלוקל סטורג, מפנים לדף ההתחברות
      this.router.navigate(['user/login']);
      return; // ייתכן ורצוי להוסיף גם return כדי להפסיק את ריצת הקוד לאחר הניווט
    }
      // this.user=.getItem('user');
      this.isShow=localStorage.getItem('IsLecturer')=="true"
      if(this.isShow==true)
      {
  
      }
    
    // this.user=JSON.parse(sessionStorage.getItem('user')??"");
    // console.log(this.user)
    this._courseService.getAllCourses().subscribe({
      next:(res)=>{
        this.listCourses=res;
        this.courses=this.listCourses
        console.log(res)
      }
    })

    this._categories.getCategories().subscribe({
      next:(res)=>{
        this.categories=res;
      }
    })
    this.source$.subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log('finish')
      }
    })

  }

  save(cour:Course){
    this.listCourses.push(cour);
     this.isShow=false;
  }
  
  deleteCourse(id: number) {
    // A variable that contains the code of the connected lecturer
    const lecturerCode = sessionStorage.getItem('lecturerCode');
  console.log("codek",id)
  console.log("lecturerCode",lecturerCode)
 

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Checking whether the current user is the connected lecturer
        if (lecturerCode) {
          this._courseService.getCourseById(id).subscribe(
            (course: Course) => {
              console.log("course.lecturerId",course)
              if (course && course.lecturerId === Number(lecturerCode)) {
                // The user is the connected lecturer - we will delete the course
                this._courseService.deleteCourse(id).subscribe(
                  () => {
                    Swal.fire({
                      title: "Deleted!",
                      text: "The Course was deleted successfully!",
                      icon: "success"
                    });
                  },
                  (error) => {
                    console.error("Error deleting course", error);
                    Swal.fire({
                      title: "Error",
                      text: "An error occurred while deleting the course. Please try again.",
                      icon: "error"
                    });
                  }
                );
              } else {
                // The current user is not the connected lecturer - display appropriate message
                Swal.fire({
                  title: "Access Denied",
                  text: "You don't have permission to delete this course.",
                  icon: "error"
                });
              }
            },
            (error) => {
              console.error("Error fetching course by id", error);
              Swal.fire({
                title: "Error",
                text: "An error occurred while fetching the course details. Please try again.",
                icon: "error"
              });
            }
          );
        } else {
          console.error("Lecturer code not available.");
          Swal.fire({
            title: "Error",
            text: "Lecturer code is not available. Please log in again.",
            icon: "error"
          });
        }
      }
    });
  }
  
  

  change(){
    if(localStorage.getItem("IsLecturer")=="true"){
    this.router.navigate(['/add']);
    }
  }

  to_array(){
    this.courses=this.listCourses;
  }
  details(cour:Course){
    this.router.navigate(['/details',cour])
    
  }
    
    
    
isCourseStartingSoon(course: Course): boolean {
    const today = new Date();
    const courseStartDate = new Date(Date.parse(course.dateStart)); // Assuming date parsing works correctly
    const differenceInDays = Math.floor((courseStartDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return differenceInDays >= 0 && differenceInDays < 7;
  }
 

  selectedCategory=-1;
  selectedLearningType=-1;
  selectedName="";
  changeFilter(){
      this.listCourses=this.courses.filter(c=>(this.selectedCategory==-1||c.categoryId==this.selectedCategory)&&
      (this.selectedLearningType==-1||c.wayOfLearning==this.selectedLearningType)&&c.namecourse?.includes(this.selectedName))
  }


  navEdit(CourseToEdit:Course){
    if(localStorage.getItem("IsLecturer")=="true"){
      this._courseService.courseToEdit=CourseToEdit;
      this.router.navigate(['/courses/edit'])

    }
    

  }  
  }

  
 