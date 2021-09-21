<template>
  <div class="score-container">
     <div class="head">
      <i></i>
      <h3>结业考试</h3>
    </div>
    <div class="score-con">
      <p>我的学习积分</p>
      <p><strong>100</strong>分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .score-container {
    width: 6.54rem;
    height: 2.94rem;
    background: url("../asserts/score-bg.png") no-repeat center / 100% 100%;
    margin: 0 auto;
    padding: 0 0.47rem;
    .head {
      height: 0.72rem;
      border-bottom: 0.02rem solid rgba(233, 142, 9, 0.2);
      display: flex;
      align-items: center;
      & > i {
        width: 0.31rem;
        height: 0.26rem;
        background: url("../asserts/icon-score.png") no-repeat center / 100% 100%;
      }
      & > h3 {
        color: #e98e09;
        font-size: 0.26rem;
        font-weight: bold;
        margin-left: 0.1rem;
      }
    }
    .score-con {
      height: 1.88rem;
      padding: 0.45rem 0 0 0.35rem;
      font-size: 0.26rem;
      font-weight: bold;
      color: #893100;
      line-height: 0.45rem;
      strong {
        color: #e98e09;
        font-size: 0.48rem;
        line-height: 0.56rem;
      }
    }
  }
</style>