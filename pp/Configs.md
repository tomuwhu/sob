#### Adatapter-static

bash

```bash
npm i -D @sveltejs/adapter-static
touch static/.nojekyll
echo "export const prerender = true;" >> ./src/routes/+layout.js
```

svelte.config.js

```js
import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev')
export default {
 kit: {
  adapter: adapter({ pages: 'docs' }),
  paths: { base: dev ? '' : process.env.BASE_PATH }
 }
}
```

.prettierrc

```json
"semi": false,
```

vite.config.ts

```js
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
export default defineConfig({
 plugins: [sveltekit()],
 build: {
  chunkSizeWarningLimit: 2000,
  rollupOptions: {
   output: {
    manualChunks(id) {
     if (id.includes('node_modules')) {
      return id.toString().split['node_modules/'](1).split['/'](0).toString()
     }
    }
   }
  }
 }
})
```

#### Prettiers

.eslint.cjs

```javascript
module.exports = {
  rules: {
    allowConciseArrowFunctionExpressionsStartingWithVoid: true
  },
  ...
}
```

markdownlint.json

```json
{
    "MD013": false,
    "MD033": false,
    "MD036": false,
    "MD049": false
}
```
