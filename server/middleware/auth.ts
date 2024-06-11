export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization')?.replace('Bearer ', '')
  const { token: runtimeToken } = useRuntimeConfig(event)
  if (event.path.startsWith('/api/') && !event.path.startsWith('/api/_') && token !== runtimeToken) {
    throw createError({
      status: 401,
      statusText: 'Unauthorized',
    })
  }
  if (token && token.length < 8) {
    throw createError({
      status: 401,
      statusText: 'Token is too short',
    })
  }
})
