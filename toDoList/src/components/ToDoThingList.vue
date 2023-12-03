<template>
  <tui-list-view v-for="thing in things" :key="thing.GetHash()">
    <tui-list-cell :hover="false" :arrow="false">
      <ToDoThingCard :to-do-thing="thing" @remove="remove"/>
    </tui-list-cell>
  </tui-list-view>
</template>

<script setup lang="ts">
import type {ToDoThing} from "@/data/ToDoThing";

import ToDoThingCard from "@/components/ToDoThingCard.vue";

const props = defineProps<{
  things: ToDoThing[]
}>();

const emit = defineEmits<{
  (e: 'removed', thing: ToDoThing): void
}>();
const remove = (thing: ToDoThing) => {
  props.things.splice(props.things.indexOf(thing), 1);
  emit('removed', thing);
}
</script>

<style scoped>

</style>