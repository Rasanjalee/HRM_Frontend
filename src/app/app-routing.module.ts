import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {LoginComponent} from './login/login.component';
import {MyInfoComponent} from './my-info/my-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'detail', component: ShowDetailComponent},
  // {path: 'myInfo', component: MyInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
