import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  async create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return await this.pagamentoService.create(createPagamentoDto);
  }
}
