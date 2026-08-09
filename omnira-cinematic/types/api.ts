/**
 * Shared envelope shapes. Every `lib/api` function returns data wrapped like
 * a real backend would send it, so swapping mocks for `fetch` later only
 * touches the service file — never the shape callers depend on.
 */

export interface ApiErrorShape {
  code: ApiErrorCode;
  message: string;
}

export type ApiErrorCode = "server_error" | "network_error" | "rate_limited";

export class ApiError extends Error {
  code: ApiErrorCode;

  constructor(shape: ApiErrorShape) {
    super(shape.message);
    this.name = "ApiError";
    this.code = shape.code;
  }
}

/** ISO-8601 string, as it would cross the wire. */
export type Timestamp = string;
