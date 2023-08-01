import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}
  
  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}

  @Get(':usl/users/:id')
  DEPRECATED_getMemberInfoInWorkspace() {
    this.getMemberInfoInWorkspace();
  }
}
