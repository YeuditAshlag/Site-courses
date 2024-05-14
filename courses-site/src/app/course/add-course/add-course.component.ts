import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course, wayOfLearn } from '../course.model';
import { Category } from '../../categories/category.model';
import { CategoriesService } from '../../categories/categories.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  courseId: number | undefined;
  course: Course | undefined;
  categories: Category[] = [];
  userId!: number;
  courseForm!: FormGroup;
  constructor(private _serivice: CourseService, private _activate: ActivatedRoute,
    private _fb: FormBuilder, private _router: Router,private _category: CategoriesService) { }

  ngOnInit() {
    const code=(sessionStorage.getItem("lecturerCode"))
    console.log(code)
    if(!code)
     this._router.navigate(["courses"])
    this.courseForm= new FormGroup({
      "codeCourse": new FormControl(0, [Validators.required]),
      "namecourse": new FormControl(this.course?.namecourse, [Validators.required]),
      "categoryId": new FormControl(this.course?.categoryId??0, [Validators.required]),
      "accountLessons": new FormControl(this.course?.accountLessons, [Validators.required]),
      "dateStart": new FormControl(this.course?.dateStart, [Validators.required]),
      "syllabus": this._fb.array([]),
      "wayOfLearning": new FormControl(this.course?.wayOfLearning?.valueOf(), [Validators.required]),
      "lecturerId":new FormControl(Number(code)),
      "imageUrl": new FormControl(this.course?.imageUrl, [Validators.required]),

    });

 



    let userId = sessionStorage.getItem('lecturerCode');
    if (userId != undefined){
      this.userId = +userId;
    }
      
    else {
      //error!!!
      // this._router.navigate(['notfound']);
    }
    this._category.getCategories().subscribe({
      next: (res) => {
       console.log(res+"errorerror")
      this.categories=res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
    this._activate.params.subscribe(params => {
      const id = params['codeCourse'];
      if (id != undefined)
        this.courseId = id;

    })
    if (this.courseId != undefined) {
      let myCourse = this._serivice.getCourseById(this.courseId);
      // this.course = myCourse![0];
    }
    else {
      this.course = new Course();
      this.course.categoryId = 1;
      this.course.wayOfLearning = wayOfLearn.frontal;
    }
     this._serivice.addCourse(this.courseForm.value);

    this.course?.syllabus?.forEach(s => this.syllabusArray.push(this._fb.control(s)));
  }

  get syllabusArray(): FormArray {
    return this.courseForm.get('syllabus') as FormArray;
  }

  getSyllabusControl(index: number) {
    return this.syllabusArray.at(index) as FormControl;
  }
 

 
  addSyllabus() {
    console.log("add")
    this.syllabusArray.push(this._fb.control(''));
  }

  removeSyllabus(index: number) {
    this.syllabusArray.removeAt(index);
  }

  checkIsFullField(index: number) {
    let syllsbusItem = this.getSyllabusControl(index);
    if (syllsbusItem.value != "")
      this.addSyllabus();
    else
      this.removeSyllabus(index);
    console.log(syllsbusItem);
  }

  submitForm() {
    if (this.courseForm.valid) {
      this.syllabusArray.controls.forEach((c, i) => {
        if (c.value === "") {
          this.removeSyllabus(i);
        }
      });
  
      const courseData = {
        ...this.courseForm.value,
        lecturerId: this.userId,
        wayOfLearning: +this.courseForm.value.wayOfLearning,
        accountLessons: +this.courseForm.value.accountLessons
      };
  
      console.log(courseData);
  
      this._serivice.addCourse(courseData).subscribe({
        next: () => this._router.navigate(['/courses']),
        error: (err) => console.error("Error adding course:", err)
      });
    } else {
      alert("You have missing fields");
    }
  }
  

}