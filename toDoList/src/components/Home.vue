<template>
  <tui-tabs :tabs="tabs" :currentTab="currentTab" @change="tabChange"></tui-tabs>
  <view class="allIn">
    <view class="listCard">
      <ToDoThingList :things="toDoThings"></ToDoThingList>
    </view>

    <!-- list内容 -->
    <tui-bottom-popup :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="hiddenPopup">
      <AddToDoThing @add="addThing"></AddToDoThing>
    </tui-bottom-popup>
    <tui-fab @click="showPopup" bottom="180" bgColor="#5677fc"></tui-fab>

  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ToDoThing } from "@/data/ToDoThing";
import ToDoThingList from "@/components/ToDoThingList.vue";
import AddToDoThing from "@/components/AddToDoThing.vue";
import BottomNav from "@/components/BottomNav.vue"
import { random } from "nanoid";

const listInfo = reactive({
  name: "",
  content: ""
});
const addThing = (thing: ToDoThing) => {
  toDoThings.value.push(thing);
  hiddenPopup();
}
ref(0);


const current = ref(0);

const change = (e) => {
  current.value = e.index;
};
const popupShow = ref(false);
const showPopup = () => popupShow.value = true;
const hiddenPopup = () => popupShow.value = false;
const title = ref('Hello')
const toDoThings = ref(
  new Array(3).fill(true)
    .map((value, index, array) => new ToDoThing()
      .WithTitle('Hello There')
      .WithStartTime(new Date((new Date()).setDate(new Date().getDate() - Math.floor(Math.random() * 60))))
      .WithDescription(index.toString())
    ));
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
</script>

<style>
.listCard {
  height: 82vh;
  overflow: scroll;
}

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
