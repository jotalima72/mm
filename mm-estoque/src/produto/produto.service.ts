import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>
  ) { }


  async create(data: CreateProdutoDto) {
    const produto = this.produtoRepository.create(data);
    const produtoSaved = await this.produtoRepository.save(produto);

    if (!produtoSaved) {
      throw new InternalServerErrorException('Problema ao criar um produto');
    }

    return produtoSaved;
  }

  async findAll(nome?: string) {
    return nome ?
      await this.produtoRepository.find({ where: { Nome: Like(nome + '%') } })
      : await this.produtoRepository.find();
  }

  async findOne(id: string) {
    return await this.produtoRepository.findOne({ where: { id } })
  }

  async update(id: string, data: UpdateProdutoDto) {
    const produto = await this.findOne(id);

    await this.produtoRepository.update(produto, { ...data });
    const userUpdated = this.produtoRepository.create({ ...produto, ...data });

    return userUpdated;
  }
  async remove(id: string) {

    return (await this.produtoRepository.remove(await this.findOne(id))) ? true : false;
  }
}
