<script setup lang="ts">
import ToDoThingEditor from "@/components/ToDoThingEditor.vue";
import {ToDoThing} from "@/data/ToDoThing";
import {ref} from "vue";
import type {Ref} from "@vue/runtime-core";

const emit = defineEmits<{
  (e: 'add', thing: ToDoThing): void
}>();

const add = () => {
  emit('add', thing.value);
  thing.value = new ToDoThing();
}

const thing: Ref<ToDoThing> = ref(new ToDoThing());
</script>

<template>
  <view class="listForm">
    <ToDoThingEditor :thing="thing"></ToDoThingEditor>
    <tui-divider width="60%" gradual></tui-divider>
    <view class="ensureAdding">
      <tui-button width="90%" shape="circle" @click="add">添加计划</tui-button>
    </view>
  </view>
</template>

<style scoped>
.listForm {
  height: auto;
}

.ensureAdding {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>