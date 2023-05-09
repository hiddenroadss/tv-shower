export interface TvShow {
  id: number;
  title: string;
  coverImageUrl: string;
  rating: number;
  description?: string;
  moods: { title: string; percentage: number }[];
}
