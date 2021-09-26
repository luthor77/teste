// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { repository } from '@loopback/repository';
import { get, param } from '@loopback/rest';
import { ShowsRepository } from '../repositories';
import { OmdapiService } from '../services/omdapi.service';

export class QueryController {
  constructor(
    @inject('services.OmdapiService')
    protected omdbapiService: OmdapiService,
    @repository(ShowsRepository) public repository: ShowsRepository
  ) {}

  @get('/query')
  async query(
    @param.query.string('title')
    title: string
  ): Promise<any> {
    const result = await this.omdbapiService.getShowByTitle(
      title.split(' ').join('+')
    );

    if (result.Response === 'False') return result;

    const isResultAlreadyInHistory = await this.repository.findOne({
      where: { imdbID: result.imdbID },
    });

    if (isResultAlreadyInHistory) return result;

    await this.repository.create(result);
    return result;
  }

  @get('/history')
  history(): Promise<any> {
    return this.repository.find();
  }
}
