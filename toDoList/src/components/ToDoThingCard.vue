<script setup lang="ts">
import type {ToDoThing} from "@/data/ToDoThing";
import {ref} from "vue";

const props = defineProps<{
  toDoThing: ToDoThing
}>();

const emit = defineEmits<{
  (e: 'remove', thing: ToDoThing): void
}>();

const card = ref({
  img: {
    url: '',
    width: 80,
    height: 80,
    circle: true
  },
  title: {
    text: props.toDoThing.Title,
    color: '#000000',
    size: 34
  },
  tag: {
    text: new Date().getUTCMinutes() - props.toDoThing.StartTime.getMinutes() + ' 分钟前',
    color: '#646464',
    size: 28
  }
});

const actions = ref([{
  name: '删除',
  color: '#fff',
  fontsize: 30, //单位rpx
  width: 70, //单位px
  background: '#FD3B31'
},
  {
    name: '修改',
    color: '#fff',
    fontsize: 30,
    width: 70,
    background: '#5677fc'
  },
  {
    name: '收藏',
    width: 70,
    fontsize: 30,
    color: '#fff',
    background: '#C8C7CD'
  }]);

const handlerButton = (e) => {
  let index = e.index;
  let item = e.item;
  let menuTxt = ['删除', '修改', '收藏'][index];
  console.log('您点击了【' + menuTxt + '】按钮')

  if(index === 0) {
    emit('remove', props.toDoThing);
  }
}
</script>

<template>
  <tui-swipe-action :actions="actions" @click="handlerButton">
    <template v-slot:content>
      <tui-card :title="card.title" :tag="card.tag">
        <template v-slot:body>
          <view class="tui-default">
            {{ toDoThing.Description }}
          </view>
        </template>
        <template v-slot:footer>
          <view class="tui-default">
            {{ toDoThing.StartTime.toLocaleTimeString() }}
          </view>
        </template>
      </tui-card>
    </template>
  </tui-swipe-action>
</template>

<style scoped>

</style>