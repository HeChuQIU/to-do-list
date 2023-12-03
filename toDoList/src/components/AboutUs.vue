<template>
  <view class="avatarUrl">
    <button type="balanced" open-type="chooseAvatar" @chooseavatar="onChooseavatar" class="wxLoginInfo">
      <view class="wximg">
        <image :src="avatarUrl"></image>
      </view>
    </button>
  </view>
  <view class="nickname">
    <text>基础信息</text>
    <tui-divider></tui-divider>
    <view style="display: flex;">
      <view style="margin-left: 20px;">昵称</view>
      <view style="margin: auto;">
        <input type="nickname" class="weui-input" maxlength="10" :value="nickName" @blur="bindblur" placeholder="请输入昵称"
          @input="bindinput" />
      </view>
    </view>
    <tui-divider></tui-divider>
    <view style="display: flex;">
      <view style="margin-left: 20px;">座右铭</view>
      <view style="margin: auto;">
        <input type="text" class="weui-input" maxlength="15" placeholder="写下一句鼓励自己的话吧" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue"
onMounted(() => {
  wx.checkSession({
    success() {
      console.log("gugu还没过期");
    },
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
  const { avatarUrl: chosenAvatarUrl } = e.detail;
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
  height: 15vh;
  width: 100%;
}

.wxLoginInfo {
  height: 15vh;
  width: 15vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.wximg {
  width: 15vh;
  height: 15vh;
  border: solid 1px rgba(128, 128, 128, 0.466);
}

text {
  font-weight: 700;
  display: flex;
  margin-left: 20px;

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

