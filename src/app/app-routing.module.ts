import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  // { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
