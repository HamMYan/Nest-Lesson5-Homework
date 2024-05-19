import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { Review } from './review/entities/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'Pass@1234',
      database: 'nest5_homework',
      entities: [User, Product, Review],
      synchronize: true
    }),
    UserModule,
    ProductModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
