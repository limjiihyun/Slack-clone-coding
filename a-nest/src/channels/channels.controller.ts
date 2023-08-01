import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
    @Get()
    getAllChannels(){
    
    }
    @Post()
    createChannels(){

    }
    @Get(':name')
    getSpecificChannel(){
    
    }
    @Get(':id/chats')
    getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
    }
    @Post(':id/chats')
    postChat(@Body() body) {}

    @Get(':name/members')
    getAllMembers(){
    }

    @Post(':name/members')
    inviteMembers(){
    }
}
