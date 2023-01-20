import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, PassportModule],
  providers: [UserService, LocalStrategy, AuthService, PrismaService],
})
export class AuthModule {}
