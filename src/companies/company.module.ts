import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "./company.controller";
import { CompanySchema } from "./company.model";
import { CompanyService } from "./company.service";

@Module({
    imports: [MongooseModule.forFeature([
        { name: "Company", schema: CompanySchema }
    ])],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule { }