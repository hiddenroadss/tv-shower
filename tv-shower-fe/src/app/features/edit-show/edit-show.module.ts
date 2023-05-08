import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditShowComponent } from './edit-show.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: EditShowComponent }];

@NgModule({
  declarations: [EditShowComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class EditShowModule {}
