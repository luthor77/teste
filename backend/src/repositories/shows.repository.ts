import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Shows, ShowsRelations } from '../models';

export class ShowsRepository extends DefaultCrudRepository<
  Shows,
  typeof Shows.prototype.Title,
  ShowsRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Shows, dataSource);
  }
}
