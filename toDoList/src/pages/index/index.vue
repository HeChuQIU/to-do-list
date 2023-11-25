<template>
  <view class="allIn">
    <view class="listCard">

      <ToDoThingList :things="toDoThings"></ToDoThingList>
    </view>

    <!-- list内容 -->
    <tui-bottom-popup :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="hiddenPopup">
      <view class="listForm">
        <view>
          <tui-section title="标题" is-line background="#fff"></tui-section>
          <MyInput :value="listInfo.name" @onChange="setname"></MyInput>
        </view>
        <view>
          <tui-section title="内容" is-line background="#fff"></tui-section>
          <MyTextarea :value="listInfo.content" @onChange="setcontent"></MyTextarea>
        </view>
        <view>
          <tui-section title="重要程度" is-line background="#fff"></tui-section>
          <view style="padding-left: 10px;">
            <tui-rate :current="current" :size="30" :quantity="5" @change="change"></tui-rate>
          </view>
        </view>
        <tui-divider width="60%" gradual></tui-divider>
        <view class="ensureAdding">
          <tui-button width="90%" shape="circle" @click="addList">添加计划</tui-button>
        </view>

      </view>
    </tui-bottom-popup>
    <view class="addList">
      <tui-fab @click="showPopup" bgColor="#5677fc"></tui-fab>
    </view>

    <!-- 底部导航栏 -->
    <view class="bottomNav">
      <view class="tabbar">
        <view class="tabbarItem" id="homePage">
          <view class="picHome">
          </view>今日清单
        </view>
        <view class="tabbarItem" id="calendarPage" @click="gotoCalendar">
          <view class="picCalendar"></view>
          <view>日历计划</view>
        </view>
        <view class="tabbarItem" id="pesonnalPage">
          <view class="picUs"></view>关于我们
        </view>

      </view>
    </view>

  </view>

  <!-- toDoThings length : {{ toDoThings.length }} -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ToDoThing } from "@/data/ToDoThing";
import ToDoThingList from "@/components/ToDoThingList.vue";
import MyInput from "../../components/myInput/MyInput.vue";
import MyTextarea from "../../components/myTextarea/MyTextarea.vue"
import { withCtx } from 'vue';
const listInfo = reactive({
  name: "",
  content: ""
});

const setname = (value) => {
  listInfo.name = value;
};

const setcontent = (value) => {
  listInfo.content = value
}

const addList = () => {
  console.log(listInfo.content);
}

const gotoCalendar = () => {
  console.log("日历");
  uni.navigateTo({
    url: 'calendar',
  })
};


const current = ref(0);

const change = (e) => {
  current.value = e.index;
};
const popupShow = ref(false);
const showPopup = () => popupShow.value = true;
const hiddenPopup = () => popupShow.value = false;
const title = ref('Hello')
const toDoThings = ref(
  new Array(10).fill(true)
    .map((value, index, array) => new ToDoThing()
      .WithTitle('Hello There')
      .WithStartTime(new Date())
      .WithDescription(index.toString())
    ));
</script>

<style>
.listCard {
  height: 90vh;
  overflow: scroll;
}

.listForm {
  height: 60vh;
  overflow: scroll;
}

.addList {
  transform: translateY(40px);
  position: relative;
  z-index: 10;
}

.ensureAdding {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-right: 10%;
}

.bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  /* margin-top: 80px; */
}

.tabbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 78vh; */
  background-color: rgba(0, 0, 0, 0.021);
  border-top: solid 1px rgba(128, 128, 128, 0.747);
  height: 10vh;
}

.tabbarItem {
  text-align: center;
  font-family: "楷体";
  font-size: small;
  text-align: center;
}

.picHome {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAO9JREFUOE/NkzFuwkAQRd/nBvScACoa+khwBKi5gTeVy5iC2sAVIpGIkjpSeqSUyUXSRCk8kQ1r2SZrXDLtzn87/8+uaCnbMMcY6ZEk1KbQQSGGAyIhQyHIvwAvlqM4ty1PIcgVoCn2E4YgNUBI3AYpAbfEIcjZ4yUw77ltM81MfEhHYK+I11viApCSIPpyRFUL73I8dAJsMD/tfQFOckzKtHcMyHhB/ChiVrVmAQulr0pQQ8QbxlSORQnvDMgV4hOYdwJgrIpbelj+CzG+LoAY8ayIbfPN1J9yvt9K+R9oKUvEGDEkY80vH4r5zlv/AAMQfRGywm/WAAAAAElFTkSuQmCC");
}

.picCalendar {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAYZJREFUOE+tkz1oU2EUhp9zDSaQZlCRCiLFmx8XndROhaiDiblxCoLF2UFBxNysIo5Vb+qSRRxFJ3Wwt0Xs0KmFipPQqbmgSxddDAkByXck4QbyK1r9xnPO+3Dec84n/OOTUb3tl0uodeLQsR+1T+ee/ezmU6t3osZEb4nypX71ydtBzTBAEXut/Brksxh9Xy9WN3uAd5ULxjJZVE4HRe/aGCDpVzYUzfYSok8x1jqiK8OF5opi5YG7YfxD4HiXex3YvtsBrDCxjRCgXB+2py9B0sD5MN4JHC/SB+h+Zhk4noSA8oP9AaoP/1cH7qiFvWZE0vGOuY/KpVgzsdCON16hmFgrcaMdb3S3c3bAwihAW8AjwbqoaBL0OUgJUNA3IDeB45MAO8ARYBb4CJwCEsAWMA9EBmc1CjBB8+vBkzNzBVFdDhwvZfvuPRFy9YKXt323Btz+HaB7REtABiU3xcKZaYDvwOG/XOW3wPGO9u8gAyyCNfa5JkONWnLgxW7hcf0PBdN7+wVleJgRiQ5/BAAAAABJRU5ErkJggg==");
}

.picUs {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXZJREFUOE+1k78vBEEUx79v9tBIlArB7o6jIfEHiGg0CiEScudGSyEXColOFAqVUoREmNNoVGq/EomS6OzsXLiWXHQXt/vkCsLZEBFTTPc+7zPfN4/wx0N/rMf/AFxtMkRYAKNCwG6o5K6r74aKKn1ab/zFwNfmiMG9MSEvYtEM4kMGzxJEBuAhq+Snmi8ATxt2KG4JcunnWrfOvWBcCFq0Sg56++aREY0UZ7qv3kwSAR+7SP3QFaNyZlVXm1swtyQoa7P+zTeA4ITBq2/vdbVZAVAGiTJxPGGVHP2YQ+IUvIKxYBC4dtN5RM56iqtrDIQOxRtBLl1KNPD3zSIT5mLiZSHEpRNHDRHTGEBLkUj1C65OEWMzEil5P90Z1iDvBv6haeEKjq2SA/Wj8gumj4Fjm5Mdrg7GAKe1qLytTwBPmx0CTkIlD5J+p6eDeSC6tqrnopZLUcnVekDhpakxX5psf0oGhMMguDbnb/8Y4m/243924TcGr4sWlBGMyouQAAAAAElFTkSuQmCC");
}
</style>
