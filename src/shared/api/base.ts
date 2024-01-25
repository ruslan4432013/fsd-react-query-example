import { API_URL } from "@/shared/config";
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, CreateAxiosDefaults } from "axios";

export class ApiClient {
  private axios: AxiosInstance;

  constructor(url: string, config: CreateAxiosDefaults = {}) {
    const baseURL = url
    this.axios = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
  }

  public async get<TResponse>(endpoint: string, options: AxiosRequestConfig = {}): Promise<TResponse> {
    const response: AxiosResponse<TResponse> = await this.axios.get(
      endpoint,
      options
    );
    return response.data;
  }

  public async post<TResponse, TData = unknown>(
    endpoint: string,
    data: TData,
    options: AxiosRequestConfig = {}
  ): Promise<TResponse> {
    const response: AxiosResponse<TResponse> = await this.axios.post(
      endpoint,
      data,
      options
    );
    return response.data;
  }

  public async put<TResponse, TData = unknown>(
    endpoint: string,
    data: TData,
    options: AxiosRequestConfig = {}
  ): Promise<TResponse> {
    const response: AxiosResponse<TResponse> = await this.axios.put(
      endpoint,
      data,
      options
    );
    return response.data;
  }

  public async delete<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.delete(
      endpoint,
      options
    );
    return response.data;
  }
}

export const apiClient = new ApiClient(API_URL);
