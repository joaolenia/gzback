import { Controller } from '@nestjs/common';
import { OsService } from './os.service';

@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {}
}
