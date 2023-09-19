import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { AuthInfoEntity } from './authinfo.entity';
import { LoginInfoDto } from './loginInfo.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthInfoEntity)
        private authInfoRepository: Repository<AuthInfoEntity>
    ) {}

    async loginAuth(info: LoginInfoDto){
        return await this.authInfoRepository.findOne({where: {
            usr: Equal(info.usr)
        }}).then((r) =>{
            
            if(r !== null && r !== undefined){
                
                if(r.pass === info.pass){
                    return true;
                }
            }
        });
        return false;
        
        
    }

}
