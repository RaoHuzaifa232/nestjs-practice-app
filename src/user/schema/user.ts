import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name?: string;
    @Prop()
    birthDate?: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop()
    age?: number;
    @Prop({ required: true, select: false })
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

// 🔐 Hash password automatically
UserSchema.pre<UserDocument>('save', async function () {
    if (!this.isModified('password')) return;

    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
});
