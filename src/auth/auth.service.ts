import { Injectable } from "@nestjs/common";
import { CreateOwnerDto } from "../owner/dto/create-owner.dto";
import { OwnerService } from "../owner/owner.service";

@Injectable()
export class AuthService{
      constructor(private readonly ownerService: OwnerService){}

      async validateOwner (createOwnerDto: CreateOwnerDto): Promise<any>{
            
      }
}