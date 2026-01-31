import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './schema/hero';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) { }

  @Post('create')
  async createHero(@Body() createHeroDto: Hero) {
    try {
      const result = await this.heroesService.create(createHeroDto);
      return {
        status: "Success",
        hero: result,
        message: "Hero created successfully",
      };
    } catch (error) {
      return {
        status: "Error",
        message: "Failed to create hero",
        error: error.message,
      };
    }
  }

  @Get('all')
  async findAll() {
    const result = await this.heroesService.findAll();
    return {
      status: "Success",
      heroes: result,
      message: `Heroes retrieved successfully`,
    };
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
