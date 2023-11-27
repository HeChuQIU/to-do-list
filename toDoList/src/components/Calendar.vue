<template>
    日历
    <tui-calendar ref="calendar" @change="change" type="1" :status="status" color="#5677fc"></tui-calendar>
    <view class="listing">
        <ToDoThingList :things="toDoThings"></ToDoThingList>
    </view>
</template>

<script setup>
import { ref } from "vue";
const status = ref(
    [{
        text: "aa", //描述：2字以内
        value: "",//状态值 
        bgColor: "",//背景色
        color: "",  //文字颜色
        check: false //是否显示对勾 
    }]
)

const change = (e) => {
    console.log(e);
    console.log(e.result);
};
</script>
<style>
.listing {
    width: 200px;
    height: 100px;
    background-color: blue;
}
</style>