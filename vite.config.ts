// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />

import { UserConfigExport, defineConfig } from 'vitest/config'
import path from 'path'

const config: UserConfigExport = {
  test: {
    globals: true,
    setupFiles: path.join(__dirname, 'src', 'setupTests.ts'),
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov', 'html']
    }
  }
}

export default defineConfig(config)
