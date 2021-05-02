## Mix of front-end projects

### vue3-electron

This is the simple project based on [Youtube tutorial](https://www.youtube.com/watch?v=LnRCX074VfA) on building desktop app using Vue and Electron. It will build a simple file explorer in any OS platform that allows the user to view the file with sizes and navigate inside the directories and also allows the user for a simple file search operations.

1. Technologies used:
  - [Vue3.js](https://vuejs.org/)
  - [Electron](https://www.electronjs.org/)
  - [Vue Electron CLI plugin](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
  - [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
  - [electron/remote](https://github.com/electron/remote)

2. Compile and run
    ```
    npm run electron:serve
    npm run electron:build
    ```

3. Improvements:
  - Instead of `remote`, use `ipcRenderer` and `ipcMain`. [See here](https://www.electronjs.org/docs/api/remote)
