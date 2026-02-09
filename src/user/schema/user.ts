import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name?: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true, select: false })
    password: string;
    @Prop({ required: true, default: 'user' })
    role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

// 🔐 Automatically exclude password from JSON responses
UserSchema.set('toJSON', {
    transform: (doc, ret: any) => {
        delete ret.password;
        return ret;
    }
});

// 🔐 Hash password automatically
UserSchema.pre<UserDocument>('save', async function () {
    if (!this.isModified('password')) return;

    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
});
