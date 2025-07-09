export class CreateHeroDto {
  id: string;
  name: string;
  birthDate: string;
  deathDate?: string;
  age: number;
  country: string;
  description?: string;
}
