export type Method = 'get' | 'post' | 'patch' | 'delete' | 'update'

export interface ErrorResponse {
  statusCode: number
  message: string
  error: string
}
