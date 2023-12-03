<template>
  <tui-tabs :tabs="tabs" :currentTab="currentTab" @change="tabChange"></tui-tabs>
  <view class="allIn">
    <view class="listCard">
      <ToDoThingList :things="showCorrespondList"
                     @removed="thing=>things.splice(things.findIndex(t=>t==thing),1)"></ToDoThingList>
    </view>

    <tui-bottom-popup :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="hiddenPopup">
      <AddToDoThing @add="addThing"></AddToDoThing>
    </tui-bottom-popup>
    <tui-fab @click="showPopup" :bottom="180" bgColor="#5677fc"></tui-fab>

  </view>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import {ToDoThing} from "@/data/ToDoThing";
import ToDoThingList from "@/components/ToDoThingList.vue";
import AddToDoThing from "@/components/AddToDoThing.vue";
import {Util} from "@/Util";

const props = defineProps<{
  things: ToDoThing[]
}>();

const addThing = (thing: ToDoThing) => {
  props.things.push(thing);
  hiddenPopup();
}

const current = ref(0);

const change = (e) => {
  current.value = e.index;
};
const popupShow = ref(false);
const showPopup = () => popupShow.value = true;
const hiddenPopup = () => popupShow.value = false;
const title = ref('Hello')

const tabs = ref([{
  name: "日"
}, {
  name: "周"
}, {
  name: "月"
}]);
const currentTab = ref(0);
const tabChange = (e) => {
  currentTab.value = e.index;
}

const showCorrespondList = computed(() => {
  switch (currentTab.value) {
    case 0:
      return props.things.filter(t => Util.inToday(t.StartTime));
    case 1:
      return props.things.filter(t => Util.inThisWeek(t.StartTime));
    case 2:
      return props.things.filter(t => Util.inThisMonth(t.StartTime));
  }
})
</script>

<style>
.listCard {
  height: 82vh;
  overflow: scroll;
}
</style>
