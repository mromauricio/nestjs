import { Controller } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Crud } from '@nestjsx/crud';
import { Usuario } from './entities/usuario.entity';

@Crud({
  model: {
    type: Usuario
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  }
})

@Controller('usuarios')
export class UsuariosController {
  constructor (public service: UsuariosService) {}
}
