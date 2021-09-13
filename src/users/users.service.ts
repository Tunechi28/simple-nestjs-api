import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    private readonly usersList = [{
        id : 0,
        name : 'tochi'
    }, {
        id : 1,
        name : 'bola'
    }, {
        id : 2,
        name : 'Ade'
    }
]
    findAll(name) : User[] {
        if(name){
            return this.usersList.filter(user => user.name === name)
        }
        return this.usersList;
    }

    findById(userId : number) : User {
        return this.usersList.find(user => user.id === userId)
    }

    createUser(createUserDto : CreateUserDto){
        const newUser ={id : Date.now(), ...createUserDto}
        this.usersList.push(newUser)
        return newUser;
    }

}
