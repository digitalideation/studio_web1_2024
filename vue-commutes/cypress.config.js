import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    experimentalStudio: true,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },
})
