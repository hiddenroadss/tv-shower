export class TvShow {
  id: number;
  title: string;
  coverImageUrl: string;
  rating: number;
  description?: string;
  moodBoard: { title: string; percentage: number }[];
}
