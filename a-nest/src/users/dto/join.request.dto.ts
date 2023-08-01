import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class JoinRequestDto {
    @ApiProperty({
     example: 'zerohch0@gmail/com',
     description: '이메일',
    })
    
   public email: string;

   public nickname: string;

   public password: string;
}