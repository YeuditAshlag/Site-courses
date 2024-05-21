import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseRoutingModule } from "./course-routing.module";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseService } from "./course.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CategoriesService } from "../categories/categories.service";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { LearningTypeIconPipe } from "../user/course.pipe";
import {Component} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from "../header/header.component";
import { EditComponent } from "../edit/edit.component";




@NgModule({
    declarations: [AllCoursesComponent, CourseDetailsComponent, AddCourseComponent,EditComponent],
    providers: [CourseService, CategoriesService, MatGridListModule],
    exports: [MatCardModule, MatButtonModule],
    imports: [LearningTypeIconPipe, CourseRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatLabel, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
        MatFormFieldModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, HeaderComponent,  MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule]
})
export class CourseModule {

}