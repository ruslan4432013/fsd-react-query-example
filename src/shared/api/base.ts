import { API_URL } from "@/shared/config";

export class ApiClient {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url
  }

  async handleResponse<TResult>(response: Response): Promise<TResult> {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error('Error parsing JSON response');
    }
  }

  public async get<TResult = unknown>(endpoint: string, queryParams?: Record<string, string | number>): Promise<TResult> {
    const url = new URL(endpoint, this.baseUrl);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse<TResult>(response);
  }

  public async post<TResult = unknown, TData = Record<string, unknown>>(endpoint: string, body: TData): Promise<TResult> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return this.handleResponse<TResult>(response);
  }
}

export const apiClient = new ApiClient(API_URL);
