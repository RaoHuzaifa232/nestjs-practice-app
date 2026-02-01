import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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
  @Get('hero')
  async findOne(@Query('id') id: string) {
    if (!id) {
      return {
        status: "Error",
        message: "ID query parameter is required",
      };
    }
    try {
      return await this.heroesService.findOne(id);
    }
    catch (error) {
      return {
        status: "Error",
        message: "Failed to retrieve hero",
        error: error.message,
      };
    }
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    try {
      const result = await this.heroesService.delete(id);
      return {
        status: "Success",
        hero: result,
        message: `Hero with ID ${id} has been deleted`,
      }
    }
    catch (error) {
      return {
        status: "Error",
        message: "Failed to delete hero",
        error: error.message,
      };
    }
  }
}