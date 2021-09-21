<template>
  <div class="finalexam-container">
     <div class="head">
      <i></i>
      <h3>结业考试</h3>
    </div>
    <div class="finalexam-con">
      <div class="left-pic">
        <img src="https://yanxuan.nosdn.127.net/7a766807e360e4693347e2003812d03b.jpeg" alt="">
      </div>
      <div class="right-info">
        <div class="title">什么是快乐星球</div>
        <div class="intro">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalExam',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .finalexam-container {
    width: 6.2rem;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0.17rem 0.24rem 0 rgba(211, 223, 237, 0.1);
    margin: 0.2rem auto;
    padding: 0 0.3rem;
    .head {
      height: 0.72rem;
      border-bottom: 0.02rem solid #f2f2f2;
      display: flex;
      align-items: center;
      & > i {
        width: 0.24rem;
        height: 0.28rem;
        background: url("../asserts/icon-class.png") no-repeat center / 100% 100%;
      }
      & > h3 {
        color: #333;
        font-size: 0.26rem;
        font-weight: 500;
        margin-left: 0.1rem;
      }
    }
    .finalexam-con {
      height: 1.88rem;
      border-bottom: 0.02rem solid #f2f2f2;
      display: flex;
      align-items: center;
      .left-pic {
        width: 1.25rem;
        height: 1.25rem;
        background: #f2f2f2;
        border-radius: 0.1rem;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      .right-info {
        flex: 1;
        margin-left: 0.2rem;
        .title {
          height: 0.5rem;
          color: #333;
          font-size: 0.26rem;
          font-weight: 800;
          display: flex;
          align-items: center;
        }
        .intro {
          width: 100%;
          color: #666;
          font-size: 0.24rem;
          line-height: 0.4rem;
        }
      }
    }
  }
</style>