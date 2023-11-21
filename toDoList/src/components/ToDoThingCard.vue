<script setup lang="ts">
  import type {ToDoThing} from "@/data/ToDoThing";

  const props = defineProps<{
    toDoThing: ToDoThing;
  }>();
</script>

<template>
  <view>
    <h1>{{toDoThing.Title}}</h1>

  </view>
</template>

<style scoped>

</style>