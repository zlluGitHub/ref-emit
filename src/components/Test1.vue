<template>
    <div class="test1">
        <h2>我是组件Test1</h2>
        <h3>父组件要求我展示的数据：{{sendData}}</h3>
        <button @click='selectCity(`秦皇岛`)'>点击此处将‘秦皇岛’发射给父组件</button>
        <p>兄弟组件Test2传给我的数据：{{show}}</p>
    </div>
</template>
<script>
import Pubsub from "pubsub-js";
export default {
  name: "test1",
  data: () => ({
    show: ""
  }),
  props: ["sendData"],
  methods: {
    selectCity(city) {
      const data = { cityName: city };
      this.$emit("showCity", data);
    }
  },
  mounted() {
    Pubsub.subscribe("myData", (event, data) => {
      console.log(data);
      this.show = data.data;
    });
  },
  beforeMount() {
    PubSub.subscribe("toBeDefault", (event, data) => {
      console.log(data);
      this.show = data.show;
    });
  }
};
</script>
<style scoped lang='scss'>
@import '../assets/global.scss';
.test1 {
  border: 2px solid #000;
  width: 800px;
  height: 150px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  background-color: $bg;
  button {
    width: 100px;
    margin: 10px 0;
  }
  h2 {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>

