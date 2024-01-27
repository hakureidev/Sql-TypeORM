import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  /**
   * import: Optional list of imported modules that export the providers which are required in this module.
   * controllers: Optional list of controllers defined in this module which have to be instantiated.
   * providers: Optional list of providers that will be instantiated by the Nest injector and that may be shared at least across this module.
   */
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'norieau',
      password: 'ganteng',
      database: 'online_store',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
