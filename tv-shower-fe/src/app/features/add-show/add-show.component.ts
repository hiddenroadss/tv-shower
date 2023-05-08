import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TvShowsService } from 'src/app/core/services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styles: [],
})
export class AddShowComponent {
  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    coverImageUrl: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    rating: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(500)],
    }),
  });
  constructor(private tvShowsService: TvShowsService, private router: Router) {}

  submit() {
    this.tvShowsService.addOne(this.form.value as any).subscribe(() => {
      this.router.navigate(['list']);
    });
  }
}
