import { Produto } from './entities/produto.entity';
import { User } from 'src/user/entities/user.entity';
import { CarrinhoService } from './../carrinho/carrinho.service';
import { ListaProduto } from './entities/lista-produto.entity';
import { Carrinho } from 'src/carrinho/entities/carrinho.entity';
import { Module } from '@nestjs/common';
import { ListaProdutosService } from './lista-produtos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [HttpModule,TypeOrmModule.forFeature([Carrinho, ListaProduto, User, Produto]), HttpModule],
  controllers: [ProdutoController],
  providers: [ListaProdutosService, ProdutoService]
})
export class ListaProdutosModule {}
