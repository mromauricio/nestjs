import { Controller } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Crud } from '@nestjsx/crud';
import { Client } from './entities/client.entity';

@Crud({
  model: {
    type: Client
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  }
})

@Controller('clients')
export class ClientsController {
  constructor(public service: ClientsService) {}
}
