import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: 'postgres://gsoscyjw:8C4pUtlJy0Qd58PwlUsjSrM48gtwZX3p@motty.db.elephantsql.com/gsoscyjw',
  host: 'pellefant.db.elephantsql.com',
  port: 5432,
  user: 'gsoscyjw',
  password: '8C4pUtlJy0Qd58PwlUsjSrM48gtwZX3p',
  database: 'gsoscyjw',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
