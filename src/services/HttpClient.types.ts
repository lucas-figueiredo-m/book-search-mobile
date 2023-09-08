import type {AxiosRequestConfig} from 'axios';

export interface ReqParams<P> extends AxiosRequestConfig {
  params?: P;
}
export type DefaultParams = Record<string, never>;
