// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        // 本来はDBからユーザーを探す
        const user = this.usersService.findByEmailAndPassword(email, pass);
        return user;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
