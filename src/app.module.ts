import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Client } from './clients/entities/client.entity';
import { ClientsModule } from './clients/clients.module';
require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.pg_host,
      port: 5432,
      username: process.env.pg_user,
      password: process.env.pg_password,
      database: process.env.pg_database,
      entities: [Usuario, Client],
      synchronize: true,
      logging: true
    }),
    UsuariosModule,
    ClientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



