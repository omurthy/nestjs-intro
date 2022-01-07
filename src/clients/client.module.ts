import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClientController } from "./client.controller";
import { ClientSchema } from "./client.model";
import { ClientService } from "./client.service";

@Module({
    imports: [MongooseModule.forFeature([
        { name: "Client", schema: ClientSchema }
    ])],
    controllers: [ClientController],
    providers: [ClientService]

})
export class ClientModule { }