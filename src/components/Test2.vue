<template>
    <div class="test2">
        <h2>我是组件Test2</h2>
        <label>请输入要Test1展示的内容：<input type="text" v-model="content" placeholder="请输入内容：....."></label>
        <button @click="submitPublish">Submit</button>
        <p v-if="content">我要Test1展示我传的数据====>{{content}}</p>
    </div>
</template>
<script>
import { PubSub } from "pubsub-js";
export default {
  name: "test2",
  data: () => ({
    content: ""
  }),
  // mounted(){
  //     PubSub.publish('myData', {data:'我是Test2的数据'})
  // },
  methods: {
    submitPublish() {
      if (this.content.trim()) {
        PubSub.publish("myData", { data: this.content });
      } else {
        alert("输入的内容不能为空！！！！！");
      }
    }
  },
  mounted() {
    PubSub.subscribe("toBeDefault", (event, data) => {
      this.content = data.content;
    });
  }
};
</script>
<style scoped lang='scss'>
@import '../assets/global.scss';
.test2 {
  border: 2px solid #000;
  width: 800px;
  height: 120px;
  margin: 0 auto;
  margin-top: 20px;
  line-height: 50px;
  text-align: center;
  position: relative;
  background-color: $bg;
  h2 {
    position: absolute;
    top: 0;
    left: 10px;
  }
}
</style>
