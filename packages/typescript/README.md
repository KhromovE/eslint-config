# ESLint TypeScript Config

## JavaScript

1. Install the correct versions of each package, which are listed by the command:

```bash
npm info "@khromove/eslint-config-typescript" peerDependencies
```

2. Install all dependecies:

```bash
npx install-peerdeps --dev @khromove/eslint-config-typescript
```

3. Add next line to your `.eslintrc`:

```json
{
  "extends": "@khromove/eslint-config-typescript"
}
```