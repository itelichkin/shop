import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(forwardRef(() => HttpClientService)) private httpClientService: HttpClientService) {
  }

  async getAllObjects(): Promise<any> {
    const result = await this.httpClientService.get('/objects');
    return result.body ? JSON.parse(result.body) : [];
  }

  async deleteObject(id: string, type: string): Promise<any> {
    let result;
    const options = {id};
    if (type === 'pizza') {
      result = await this.httpClientService.delete('/pizza', options);
    } else if (type === 'sweet') {
      result = await this.httpClientService.delete('/sweet', options);
    } else {
      result = await this.httpClientService.delete('/ice-cream', options)
    }
    return result.body ? JSON.parse(result.body) : [];
  }

  async getObject(id: string, type: string): Promise<any> {
    let result;
    const options = {id};
    if (type === 'pizza') {
      result = await this.httpClientService.get('/pizza', options);
    } else if (type === 'sweet') {
      result = await this.httpClientService.get('/sweet', options);
    } else {
      result = await this.httpClientService.get('/ice-cream', options)
    }
    return result.body ? JSON.parse(result.body) : null;
  }

  async editObject(data, type: string): Promise<any> {
    let result;
    if (type === 'pizza') {
      result = await this.httpClientService.post('/pizza', data);
    } else if (type === 'sweet') {
      result = await this.httpClientService.post('/sweet', data);
    } else {
      result = await this.httpClientService.post('/ice-cream', data)
    }
    return result.body ? JSON.parse(result.body) : null;
  }


  async createNewObject(data, type: string): Promise<any> {
    let result;
    if (type === 'pizza') {
      result = await this.httpClientService.post('/pizzas', data);
    } else if (type === 'sweet') {
      result = await this.httpClientService.post('/sweets', data);
    } else {
      result = await this.httpClientService.post('/ice-creams', data)
    }
    return result.body ? JSON.parse(result.body) : null;
  }

  async getPizzas(): Promise<any> {
   const result = await this.httpClientService.get('/pizzas');
    return result.body ? JSON.parse(result.body) : null;
  }

  async getSweets(): Promise<any> {
    const result = await this.httpClientService.get('/sweets');
    return result.body ? JSON.parse(result.body) : null;
  }


  async getIceCreams(): Promise<any> {
    const result = await this.httpClientService.get('/ice-creams');
    return result.body ? JSON.parse(result.body) : null;
  }

}
