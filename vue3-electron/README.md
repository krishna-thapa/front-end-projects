# vue3-electron

1. Technologies used:
  - [Vue3.js](https://vuejs.org/)
  - [Electron](https://www.electronjs.org/)
  - [Vue Electron CLI plugin](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
  - [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
  - [electron/remote](https://github.com/electron/remote)

2. Compile and run
    ```
    npm run electron:serve
    npm run electron:build //Read point 3 before
    ```

3. Multi Platform Build
  - "Don’t expect that you can build app for all platforms on one platform." Under the hood Vue-electron uses the electron builder to build the app for multi-platform OS. Electron builder is a complete solution to package and build a ready for distribution Electron app for macOS, Windows and Linux with “auto update” support out of the box.[Read here](https://www.electron.build/multi-platform-build)

4. Improvements:
  - Instead of `remote`, use `ipcRenderer` and `ipcMain`. [See here](https://www.electronjs.org/docs/api/remote)
  
## Project setup
```
npm install
```

### Compile and hot-reloads for electron development
```
npm run electron:serve
```

### Compiles and minifies for electron production
```
npm run electron:build
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
