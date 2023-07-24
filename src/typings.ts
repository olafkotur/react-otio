export type RequestBody = string | string[] | number | boolean;
export type RequestParams = string | string[] | number | undefined;

export interface Response {
  code: number;
  status: string;
  date: string;
  unix: number;
  message?: string;
  data?: unknown;
}
