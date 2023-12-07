<script setup lang="ts">
import type { ToDoThing } from "@/data/ToDoThing";
import { ref } from "vue";

const props = defineProps<{
  toDoThing: ToDoThing
}>();

const emit = defineEmits<{
  (e: 'remove', thing: ToDoThing): void
}>();
console.log(props.toDoThing.Importance);

const card = ref({
  img: {
    url: '',
    width: 50,
    height: 50,
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

// switch (props.toDoThing.Importance) {
//   case 0:
//     card.value.img.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAE5JREFUKFNjZGBgYJD6pZnFwPA/jYGBUR/EZ2D4f5GBgXHWM7br0xghkgxTIRIYIJtR6pfGBYROdAX/L4JM+I9DN1iYGAWErcDvSELeBACw2iHnuzsQcQAAAABJRU5ErkJggg=="
//   case 1:
//     card.value.img.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAE9JREFUKFNjZGBgYPj8UjOLkZExjYGBQR/EZ2BguPj///9ZvOLXpzFCJadCJVCo////ZzN+eaV1AUknurqLIAX/semGiRGlAL8VBB1JyJsAQFMspVUNKtkAAAAASUVORK5CYII="
//   // case 3:
//   //   card.value.img.url = ""
// }
let showInportanceIndex = props.toDoThing.Importance
if (showInportanceIndex === 0 || showInportanceIndex === 1) {
  card.value.img.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAE5JREFUKFNjZGBgYJD6pZnFwPA/jYGBUR/EZ2D4f5GBgXHWM7br0xghkgxTIRIYIJtR6pfGBYROdAX/L4JM+I9DN1iYGAWErcDvSELeBACw2iHnuzsQcQAAAABJRU5ErkJggg==";
} else if (showInportanceIndex === 2 || showInportanceIndex === 3) {
  card.value.img.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAE9JREFUKFNjZGBgYPj8UjOLkZExjYGBQR/EZ2BguPj///9ZvOLXpzFCJadCJVCo////ZzN+eaV1AUknurqLIAX/semGiRGlAL8VBB1JyJsAQFMspVUNKtkAAAAASUVORK5CYII=";
} else if (showInportanceIndex === 4 || showInportanceIndex === 5) {
  card.value.img.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAFVJREFUKFNjZGBgYLgmy5rFxMCYxsDIoA/iM/xnuPiP4f8srce/pzGCJRkZp4Il0MC///+zGW/Isl2A60RX8Z/hIuMNObb/2HTDxIhQQMgKgo4k5E0AaNYoWUnXboMAAAAASUVORK5CYII="
};
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
  if (index === 0) {
    emit('remove', props.toDoThing);
  }
}




</script>

<template>
  <tui-swipe-action :actions="actions" @click="handlerButton">
    <template v-slot:content>
      <tui-card :title="card.title" :tag="card.tag" :image="card.img">
        <template v-slot:body>
          <view class="tui-default">
            {{ toDoThing.Description }}
          </view>
        </template>
        <template v-slot:footer>
          <view class="tui-default">
            {{ toDoThing.StartTime.toLocaleString() }}
          </view>
        </template>
      </tui-card>
    </template>
  </tui-swipe-action>
</template>
