import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { AboutComponent } from './about/about.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { AuthGuardService } from './aughguard.guard';
import { LogOutComponent } from './user/log-out/log-out.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'add',component:AddCourseComponent},
    {path:'logout',component:LogOutComponent},
    {path:"details",component:CourseDetailsComponent },
    { path: 'user', loadChildren: () => import('./user/user.module').then(c => c.UserModule)},
    {path:"courses",loadChildren:()=>import('./course/course.module').then(c=>c.CourseModule)  ,canActivate: [AuthGuardService]},
    // { path: '**', component: NotFoundComponent },
];