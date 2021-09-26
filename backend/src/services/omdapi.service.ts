import { inject, Provider } from '@loopback/core';
import { getService } from '@loopback/service-proxy';
import { OmdbapiDataSource } from '../datasources';
import { Shows } from '../models';

export interface OmdapiService {
  getShowByTitle(title: string): Promise<Shows>;
}

export class OmdapiServiceProvider implements Provider<OmdapiService> {
  constructor(
    @inject('datasources.omdbapi')
    protected dataSource: OmdbapiDataSource = new OmdbapiDataSource()
  ) {}

  value(): Promise<OmdapiService> {
    return getService(this.dataSource);
  }
}
