import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(name?: string): User[];
    getUserById(id: string): User;
    createUser(body: CreateUserDto): {
        name: string;
        id: number;
    };
}
