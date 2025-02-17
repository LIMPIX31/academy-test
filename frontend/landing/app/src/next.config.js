const withPlugins = require('next-compose-plugins')
const { withImportantThing } = require('./with-important-thing')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
    outputStandalone: true,
  },
}

module.exports = withPlugins([
  withImportantThing('This is very important function!'),
], nextConfig)
