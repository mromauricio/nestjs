import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService extends TypeOrmCrudService<Usuario> {
  constructor (@InjectRepository(Usuario) repo) {
    super(repo)
  }
}
