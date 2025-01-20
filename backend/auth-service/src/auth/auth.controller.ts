import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async register(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.register(loginDto);
  }
}
