import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comic } from '../../entities/comic.entity';

@Injectable()
export class ComicService {

  constructor(
    @InjectRepository(Comic) private readonly comicRepository: Repository<Comic>
  ) { }

  async getAllComic() {
    return await this.comicRepository.find()
  }

  async getComicId(id) {
    return await this.comicRepository.findOne(id)
  }

  async createComic(body) {
    return await this.comicRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
