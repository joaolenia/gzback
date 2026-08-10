import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OsModule } from './os/os.module';
import { ServiceOrder } from './os/entities/os.entitiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Seu usuário do MySQL local
      password: '1234567',     // Sua senha do MySQL local
      database: 'oficina_db', // Nome do banco de dados que você criou
      entities: [ServiceOrder],
      synchronize: true, // ATENÇÃO: Use 'true' apenas em desenvolvimento para criar as tabelas automaticamente
    }),
    OsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}