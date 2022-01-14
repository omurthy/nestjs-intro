import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("ısers")
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getAllUsers() {
        const users = await this.userService.getUsers();
        return users;
    }

}