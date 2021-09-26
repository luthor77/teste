import { inject, LifeCycleObserver, lifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'omdbapi',
  connector: 'rest',
  baseURL: 'http://www.omdbapi.com/',
  options: {
    headers: {
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://www.omdbapi.com/?apikey=7ddf1eef&t={title}',
      },
      functions: {
        getShowByTitle: ['title'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OmdbapiDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'omdbapi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.omdbapi', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
