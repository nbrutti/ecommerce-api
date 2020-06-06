import { ApiService } from "./api-service";

class SessionService extends ApiService {
  constructor() {
    super('/sessions');
  }

  validateSession(token) {
    return new Promise((resolve, reject) => {
      this.post('validate-token', token).then(response => {
        if (response.status === 200) resolve(true);
        reject(false);
      }).catch(() => reject(false));
    });
  }
}

export default SessionService;