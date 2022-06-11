export const pipe = <T> (...fns: ((p: T) => T)[]) =>
  (p: T) => fns.reduce((acc, curr) => curr(acc), p)

export const pipeAsync = (...fns: ((p: any) => Promise<any>)[]) =>
  async (p: any) => {
    let res = p
    for (const fn of fns) {
      const { err, data } = await wrapAsync(fn)(res)
      if (err) return { err, data }
      res = data
    }
    return res
  }

export const lazy = <F extends (...args: any[]) => any >(fn: F) => (...args: Parameters<F>) => fn(...args)

export const wrapAsync = <F extends (...args: any[]) => any >(fn: F) => async (...args: Parameters<F>) => {
  const res: Wrapped<ReturnType<F> extends PromiseLike<infer P> ? P : never> = {
    err: null,
    data: null
  }

  try {
    res.data = await fn(...args)
  } catch (e) {
    res.err = e
  }

  return res
}
