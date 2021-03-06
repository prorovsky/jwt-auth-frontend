import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './users-list/user-detail/user-detail.component';
import { PostComponent } from './post/post.component';

const ROUTES = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'profile/:id',
    component: UserDetailComponent
  },
  {
    path: '**',
    component: PostComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
