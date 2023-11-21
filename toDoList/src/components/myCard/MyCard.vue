<template>
    <tui-card :title="card.title" :tag="card.tag">
        <template v-slot:body>
            <view class="tui-default">
                一段话
            </view>
        </template>
        <template v-slot:footer>
            <view class="tui-default">
                默认卡片底部 slot=>footer
            </view>
        </template>
    </tui-card>
    <button @click="SubmitForm">button</button>
</template>

<script setup>
import { ref } from 'vue';

const card = ref({
    title: {
        text: 'CSDN云计算'
    },
    tag: {
        text: '1小时前'
    },
    header: {
        bgcolor: '#F7F7F7',
        line: true
    },
});

const SubmitForm = async () => {
    card.value.title.text = "wd"
}
</script>