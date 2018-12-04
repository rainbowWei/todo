<template>
  <div class="m-nav">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'mNav',
  data () {
    return {
      a: true
    }
  },
  props: {
    msg: {
      type: String,
      default: '808080',
      required: true
    }
  }
}
</script>