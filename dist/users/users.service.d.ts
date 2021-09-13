import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entity/user.entity';
export declare class UsersService {
    private readonly usersList;
    findAll(name: any): User[];
    findById(userId: number): User;
    createUser(createUserDto: CreateUserDto): {
        name: string;
        id: number;
    };
}
