import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}
    
    @ApiOkResponse({type : User, isArray : true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name ?: string): User[]{
       return this.usersService.findAll(name);
    }

    @ApiOkResponse({type : User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id :string): User{
        const user = this.usersService.findById(Number(id))
        if(!user){
            throw new NotFoundException();
        }

        return user;
    }

    @ApiCreatedResponse({type : User})
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDto){
        return this.usersService.createUser(body)
    }
}
