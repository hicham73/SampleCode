import { NestFactory  } from '@nestjs/core'
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory  } from '@nestjs/graphql'
import { printSchema } from 'graphql'

import * as fs from 'fs'

import { EnchereResolver } from './enchere/enchere.resolver'
import { ExpediteurResolver } from './expediteur/expediteur.resolver'
import { PropositionResolver } from './proposition/proposition.resolver'

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();
  
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([EnchereResolver, ExpediteurResolver, PropositionResolver]);
    console.log(printSchema(schema));

    fs.writeFile('graphql.gql', printSchema(schema), () => {
      console.log('schema generated!')
    });

  }

  generateSchema();