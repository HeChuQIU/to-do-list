<script setup lang="ts">
import ToDoThingList from "@/components/ToDoThingList.vue";
import {ToDoThing} from "@/data/ToDoThing";

const props = defineProps<{
  things: ToDoThing[],
}>()
</script>

<template>
  <ToDoThingList :things="props.things" />
</template>

<style scoped>

</style>
