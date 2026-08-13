import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { OsService } from './os.service';
import { ServiceOrder } from './entities/os.entitiy';

@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {}


  @Post()
  create(@Body() createOsDto: Partial<ServiceOrder>) {
    return this.osService.create(createOsDto);
  }
  @Get()
  findAll() {
    return this.osService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.osService.findOne(id);
  }

   @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.osService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOsDto: Partial<ServiceOrder>,
  ) {
    return this.osService.update(id, updateOsDto);
  }

  
}