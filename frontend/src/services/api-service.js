import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:5000'
});

export class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getRequestUrl(url) {
    const _url = url || "";
    return `${this.apiUrl}/${_url}`;
  }

  post(url, obj) {
    return httpClient.post(this.getRequestUrl(url), obj);
  }
  
  put(url, obj) {
    return httpClient.put(this.getRequestUrl(url), obj);
  }
  
  get(url) {
    return httpClient.get(this.getRequestUrl(url));
  }

  delete(url) {
    return httpClient.delete(this.getRequestUrl(url));
  }
}