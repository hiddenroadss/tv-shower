import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShowsService } from 'src/app/core/services/tv-shows/tv-shows.service';
import { TvShow } from 'src/app/shared/tv-show.model';

@Component({
  selector: 'app-details-show',
  templateUrl: './details-show.component.html',
  styles: [],
})
export class DetailsShowComponent {
  show$: Observable<TvShow> | undefined;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.show$ = this.tvShowsService.getOne(this.id);
  }
}
