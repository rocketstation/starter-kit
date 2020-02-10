const MODE = {
  development: 'development',
  production: 'production',
}

module.exports = (app, mode) => {
  const config = {
    module: { rules: [] },
    output: {},
    plugins: [],
  }

  switch (mode) {
    case MODE.development: {
      break
    }
    case MODE.production: {
      break
    }
  }

  return config
}
