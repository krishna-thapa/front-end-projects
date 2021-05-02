## Mix of front-end projects

### vue3-electron
1. Technologies used:
  - Vue3.js
  - Electron
  - [Vue Electron CLI plugin](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
  - Bootstrap 5 
  - [electron/remote](https://github.com/electron/remote)
2. Improvements:
  - Instead of `remote`, use `ipcRenderer` and `ipcMain`. [See here](https://www.electronjs.org/docs/api/remote)