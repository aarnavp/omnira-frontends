export type Timestamp = string;

export interface ApiErrorShape {
  code: string;
  message: string;
  fieldErrors?: Record<string, string>;
}

/** Thrown by every `lib/api` service on simulated failure. Mirrors the
 * shape a real backend error response would carry, so component-level
 * error handling doesn't change when a real endpoint replaces the mock. */
export class ApiError extends Error implements ApiErrorShape {
  code: string;
  fieldErrors?: Record<string, string>;

  constructor(shape: ApiErrorShape) {
    super(shape.message);
    this.name = "ApiError";
    this.code = shape.code;
    this.fieldErrors = shape.fieldErrors;
  }
}

export interface Paginated<T> {
  items: T[];
  nextCursor: string | null;
  total: number;
}
