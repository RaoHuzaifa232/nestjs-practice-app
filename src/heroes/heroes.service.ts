import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Hero } from './schema/hero';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Hero.name)
    private readonly heroModel: Model<Hero>
  ) { }

  async create(hero: Hero) {
    try {
      const newHero = new this.heroModel(hero);
      return await newHero.save();
    }
    catch (error) {
      console.error("Error creating hero:", error);
      throw error;
    }
  }

  async findAll(): Promise<Hero[]> {
    try {
      return this.heroModel.find().exec();
    }
    catch (error) {
      console.error("Error retrieving heroes:", error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Hero> {
    try {
      const hero = await this.heroModel.findById(id).exec();
      if (!hero) {
        throw new Error('Hero not found');
      }
      return hero;
    }
    catch (error) {
      console.error(`Error retrieving hero with ID ${id}:`, error);
      throw error;
    }
  }

  async delete(id: string): Promise<Hero> {
    try {
      const result = await this.heroModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new Error('Hero not found');
      }
      return result;
    }
    catch (error) {
      console.error(`Error deleting hero with ID ${id}:`, error);
      throw error;
    }
  }
}