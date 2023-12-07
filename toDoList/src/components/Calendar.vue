<template>
  <view class="highCalendar">
  <tui-calendar ref="calendar" @change="change" :isChange="true" :type="1" :status="status" activeBgColor="#5677fc"
                :isActiveCurrent="true" :initStartDate="initStartDate"></tui-calendar>

    <to-do-thing-list :things="thingsToShow" @removed="removeThing"/>
  </view>

</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {ToDoThing} from "@/data/ToDoThing";
import ToDoThingList from "@/components/ToDoThingList.vue";
import {Util} from "@/Util";
import type {Ref} from "@vue/runtime-core";

const props = defineProps<{
  things: ToDoThing[]
}>();

const thingsToShow = ref(
    props.things.filter(_ => true)
);

const removeThing = (thing: ToDoThing) => {
  props.things.splice(props.things.indexOf(thing), 1);
  updateStatusTextAt(selectedDate.value.getDate() - 1);
}

const selectedDate = ref(new Date());

const initStartDate = computed(() => {
  var d = selectedDate.value;
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
});

const status: Ref<any[]> = ref(
    new Array(31).fill({})
        .map(_ => {
          return {
            text: "", //描述：2字以内
            value: "",//状态值
            bgColor: "",//背景色
            color: "",  //文字颜色
            check: false //是否显示对勾
          }
        })
);

const getThingsListFor = (date: Date) => {
  return props.things.filter(t => Util.inSameDay(t.StartTime, date));
}

const getThingsListByYearMonthDay = (year: number, month: number, day: number) => {
  return props.things.filter(t => t.StartTime.getFullYear() == year && t.StartTime.getMonth() == month && t.StartTime.getDate() == day);
}

const updateThingsToShow = () => {
  thingsToShow.value = getThingsListFor(selectedDate.value);
}

const clearThingsToShow = () => {
  thingsToShow.value = [];
}

const updateStatusTextAt = (index: number) => {
  status.value[index].text = getThingsListByYearMonthDay(selectedDate.value.getFullYear(), selectedDate.value.getMonth(), index + 1).length.toString();
}

const change = (e) => {
  if (selectedDate.value.getFullYear() != e.year || selectedDate.value.getMonth() != e.month - 1) {
    selectedDate.value.setFullYear(e.year);
    selectedDate.value.setMonth(e.month - 1);
    clearThingsToShow();
    status.value
        .map((v, index) => {
          updateStatusTextAt(index);
          v.bgColor = "";
          v.color = "";
          return v;
        });
    return;
  }
  selectedDate.value.setDate(e.day);
  updateThingsToShow();
  status.value
      .map((v, index) => {
        updateStatusTextAt(index);
        v.bgColor = "";
        v.color = "";
        return v;
      })
      .filter((v, index) => index == selectedDate.value.getDate() - 1)
      .forEach(v => {
        v.bgColor = "#5677fc";
        v.color = "#fff";
      });
};
</script>

<style>
.highCalendar {
  height: 88vh;
  overflow: scroll;
}
</style>