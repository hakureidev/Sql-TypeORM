import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  /**
   * import: Optional list of imported modules that export the providers which are required in this module.
   * controllers: Optional list of controllers defined in this module which have to be instantiated.
   * providers: Optional list of providers that will be instantiated by the Nest injector and that may be shared at least across this module.
   */
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
