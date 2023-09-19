import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';
import { AuthInfoEntity } from './authinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AuthEntity, AuthInfoEntity])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
