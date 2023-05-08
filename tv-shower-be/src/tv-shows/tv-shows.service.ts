import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { UpdateTvShowDto } from './dto/update-tv-show.dto';
import { TvShow } from './entities/tv-show.entity';

let id = 3;

@Injectable()
export class TvShowsService {
  private tvShows: TvShow[] = [
    {
      id: 1,
      title: 'Totally Completely Fine',
      coverImageUrl:
        'https://streamcoimg-a.akamaihd.net/000/976/28/97628-PosterArt-9a683e1e4f8d3660a4667c6672a2d147.jpg',
      rating: 5,
      description:
        "When self-destructive Vivian discovers the cliffside property she's inherited is a suicide site, she's tasked with becoming its guardian and rescuing lost souls on the verge.",
    },
    {
      id: 2,
      title: 'The Last of Us',
      coverImageUrl:
        'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg',
      rating: 5,
      description:
        'Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across a post-outbreak America.Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across a post-outbreak America.',
    },
  ];
  create(createTvShowDto: CreateTvShowDto): TvShow {
    const newShow = {
      id: id++,
      ...createTvShowDto,
    };
    this.tvShows.push(newShow);
    return newShow;
  }

  findAll(): TvShow[] {
    return this.tvShows;
  }

  findOne(id: number): TvShow | undefined {
    return this.tvShows.find((tvShow) => tvShow.id === id);
  }

  update(id: number, updateTvShowDto: UpdateTvShowDto) {
    const tvShowIndex = this.tvShows.findIndex((tvShow) => tvShow.id === id);
    this.tvShows[tvShowIndex] = {
      ...this.tvShows[tvShowIndex],
      ...updateTvShowDto,
    };
    return this.tvShows[tvShowIndex];
  }

  remove(id: number) {
    return `This action removes a #${id} tvShow`;
  }
}
