<template>
  <div class="home">
    <banner></banner>
    <nav-tab></nav-tab>
    <class-info></class-info>
    <teach-schedule></teach-schedule>
    <course></course>
    <course></course>
    <final-exam></final-exam>
    <score></score>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import NavTab from '../components/NavTab.vue'
import ClassInfo from '../components/ClassInfo.vue'
import TeachSchedule from '../components/TeachSchedule.vue'
import Course from '../components/Course.vue'
import FinalExam from '../components/FinalExam.vue'
import Score from '../components/Score.vue'

export default {
  components: {
    Banner, NavTab, ClassInfo, TeachSchedule, Course, FinalExam, Score
  },
  methods: {
    getData(){
      //  
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    width: 100%;  
    background: #F5F7F9;
  }
</style>