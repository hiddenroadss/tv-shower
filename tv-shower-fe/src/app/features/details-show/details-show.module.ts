import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsShowComponent } from './details-show.component';


const routes: Routes = [
  { path: '', component: DetailsShowComponent }
];

@NgModule({
  declarations: [
    DetailsShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsShowModule { }
