// src/auth/auth.controller.ts
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        // 本来はLoginGuardでバリデーション
        const user = await this.authService.validateUser(
            loginDto.email,
            loginDto.password,
        );
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }
}
