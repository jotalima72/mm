import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtosService: ProdutoService) { }

    @Post()
    create(@Body() produto: CreateProdutoDto) {
      return this.produtosService.create(produto);
    }

    @Get()
    findAll(@Query('nome') nome: string) {
        return this.produtosService.findAll(nome);
    }
}
