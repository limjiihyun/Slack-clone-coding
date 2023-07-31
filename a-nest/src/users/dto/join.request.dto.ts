import { Injectable } from "@nestjs/common";

@Injectable()
export default class JoinRequestDto {
   password(email: (email: any, nickname: any, password: any) => void, nickname: (email: (email: any, nickname: any, password: any) => void, nickname: any, password: any) => void, password: any) {
       throw new Error('Method not implemented.');
   }
   nickname(email: (email: any, nickname: any, password: any) => void, nickname: any, password: any) {
       throw new Error('Method not implemented.');
   }
   email(email: any, nickname: any, password: any) {
       throw new Error('Method not implemented.');
   }
   postUsers(email: string, nickname: string, password: string){}
   
}