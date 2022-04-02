## Using `jsconfig.json/tsconfig.json`

Github supports setting `baseUrl` in `jsconfig.json` and `tsconfig.json`. To configure `baseUrl` to point to the `src` directory in your JavaScript project, create a `jsconfig.json` file in your project root:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

If you have a TypeScript project you can configure `baseUrl` the same way in your `tsconfig.json`.

Currently the only supported options for `baseUrl` are `node_modules` (the default) and `src`.
