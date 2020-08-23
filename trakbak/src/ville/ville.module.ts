import { Module } from '@nestjs/common';
import { VilleResolver } from './ville.resolver';

@Module({
  providers: [VilleResolver]
})
export class VilleModule {}
