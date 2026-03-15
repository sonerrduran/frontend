import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - handle errors
    this.client.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const originalRequest = error.config;

        // Handle 401 - token expired
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Try to refresh token
            const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.post(`${BASE_URL}/auth/refresh`, {
              refreshToken,
            });

            const { token } = response.data;
            localStorage.setItem('token', token);

            // Retry original request
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return this.client(originalRequest);
          } catch (refreshError) {
            // Refresh failed - logout
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(url: string, params?: any): Promise<T> {
    return this.client.get(url, { params });
  }

  async post<T = any>(url: string, data?: any): Promise<T> {
    return this.client.post(url, data);
  }

  async put<T = any>(url: string, data?: any): Promise<T> {
    return this.client.put(url, data);
  }

  async delete<T = any>(url: string): Promise<T> {
    return this.client.delete(url);
  }

  async patch<T = any>(url: string, data?: any): Promise<T> {
    return this.client.patch(url, data);
  }
}

export const apiClient = new APIClient();
