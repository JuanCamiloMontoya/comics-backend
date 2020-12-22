import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ComicService } from './comic.service';

@Controller('comic')
export class ComicController {

  constructor(private readonly comicService: ComicService) { }

  @Get('/all')
  async getAllComic() {
    return await this.comicService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.comicService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.comicService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.comicService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.comicService.deleteComic(id)
  }
}
