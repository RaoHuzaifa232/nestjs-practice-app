import { Injectable } from '@nestjs/common';
import { Hero } from './schema/hero';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Hero.name)
    private readonly heroModel: Model<Hero>
  ) { }
  private heroes: Array<Hero> = [
    // {
    //   id: '0',
    //   name: 'Prophet Muhammad',
    //   birthDate: '570-06-08',
    //   deathDate: '632-06-08',
    //   age: 63,
    //   country: 'Saudi Arabia',
    //   description:
    //     'Religious leader and founder of Islam, regarded as the last prophet in Islam.',
    // },
    // {
    //   id: '1',
    //   name: 'Muhammad Ali Jinnah',
    //   birthDate: '1876-12-25',
    //   deathDate: '1948-09-11',
    //   age: 71,
    //   country: 'Pakistan',
    //   description:
    //     'Founder of Pakistan and its first Governor-General, known for his leadership in the Indian independence movement.',
    // },
    // {
    //   id: '2',
    //   name: 'Harriet Tubman',
    //   birthDate: '1822-03-01',
    //   deathDate: '1913-03-10',
    //   age: 91,
    //   country: 'United States',
    //   description:
    //     'Abolitionist and political activist who helped slaves escape through the Underground Railroad.',
    // },
    // {
    //   id: '3',
    //   name: 'Martin Luther King Jr.',
    //   birthDate: '1929-01-15',
    //   deathDate: '1968-04-04',
    //   age: 39,
    //   country: 'United States',
    //   description:
    //     'Civil rights leader who advocated for racial equality through nonviolence.',
    // },
    // {
    //   id: '4',
    //   name: 'Nelson Mandela',
    //   birthDate: '1918-07-18',
    //   deathDate: '2013-12-05',
    //   age: 95,
    //   country: 'South Africa',
    //   description:
    //     'Anti-apartheid revolutionary and the first black president of South Africa.',
    // },
    // {
    //   id: '5',
    //   name: 'Joan of Arc',
    //   birthDate: '1412-01-06',
    //   deathDate: '1431-05-30',
    //   age: 19,
    //   country: 'France',
    //   description:
    //     "French heroine and military leader who led troops during the Hundred Years' War.",
    // },
    // {
    //   id: '6',
    //   name: 'Florence Nightingale',
    //   birthDate: '1820-05-12',
    //   deathDate: '1910-08-13',
    //   age: 90,
    //   country: 'United Kingdom',
    //   description:
    //     'Founder of modern nursing, known for her service during the Crimean War.',
    // },
    // {
    //   id: '7',
    //   name: 'Alexander the Great',
    //   birthDate: '356 BC',
    //   deathDate: '323 BC',
    //   age: 32,
    //   country: 'Macedon',
    //   description:
    //     'Military commander who created one of the largest empires in ancient history.',
    // },
    // {
    //   id: '8',
    //   name: 'George Washington',
    //   birthDate: '1732-02-22',
    //   deathDate: '1799-12-14',
    //   age: 67,
    //   country: 'United States',
    //   description:
    //     'First President of the United States and commander of the Continental Army during the American Revolution.',
    // },
  ];

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
}
