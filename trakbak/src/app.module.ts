import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { GraphQLModule } from '@nestjs/graphql';

import { ExpediteurModule } from './expediteur/expediteur.module';
// import { UserModule } from './user/user.module';
// import { VehiculeModule } from './vehicule/vehicule.module';
// import { ChauffeurModule } from './chauffeur/chauffeur.module';
import { TransporteurModule } from './transporteur/transporteur.module';
import { EnchereModule } from './enchere/enchere.module';
import { PropositionModule } from './proposition/proposition.module';

@Module({
  imports: [
    DatabaseModule,
    ExpediteurModule,
    //UserModule,
    //ChauffeurModule,
    //VehiculeModule,
    TransporteurModule,
    EnchereModule,
    PropositionModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      //include: [ExpediteurModule, UserModule, ChauffeurModule, VehiculeModule, TransporteurModule,  EnchereModule ],
      include: [ExpediteurModule, EnchereModule, PropositionModule, TransporteurModule],
      autoSchemaFile: process.cwd() +  '/src/graphql.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
