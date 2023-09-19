import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginInfoDto } from './loginInfo.dto';
import { AuthService } from './auth.service';

@Controller('API/auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body()login: LoginInfoDto){
        //console.log(login);
        
        return this.authService.loginAuth(login);
    }
}
