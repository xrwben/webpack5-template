<template>
  <div class="class-info">
    <div class="head">
      <i></i>
      <h3>分班信息</h3>
    </div>
    <div class="con-list">
      <div class="con-item">
        <span>我的班级</span>
        <p class="bold">致远计划 一期班</p>
      </div>
      <div class="con-item">
        <span>班主任</span>
        <p>circlechai alexchen</p>
      </div>
      <div class="con-item">
        <span>负责HRD</span>
        <p>circlechai alexchen</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassInfo',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .class-info {
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
    .con-list {
      padding: 0.2rem 0;
      .con-item {
        height: 0.5rem;
        font-size: 0.26rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        & > span {
          width: 1.5rem;
          color: #999;
        }
        & > p {
          color: #333;
          &.bold {
            font-weight: 700;
          }
        }
      }
    }
  }
</style>