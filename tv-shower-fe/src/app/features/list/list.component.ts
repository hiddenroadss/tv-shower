import { Component } from '@angular/core';
import { TvShowsService } from 'src/app/core/services/tv-shows/tv-shows.service';
import { TvShow } from 'src/app/shared/tv-show.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [``],
})
export class ListComponent {
  tvShows$: Observable<TvShow[]> | undefined;

  constructor(private tvShowsService: TvShowsService) {}

  ngOnInit() {
    this.tvShows$ = this.tvShowsService.getAll();
  }
}
