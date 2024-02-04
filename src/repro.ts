function main() {
  // comment out to fix sourcemap
  import.meta.env.VITE_NOT_EXIST;
  console.log('hello'); // browser devtools should show "repro.ts:4"
}

main()
