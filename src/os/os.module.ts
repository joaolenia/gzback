import { Module } from '@nestjs/common';
import { OsService } from './os.service';
import { OsController } from './os.controller';
import { ServiceOrder } from './entities/os.entitiy';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOrder])],
  controllers: [OsController],
  providers: [OsService],
})
export class OsModule {}
