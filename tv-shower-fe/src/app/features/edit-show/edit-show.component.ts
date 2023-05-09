import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowsService } from 'src/app/core/services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styles: [],
})
export class EditShowComponent {
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
    moods: new FormArray<FormGroup>([]),
  });

  id!: number;
  constructor(
    private tvShowsService: TvShowsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tvShowsService.getOne(this.id).subscribe((data) => {
      this.form.controls.title.setValue(data.title);
      this.form.controls.coverImageUrl.setValue(data.coverImageUrl);
      this.form.controls.rating.setValue(data.rating);
      this.form.controls.description.setValue(data.description || '');
      data.moods.forEach((mood) => {
        this.form.controls.moods.push(
          new FormGroup({
            title: new FormControl(mood.title),
            percentage: new FormControl(mood.percentage),
          })
        );
      });
    });
  }

  submit() {
    this.tvShowsService
      .updateOne(this.form.value as any, this.id)
      .subscribe(() => {
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
