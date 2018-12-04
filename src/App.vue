<template>
  <div id="app">
    <m-nav :msg="msg"></m-nav>
    <transition name="animate">
      <router-view/>
    </transition>
    <m-nav msg="yiyiyiy"></m-nav>
  </div>
</template>

<script>
import mNav from '@/components/mNav'
export default {
  name: 'App',
  components: {
    mNav
  },
  data () {
    return {
      msg: '99999'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.animate-enter-active,
.animate-leave-active {
  transform: translateX(0);
  transition: transform 1s;
}
.animate-enter,
.animate-leave-to {
  transform: translateX(520px);
}
</style>
