<template>
  <div class="app">
    <h2>ref+$emit(子传父的方法)+pubsub-js(任意组件间的传参方法,比Vuex简化很多)</h2>
    <p>app组件中Data定义的数据city的值是：<b>{{city}}</b> 
    </p>
    <button @click="toBeDefault">页面恢复初始状态</button>
    <test1 ref="Test1" :sendData='city' @showCity='updateCity'></test1>
    <test2 ref="test2"></test2>
  </div>
</template>
<script>
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Pubsub from 'pubsub-js'
export default {
  name: "app",
  data: () => ({
    city: "北京"
  }),
  components: {
    Test1,
    Test2
  },
  methods: {
    updateCity(data) {
      // console.log(data)这里的data是子组件传过来的对象。
      this.city = data.cityName;
    },
    toBeDefault(){
      this.city='北京'
      Pubsub.publish('toBeDefault',{content:'',show:''})
    }
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
.app {
  width: 100%;
    text-align:center;

 h2 {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
p{
  width: 100%;
  text-align: center;
  margin: 5px 0;
}
}
</style>

