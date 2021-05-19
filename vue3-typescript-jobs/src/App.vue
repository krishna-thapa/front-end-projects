<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Lugi')">Change name</button>
    <button @click="changeAge('Thirty')">Change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // Using reactive approach
    // const state = reactive({
    //   name: "Mario" as string,
    //   age: 25 as number | string,
    // })

    // return { ...toRefs(state)}

    // Using Ref
    const name = ref("Mario");
    const age = ref<number | string>(25);

    return { name, age };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: string | number) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style>
</style>
