export default {
  "src/*.ts,tsx": [
    () => "tsc --noEmit",
    "eslint --cache --fix",
    "prettier --write",
  ]
}