## Typescript tutorial

- Youtube series: https://www.youtube.com/watch?v=iTZ1-85I77

### Install typescript:
- `npm install -g typescript`
- Convert the Typescript file to Javascript using command: `tsc sandbox.ts -w`: where `-w` watches any new changes in `sandbox.ts` file and then it will do the conversion and store the Javascript code in new file with same filename but with `.js` extension, as `sandbox.js`.

### Run the typescript conversion for all ts files
- Make the necessary changes in `tsconfig.json`
- Run the command: `tsc -w`