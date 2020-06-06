import { ApiService } from "./api-service";

class PedidoService extends ApiService {
  constructor() {
    super('/pedidos');
  }
}

export default PedidoService;