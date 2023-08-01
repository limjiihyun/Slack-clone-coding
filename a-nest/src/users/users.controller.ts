import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinRequestDto } from './dto/join.request.dto';
import { ApiOperation } from '@nestjs/swagger';


@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({summary: '내 정보 조회'})
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @ApiOperation({summary: '로그인'})
  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @ApiOperation({summary: '로그 아웃'})
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
