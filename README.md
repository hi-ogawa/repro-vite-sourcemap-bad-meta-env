investigating https://github.com/vitejs/vite/issues/15771

```sh
pnpm i
pnpm build
pnpm preview

# devtool log shows
# > hello index-Bay8b1k_.js:43

# after commenting `import.meta.env.VITE_NOT_EXIST` in src/repro.ts
# it shows
# > hello repro.ts:4
```
