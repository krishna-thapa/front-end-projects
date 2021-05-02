// https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
// This is not recommended because of the security risks
// Note: fs and path are not available in web browsers in node

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}