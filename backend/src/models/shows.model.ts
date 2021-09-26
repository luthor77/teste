import { Entity, model, property } from '@loopback/repository';

@model()
export class Shows extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  Title: string;

  @property({
    type: 'string',
  })
  Year: string;

  @property({
    type: 'string',
  })
  Rated: string;

  @property({
    type: 'string',
  })
  Released: string;

  @property({
    type: 'string',
  })
  Runtime: string;

  @property({
    type: 'string',
  })
  Genre: string;

  @property({
    type: 'string',
  })
  Director: string;

  @property({
    type: 'string',
  })
  Writer: string;

  @property({
    type: 'string',
  })
  Actors: string;

  @property({
    type: 'string',
  })
  Plot: string;

  @property({
    type: 'string',
  })
  Language: string;

  @property({
    type: 'string',
  })
  Country: string;

  @property({
    type: 'string',
  })
  Awards: string;

  @property({
    type: 'string',
  })
  Poster?: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Ratings: { Source: string; Value: string }[];

  @property({
    type: 'string',
  })
  Metascore: string;

  @property({
    type: 'string',
  })
  imdbRating: string;

  @property({
    type: 'string',
  })
  imdbVotes: string;

  @property({
    type: 'string',
  })
  imdbID: string;

  @property({
    type: 'string',
  })
  Type: string;

  @property({
    type: 'string',
  })
  totalSeasons: string;

  @property({
    type: 'string',
  })
  DVD: string;

  @property({
    type: 'string',
  })
  BoxOffice: string;

  @property({
    type: 'string',
  })
  Production: string;

  @property({
    type: 'string',
  })
  Website: string;

  @property({
    type: 'string',
  })
  Response: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Shows>) {
    super(data);
  }
}

export interface ShowsRelations {
  // describe navigational properties here
}

export type ShowsWithRelations = Shows & ShowsRelations;
