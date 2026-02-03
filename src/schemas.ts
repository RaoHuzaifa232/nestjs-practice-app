import { Hero, HeroSchema } from './heroes/schema/hero';
import { User, UserSchema } from './user/schema/user';
export const schemas = [
    { name: User.name, schema: UserSchema },
    { name: Hero.name, schema: HeroSchema },
];