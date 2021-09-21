<template>
  <div class="course-list">
    <banner></banner>
    <course></course>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Course from '../components/Course.vue'

export default {
  components: {
    Banner, Course
  }
}
</script>

<style lang="less" scoped>
  .course-list {
    width: 100%;
  }
</style>