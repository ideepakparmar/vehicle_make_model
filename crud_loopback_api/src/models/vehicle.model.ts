import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehicle extends Entity {
  @property({
    type: 'date',
    default: () => new Date(),
  })
  created_at?: Date;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      maximum: 9999,
      minimum: 10,
    },
  })
  year: number;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  make: string;

  constructor(data?: Partial<Vehicle>) {
    super(data);
  }
}

export interface VehicleRelations {
  // describe navigational properties here
}

export type VehicleWithRelations = Vehicle & VehicleRelations;
