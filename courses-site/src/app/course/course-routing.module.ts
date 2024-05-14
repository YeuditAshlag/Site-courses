import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { AuthGuardService } from "../aughguard.guard";
import { EditComponent } from "../edit/edit.component";



const c_ROUTES: Route[] = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'add', component:AddCourseComponent },
  { path: 'edit', component:EditComponent },
  { path: 'courses', component:AllCoursesComponent },
  { path: "detailes/:id", component:CourseDetailsComponent ,canActivate: [AuthGuardService] },

  // { path: "edit", component:AddCourseComponent },
]
@NgModule({
  imports:[RouterModule.forChild(c_ROUTES)],
  exports:[RouterModule]
})
export class CourseRoutingModule { }