type Nullish<T> = T | null

type Wrapped<T = any, E = any> = {
  data: Nullish<T>,
  err: Nullish<E>
}
