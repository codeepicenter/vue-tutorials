<template>
  <div id="application">
    <h1>{{title}}</h1>
    <div class="new-task">
      New task:
      <input type="text" v-model="newTaskName" />
      <button>Add task</button>
    </div>
    <h2>Pending tasks</h2>
    <div class="tasks-container">
      <div v-for="task in pendingTasks" v-bind:key="task.id">
        <input type="checkbox" />
        {{task.name}}
      </div>
    </div>

    <h2>Finished tasks</h2>
    <div class="tasks-container finished">
      <div v-for="finishedTask in finishedTasks" v-bind:key="finishedTask.id">
        <input type="checkbox" v-model="finishedTask.isFinished" />
        {{finishedTask.name}}
      </div>
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
      finishedTasks: [{ id: 3, name: "BDay party", isFinished: true }],
      newTaskName: ""
    };
  }
};
</script>


<style scoped>
#application {
  width: 500px;
  margin: 0px auto;
  border: 1px solid;
  border-color: #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  font-family: "McLaren", cursive;
}
h1 {
  text-align: center;
  color: #6d6d6d;
}
.finished div {
  color: gray;
  text-decoration: line-through;
}

.new-task input {
  padding: 10px;
  border: 2px solid #cac7c7;
  border-radius: 10px;
}
.new-task button {
  color: white;
  padding: 10px;
  border-radius: 10px;
  background-color: #4caf50;
  border: 0px;
  margin-left: 10px;
}
</style>