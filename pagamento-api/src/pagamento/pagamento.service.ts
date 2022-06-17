import { Injectable } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';

@Injectable()
export class PagamentoService {
  async create(createPagamentoDto: CreatePagamentoDto) {
    await this.sleep(5000).then(() => {
      console.log("pagamento efetuado")
    });
    return {
      ...createPagamentoDto,
      data: new Date(),
      status: "confirmed"
    };
  }

  private sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
