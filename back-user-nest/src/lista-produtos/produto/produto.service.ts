import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from '../dto/create-produto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async create(produto: CreateProdutoDto) {
        let link = 'http://localhost:3005/produto/';
        let request = await this.httpService.axiosRef.post(link, produto);
        const produtoSaved = request.data;
        return produtoSaved;
    }

    async findAll(nome?: string) {
        let link = 'http://localhost:3005/produto/';
        if (nome) {
            link = link+'?nome='+nome;
        }
        let request = await this.httpService.axiosRef.get(link);
        const produtos = request.data;

        return produtos;
    }
}
