import { Resolver, Query } from '@nestjs/graphql';
import {Ville} from './ville.entity' ;

@Resolver(of => Ville)
export class VilleResolver {
    @Query(returns => [Ville])
    async getVilles(){
        // return Ville.query('select * from ville')  ;
        return await Ville.createQueryBuilder().getMany();
    }
}
