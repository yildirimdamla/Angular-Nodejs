import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent },
  { path: '', component: HomeComponent },
  { path: 'user', component: UserPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
