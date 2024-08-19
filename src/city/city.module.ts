import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheModule as CacheModuleLib } from '@nestjs/cache-manager';
import { CacheModule } from '../cache/cache.module';

@Module({
  imports: [
    CacheModuleLib.register({
      ttl: 604800000,
    }),
    CacheModule,
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
