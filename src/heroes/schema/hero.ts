import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Hero {
  @Prop()
  name: string;
  @Prop()
  birthDate: string;
  @Prop()
  deathDate?: string;
  @Prop()
  age: number;
  @Prop()
  country: string;
  @Prop()
  description?: string;
}
export const HeroSchema = SchemaFactory.createForClass(Hero);