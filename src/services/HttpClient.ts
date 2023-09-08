import axios, {AxiosInstance} from 'axios';
import {DefaultParams, ReqParams} from './HttpClient.types';

export class HttpClient {
  public api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = this.createRestService(baseURL);
  }

  private createRestService(baseURL: string) {
    const httpClient = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    // Add Request Interceptor
    // Add Response Interceptor
    // Add logging (AxiosLogger)

    return httpClient;
  }

  public async get<ResponseType, RequestParams = DefaultParams>(
    url: string,
    conf?: ReqParams<RequestParams>,
  ): Promise<ResponseType> {
    const {data} = await this.api.get<ResponseType>(url, conf);
    return data;
  }
}
