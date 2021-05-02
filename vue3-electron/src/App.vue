<template>
  <div class="container mt-2">
    <h4>{{ path }}</h4>

    <div class="form-group mt-4 mb-2">
      <input
        v-model="searchString"
        class="form-control form-control-sm"
        placeholder="File search"
      />
    </div>

    <FilesViewer
      :files="filteredFiles"
      :nested="nested"
      @back="back"
      @folderclick="open($event.name)"
    />
  </div>
</template>

<script>
import fs from "fs";
import pathModule from "path";

import { app } from "@electron/remote";
import { computed, ref } from "vue";

import FilesViewer from "./components/FilesViewer";

// Convert the byte number to human readable format
const formatSize = (size) => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

export default {
  name: "App",
  components: { FilesViewer },
  setup() {
    // Contains the current path where user is, default to electron app
    // Make an IPC call to backend process using electron remote
    const path = ref(app.getAppPath());

    const files = computed(() => {
      // Reads the files in the directory, returns an array of files names
      // for all the files and directories in the given path
      const fileNames = fs.readdirSync(path.value);
      return (
        fileNames
          .map((file) => {
            // Iterate over each filename to check if it is file or directory
            // and get the file size in human readable format
            const stats = fs.statSync(pathModule.join(path.value, file));
            return {
              name: file,
              size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
              directory: stats.isDirectory(),
            };
          })
          // Sort the result to show the directories in first and then files
          // and also sort the names in alphabetical order
          .sort((a, b) => {
            if (a.directory === b.directory) {
              return a.name.localeCompare(b.name);
            }
            return a.directory ? -1 : 1;
          })
      );
    });

    // Navigate outside of the current directory
    const back = () => {
      path.value = pathModule.dirname(path.value);
    };

    // Append the folder name in the path
    const open = (folder) => {
      path.value = pathModule.join(path.value, folder);
    };

    // Search operation on the files that starts with the input string
    // Return all the array of files if no search result
    const searchString = ref("");
    const filteredFiles = computed(() => {
      return searchString.value
        ? files.value.filter((s) => s.name.startsWith(searchString.value))
        : files.value;
    });

    return {
      path,

      open,
      back,

      files,
      searchString,
      filteredFiles,
    };
  },
};
</script>

<style>
</style>
