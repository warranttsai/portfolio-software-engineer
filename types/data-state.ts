// Generic loading/empty/error/ready wrapper used for data that could come
// from an async source (kept even though current content is static, so
// components like ProjectGrid can render every state).

export type DataState<T> =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error"; message: string }
  | { status: "ready"; data: T };
