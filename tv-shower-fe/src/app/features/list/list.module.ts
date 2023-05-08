import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { SpinnerComponent } from 'src/app/core/spinner/spinner.component';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';

const routes: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpinnerComponent,
    TruncatePipe,
  ],
})
export class ListModule {}
