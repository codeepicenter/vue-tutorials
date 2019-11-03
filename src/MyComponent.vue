<template>
  <div>
    <h1>{{title}}</h1>

    <div>{{task1}}</div>
    <div>{{task2}}</div>

    <p>Towns I've visited</p>
    <div v-for="city in cities" v-bind:key="city">{{city}}</div>
  </div>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      title: "ToDo Application",
      task1: "Call dad",
      task2: "Buy tickets",
      cities: ["New York", "Paris", "Berlin"]
    };
  }
};
</script>


<style scoped>
</style>