import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesService } from './heroes/heroes.service';
import { schemas } from './schemas';
import { UserController } from './user/user.contoller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>("MONGO_URI", { infer: true });
        if (!uri) {
          throw new Error("MONGO_URI is not defined");
        }
        try {
          const mongoose = await import("mongoose");
          await mongoose.connect(uri, {
            maxPoolSize: 10, // Limit connection pool size
            minPoolSize: 2,  // Minimum connections to maintain
            maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000, // Socket timeout
            bufferCommands: false, // Disable mongoose buffering
          });
          console.log(
            `🟢MongoDB connected successfully Application is running on: http://localhost:${process.env.PORT ?? 3000
            }`
          );
        } catch (err) {
          console.error("🔴 MongoDB connection error:", err);
        }
        return { uri };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature(schemas),

  ],
  controllers: [AppController, HeroesController, UserController],
  providers: [AppService, HeroesService, UserService],
})
export class AppModule { }
