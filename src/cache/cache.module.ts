import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as CacheModuleLib } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModuleLib.register({
      ttl: 604800000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
