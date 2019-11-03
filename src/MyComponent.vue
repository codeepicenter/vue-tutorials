<template>
  <div>
    <h1>{{title}}</h1>

    <h2>Pending tasks</h2>
    <div class="tasks-container">
      <div v-for="task in pendingTasks" v-bind:key="task.id">{{task.name}}</div>
    </div>

    <h2>Finished tasks</h2>
    <div class="tasks-container">
      <div v-for="finishedTask in finishedTasks" v-bind:key="finishedTask.id">{{finishedTask.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      title: "ToDo Application",
      pendingTasks: [
        { id: 1, name: "Call dad", isFinished: false },
        { id: 2, name: "Buy tickets", isFinished: false }
      ],
      finishedTasks: [{ id: 3, name: "BDay party", isFinished: true }]
    };
  }
};
</script>


<style scoped>
</style>