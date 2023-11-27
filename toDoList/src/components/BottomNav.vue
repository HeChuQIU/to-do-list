<!-- @format -->

<template>
    <view class="bottomNav">
        <view class="tabbar" :current="current">
            <view class="tabbarItem" id="homePage" @click="gotoHomePage">
                <view class="picHome">
                    <image :src="home"></image>
                </view>
                今日清单
            </view>
            <view class="tabbarItem" id="calendarPage" @click="gotoCalendar">
                <view class="picCalendar">
                    <image :src="calendar"></image>
                </view>
                <view>日历计划</view>
            </view>
            <view class="tabbarItem" id="pesonnalPage">
                <view class="picUs">
                    <image :src="us"></image>
                </view>
                关于我们
            </view>
        </view>
    </view>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
const home = ref("../static/changeHome.png");
const calendar = ref("../static/calendar.png");
const us = ref("../static/us.png");

const gotoHomePage = () => {
    uni.navigateTo({
        url: "index",
    });
};

const gotoCalendar = () => {
    calendar.value = "../static/changeCalendar.png";
    console.log(uni.value);
    uni.redirectTo({
        url: "calendar",
    });
};
</script>

<style>
.bottomNav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
}

.tabbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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

image {
    width: 30px;
    height: 30px;
}

.picHome {
    width: 30px;
    height: 30px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.picCalendar {
    width: 30px;
    height: 30px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.picUs {
    width: 30px;
    height: 30px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    text-align: center;
}
</style>
<!-- <template>
    <tui-tabbar :current="current" :type="1" backdropFilter backgroundColor="#f8f8f8" :tabBar="tabBar" color="#777"
        selectedColor="#AC9157" @click="tabbarSwitch"></tui-tabbar>
</template>
<script setup>
import { ref } from 'vue';
const current = ref(0);
const tabBar = ref([
    {
        pagePath: "../pages/index/index.vue",
        text: '首页',

    },
    {
        pagePath: "../pages/index/calendar.vue",
        text: '日历',

    },
    {
        pagePath: "../pages/index/calendar",
        text: '我们',

    }
]);
const tabbarSwitch = (e) => {
    console.log(e);
    current.value = e.index
    if (e.index === 0) {
        uni.navigateTo({
            url: 'index'
        }).then{

        }
    } else {
        uni.navigateTo({
            url: 'calendar'
        })
    }
}; -->

<!-- </script> -->
