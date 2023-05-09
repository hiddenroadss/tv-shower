import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
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
    rating: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(500)],
    }),
    moods: new FormArray<FormGroup>([]),
  });
  constructor(private tvShowsService: TvShowsService, private router: Router) {}

  ngOnInit() {
    this.addMood();
  }

  submit() {
    this.tvShowsService.addOne(this.form.value as any).subscribe(() => {
      this.router.navigate(['list']);
    });
  }

  addMood() {
    this.form.controls.moods.push(
      new FormGroup({
        title: new FormControl(''),
        percentage: new FormControl<number | null>(null),
      })
    );
  }

  removeMood(index: number) {
    this.form.controls.moods.removeAt(index);
  }
}
