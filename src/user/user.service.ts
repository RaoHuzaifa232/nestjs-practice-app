import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>
    ) { }

    async createUser(user: { email: string, password: string }) {
        try {
            // Check if email already exists
            const existingUser = await this.userModel.findOne({ email: user.email });
            if (existingUser) {
                throw new Error('User with this email already exists');
            }

            const newUser = new this.userModel(user);
            return await newUser.save();
        }
        catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    async findByEmailWithPassword(email: string) {
        return this.userModel
            .findOne({ email })
            .select('+password');
    }

    async updateUser(userId: string, updateData: any) {
        try {
            // Remove sensitive fields that should not be updated
            delete updateData.password;
            delete updateData.email;
            
            return this.userModel.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
        } catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }
}