import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MeanLoopbackDataSource} from '../datasources';
import {Vehicle, VehicleRelations} from '../models';

export class VehicleRepository extends DefaultCrudRepository<
  Vehicle,
  typeof Vehicle.prototype.id,
  VehicleRelations
> {
  constructor(
    @inject('datasources.mean_loopback') dataSource: MeanLoopbackDataSource,
  ) {
    super(Vehicle, dataSource);
    // (this.modelClass as any).observe('persist', async (ctx: any) => {
    //   ctx.data.modified = new Date();
    // });
  }

  public findByMake(make: string) {
    return this.findOne({where: {make}});
  }

  public findByModel(model: string) {
    return this.findOne({where: {model}});
  }
}
