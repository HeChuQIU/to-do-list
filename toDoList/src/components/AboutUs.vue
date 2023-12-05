<template>
  <view class="containar">
    <view class="avatarUrl">
      <button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar" class="wxLoginInfo">
        <view class="wximg">
          <image :src="avatarUrl"></image>
        </view>
      </button>
      <view class="nickname">
        <text>基础信息</text>
        <tui-divider></tui-divider>
        <view style="display: flex;">
          <view style="margin-left: 20px;">昵称</view>
          <view style="margin: auto;">
            <input type="nickname" class="weui-input" maxlength="10" :value="nickName" @blur="bindblur"
                   placeholder="请输入昵称" @input="bindinput"/>
          </view>
        </view>
        <tui-divider></tui-divider>
        <view style="display: flex;">
          <view style="margin-left: 20px;">座右铭</view>
          <view style="margin: auto;">
            <input type="text" class="weui-input" maxlength="15" placeholder="写下一句鼓励自己的话吧"/>
          </view>
        </view>
      </view>
      <tui-button type="primary" @click="uploadThings">上传</tui-button>
      <tui-button type="primary" @click="downloadThings">下载</tui-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import {ToDoThing} from "@/data/ToDoThing";

const props = defineProps<{
  things: ToDoThing[]
}>();

const emit = defineEmits<{
  // (e: 'update:things', things: ToDoThing[]): void
}>();

const uploadThings = () => {
  wx.cloud
      .callFunction({
        // 云函数名称
        name: 'upload-things',
        // 传给云函数的参数
        data: {
          things: JSON.stringify(props.things),
        },
      })
      .then(res => {
        console.log(res.result)
      })
      .catch(console.error)
};

const downloadThings = () => {
  wx.cloud
      .callFunction({
        // 云函数名称
        name: 'download-things',
        // 传给云函数的参数
        data: {},
      })
      .then(res => {
        console.log(res.result)
        const things = JSON.parse(res.result.data.things);
        for (let i = 0; i < things.length; i++) {
          const thing = things[i];
          things[i] = new ToDoThing()
              .WithTitle(thing.Title)
              .WithDescription(thing.Description)
              .WithStartTime(new Date(thing.StartTime))
              .WithEndTime(new Date(thing.EndTime))
              .WithId(thing.Id)
              .WithIsDone(thing.IsDone)
              .WithImportance(thing.Importance);
          console.log(thing);
        }
        console.log(things)
        if (things && things.length > 0)
          props.things.length = 0;
        props.things.push(...(things));
      })
      .catch(console.error)
};

onMounted(() => {
  wx.checkSession({
    success() {
      console.log("gugu还没过期");
    },
    //TODO: 不能在用户不知情的情况下调用直接登录！
    fail() {
      wx.login({
        success(res) {
          if (res.code) {
            wx.request({
              url: "",
              data: {
                js_code: res.code,
              },
              method: "POST",
              header: {
                "content-type": "application/json", // 默认值
              },
              success(res) {
                console.log(res);
                let loginToken = res.data.accessToken;
              },
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        },
      });
    }
  })
});
const avatarUrl = ref('');
const nickName = ref('');
const onLoad = (option) => {

};

const bindBlur = (e) => {
  //获取微信昵称
  nickName.value = e.detail.value;
  console.log(e.detail.value);
};

const bindInput = (e) => {
  nickName.value = e.detail.value;
};

const onChooseAvatar = (e) => {
  const {avatarUrl: chosenAvatarUrl} = e.detail;
  uni.showLoading({
    title: '加载中',
  });
  uni.uploadFile({
    url: '后台uploadFile接口',
    filePath: chosenAvatarUrl,
    name: 'file',
    header: {
      token: '自己的token',
    },
    success: (uploadFileRes) => {
      let data = JSON.parse(uploadFileRes.data);
      if (data.code === 0) {
        avatarUrl.value = data.data;
      }
    },
    fail: (error) => {
      uni.showToast({
        title: error,
        duration: 2000,
      });
    },
    complete: () => {
      uni.hideLoading();
    },
  });
};
</script>

<style>
.avatarUrl {
  /* background-color: blueviolet; */
  height: 15vh;
  width: 100%;
}

.wxLoginInfo {
  height: 15vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  outline: none;
  border: #fff;
  /* background-color: #1fac26; */
}

.wximg {
  width: 15vh;
  height: 15vh;
  border: solid 1px rgba(128, 128, 128, 0.466);
}

text {
  font-weight: 700;
  display: flex;

}

.nickname {
  margin-top: 10vh;
}

.bottonBox {
  display: flex;
}

input {
  text-align: center;
}
</style>

