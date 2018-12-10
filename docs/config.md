---
layout: docs
title: Configuration
---

### `bedrock.config.js`

This is the main config file. 

```js
/** @type {BedrockConfig} */
const config = {
  patterns: [ './assets/patterns/*' ],
  docsDir: './docs',
  designTokens: './design-tokens/tokens.yml',
  dist: './dist',
  public: './public',
  data: './data',
  css: [ './public/assets/simple.css' ],
  js: ['./public/assets/script.js'],
};

module.exports = config;
```
