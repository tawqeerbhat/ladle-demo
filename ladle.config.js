// ladle.config.js
import { defineConfig } from '@ladle/react';
import path from 'path';

console.log('Ladle loading from: ', path.resolve('src/stories'));

export default defineConfig({
  stories: ['src/stories/*.stories.jsx'],
});

