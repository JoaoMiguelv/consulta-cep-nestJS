import { Injectable, Param } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getCep(cep: object): Promise<object> {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  }

}
