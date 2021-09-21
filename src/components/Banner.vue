<template>
  <div class="banner">
    <img class="left-pic" src="https://yanxuan.nosdn.127.net/7a766807e360e4693347e2003812d03b.jpeg" alt="">
    <div class="right-info">
      <div class="title">致远计划专区</div>
      <div class="intro">专区简介文本专区专区简介文本专区专区简介文本专区专区简介文本专区</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      bannerInfo: null
    }
  }
}
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 2rem;
    background: url("../asserts/banner.png") no-repeat center / 100% 100%;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    .left-pic {
      width: 1.2rem;
      height: 1.2rem;
      background: #fff;
      border-radius: 0.1rem;
    }
    .right-info {
      margin-left: 0.25rem;
      .title {
        color: #fff;
        font-size: 0.32rem;
        font-weight: 800;
        line-height: 0.36rem;
      }
      .intro {
        color: #fff;
        font-size: 0.24rem;
        font-weight: 500;
        line-height: 0.34rem;
        margin-top: 0.2rem;
      }
    }
  }
</style>