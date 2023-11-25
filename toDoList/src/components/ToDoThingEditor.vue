<script setup lang="ts">
import type {ToDoThing} from "@/data/ToDoThing";
import MyTextarea from "@/components/myTextarea/MyTextarea.vue";
import MyInput from "@/components/myInput/MyInput.vue";

const props = defineProps<{
  thing: ToDoThing
}>();

</script>

<template>
  <view>
    <tui-section title="标题" is-line background="#fff"></tui-section>
    <MyInput v-model:value="thing.Title"></MyInput>
  </view>
  <view>
    <tui-section title="内容" is-line background="#fff"></tui-section>
    <MyTextarea v-model:value="thing.Description"></MyTextarea>
  </view>
  <view>
    <tui-section title="重要程度" is-line background="#fff"></tui-section>
    <view style="padding-left: 10px;">
      <tui-rate :current="thing.Importance" @change="e=>thing.Importance=e.index" :size="30" :quantity="5"></tui-rate>
    </view>
  </view>
</template>

<style scoped>
</style>