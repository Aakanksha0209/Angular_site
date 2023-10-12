import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ShareComponent } from './components/share/share.component';

const routes: Routes = [
  { path: '', component: ShareComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})

export class AppRoutingModule { }
