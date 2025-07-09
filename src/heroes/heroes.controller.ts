import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { HeroesService } from './heroes.service';
import { Hero } from './interfaces/heroes.interface';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Post('create')
  createHero(@Body() createHeroDto: CreateHeroDto) {
    return this.heroesService.create(createHeroDto);
  }

  @Get('all')
  findAll(): Array<Hero> {
    return this.heroesService.findAll();
  }
  @Get(':id')
  findOne(@Param(':id') id: string): string {
    return `Hero details for the given ID ${id}`;
  }

  @Delete(':id')
  deleteHero(@Param(':id') id: string): string {
    return `Hero with ID ${id} has been deleted`;
  }
}
