<template>
  <div class="notice">
    <banner></banner>
    <div class="notice-content">
      <div class="title">
        <h3><i></i><strong>任务标题示例任务标题示例任务标题示例任务标题示例任务标...</strong></h3>
        <p class="time"><i></i>2021.09.08  08:30-10:00</p>
      </div>
      <div class="details">
        内容示例内容示例内容示例内容示例内容示例内容
        示例内容示例内容示例。

        内容示例内容示例内容示例内容示例内容示例内容
        示例内容示例内容示例，内容示例内容示例内容例
        内容示例内容示例内容示例内容示例。

        内容示例内容示例内容示例内容示例内容示例内容
        示例内容示例内容示例，内容示例内容示例内容例
        内容示例内容示例内容示例内容示例。内容示例内
        容示例内容示例内容示例内容示例内容示例内容示
        例内容示例，内容示例内容示例内容例内容示例内
        容示例内容示例内容示例。
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
  name: 'notice',
  components: {
    Banner
  }
}
</script>

<style lang="less" scoped>
  .notice {
    width: 100%;
    min-height: 100vh;
    background: #F5F7F9;
    .title {
      width: 6.2rem;
      background: #fff;
      box-shadow: 0 0.17rem 0.24rem 0 rgba(211, 223, 237, 0.1);
      border-radius: 0.1rem;
      padding: 0.3rem;
      margin: 0.3rem auto 0.5rem;
      & > h3 {
        color: #333;
        font-size: 0.26rem;
        line-height: 0.42rem;
        & > i {
          width: 0.6rem;
          height: 0.32rem;
          background: url("../asserts/icon-notice.png") no-repeat center / 100% 100%;
          display: inline-block;
          margin-right: 0.15rem;
          vertical-align: middle;
        }
        & > strong {
          font-weight: 800;
          vertical-align: middle;
        }
      }
      .time {
        color: #999;
        font-size: 0.22rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        & > i {
          width: 0.23rem;
          height: 0.23rem;
          background: url("../asserts/icon-time.png") no-repeat center / 100% 100%;
          margin-right: 0.1rem;
        }
      }
    }
    .details {
      color: #333;
      font-size: 0.26rem;
      font-weight: 500;
      line-height: 0.45rem;
      padding: 0 0.5rem 0.5rem;
    }
  }
</style>