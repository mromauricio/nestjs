import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Client } from './clients/entities/client.entity';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mauriciooliveira',
      password: '',
      database: 'mauriciooliveira',
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



