export default eventHandler(() => {
  const { title } = useAppConfig()
  return {
    name: title,
    url: 'https://duolingo.com',
  }
})
