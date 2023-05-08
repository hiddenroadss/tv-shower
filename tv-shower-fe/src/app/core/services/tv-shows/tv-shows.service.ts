import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow } from 'src/app/shared/tv-show.model';

const BACK_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<TvShow[]>(`${BACK_URL}/tv-shows`);
  }

  getOne(id: number) {
    return this.http.get<TvShow>(`${BACK_URL}/tv-shows/${id}`);
  }

  addOne(newTvShow: Omit<TvShow, 'id'>) {
    return this.http.post<{ success: boolean }>(
      `${BACK_URL}/tv-shows`,
      newTvShow
    );
  }

  updateOne(updateTvShow: Omit<TvShow, 'id'>, id: number) {
    return this.http.patch(`${BACK_URL}/tv-shows/${id}`, updateTvShow);
  }
}
