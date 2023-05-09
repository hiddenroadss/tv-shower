export class CreateTvShowDto {
  title: string;
  coverImageUrl: string;
  rating: number;
  description?: string;
  moods: { title: string; percentage: number }[];
}
