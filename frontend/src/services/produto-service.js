import { ApiService } from "./api-service";

class ProdutoService extends ApiService {
  constructor() {
    super('/produtos');
  }
}

export default ProdutoService;