export default () => {
  services.routeInternal('query', libQuery.run({ Account }))
}
