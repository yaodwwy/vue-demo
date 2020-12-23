<template>
  <div>
    <!-- Renders a div element by default -->
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="swipeRight">
      <div style="background-color: sandybrown;height: 100px">
        Swipe me!
        {{swiped}}
      </div>
    </v-touch>
    <!-- Render as other elements with the 'tag' prop -->
    <v-touch tag="a" v-on:tap="onTap">
      <div style="background-color: #d3db57;height: 100px">
        Tap me!
      </div>
    </v-touch>
    <div>
      center 可划动
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!--
    main.js EL import first

    <el-button type="danger" loading>危险按钮</el-button>

        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <el-rate
            v-model="value2"
            :colors="colors">
          </el-rate>
        </div>

        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>-->
  </div>
</template>

<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  name: 'Center',
  data() {
    return {
      radio: "2",
      num: 1,
      value: false,
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      swiped:''
    }
  }, methods: {
    handleChange(value) {
      console.log(value);
    },
    onSwipeLeft() {
      this.swiped = '在向左滑动';
    },
    swipeRight() {
      this.swiped = '在向右滑动';
    },
    onTap() {
      console.log('onTap');
    }
  },
  beforeRouteEnter(to, from, next) {
    next()
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 250px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
