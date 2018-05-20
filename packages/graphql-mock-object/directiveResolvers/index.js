export async function fake(next, src, args, context) {
  const value = await next()

  console.log({ src, args, value })

  return value
}
