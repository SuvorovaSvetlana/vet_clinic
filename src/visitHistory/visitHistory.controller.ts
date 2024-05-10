import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Request } from "@nestjs/common";
import { VisitHistory } from "./entities/visitHistory.entity";
import { VisitHistoryService } from "./visitHistory.service";
import { CreateVisitHistoryDto } from "./dto/create-visitHistory.dto";
import { UpdateVisitHistoryDto } from "./dto/update-visitHistory.dto";

@Controller('visitHistory')
export class VisitHistoryController {
  constructor(private readonly visitHistoryService: VisitHistoryService) {}

  @Post()
  async create(@Param('id') id:string, @Request() req, @Body() createVisitHistoryDto: CreateVisitHistoryDto){
      return await this.visitHistoryService.create(createVisitHistoryDto, +id)
  }

  @Get()
  async findAll (@Request() req){
      const role = req.user.role;
      if(role === 'admin' || role === 'vet'){
        return await this.visitHistoryService.findAll();
      }else {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
      }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
      const role = req.user.role;
      if(role === 'admin' || role === 'vet'){
            return await this.visitHistoryService.findOne(+id);
      }else{
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
      }
    }
 

  @Patch(':id')
  async update( @Param('id') id: string, @Request() req, @Body() updateVisitHistorylDto: UpdateVisitHistoryDto): Promise<VisitHistory> {
      const role = req.user.role;
      if(role === 'admin'|| role === 'vet'){
            return this.visitHistoryService.update(+id, updateVisitHistorylDto);
      }else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)  
      }
    }


  @Delete(':id')
  remove(@Param('id') id: string, @Request() req): Promise <void> {
      const  role = req.user.role;
      if (role === 'admin' || role === 'vet'){
        return this.visitHistoryService.remove(+id);
      }
       throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
}
