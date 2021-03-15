import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mean_loopback',
  connector: 'mongodb',
  url: 'mongodb://127.0.0.1/mean_loopback',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'mean_loopback',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MeanLoopbackDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mean_loopback';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mean_loopback', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
