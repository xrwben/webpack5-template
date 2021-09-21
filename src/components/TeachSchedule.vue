<template>
  <div class="teach-schedule-container">
    <div class="head">
      <i></i>
      <h3>授课日程</h3>
    </div>
    <div class="teach-schedule-list">
      <div class="teach-schedule-block" v-for="item in 3" :key="item">
        <div class="title"><i></i>致远计划培训课</div>
        <div class="time-address">
          <p class="time"><i></i>2021.09.08  08:30-10:00</p>
          <p class="address"><i></i>腾讯大厦35F</p>
        </div>
        <div class="about"><span><label>相关视频</label>相关视频相关视频</span><i>&gt;</i></div>
        <div class="about"><span><label>相关图文</label>相关视频相关视频</span><i>&gt;</i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeachSchedule',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .teach-schedule-container {
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
    .teach-schedule-list {
      .teach-schedule-block {
        padding: 0.1rem 0;
        &:not(:last-of-type) {
          border-bottom: 0.02rem solid #f2f2f2;
        } 
        .title {
          height: 0.7rem;
          color: #333;
          font-size: 0.28rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          & > i {
            width: 0.27rem;
            height: 0.27rem;
            background: url("../asserts/icon-course-name.png") no-repeat center / 100% 100%;
            margin-right: 0.1rem;
          }
        }
        .time-address {
          height: 1.2rem;
          background: #fafafa;
          border-radius: 0.1rem;
          padding: 0.2rem;
          & > p {
            height: 0.4rem;
            color: #999;
            font-size: 0.24rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            & > i {
              display: block;
              margin-right: 0.15rem;
            }
          }
          .time > i {
            width: 0.23rem;
            height: 0.23rem;
            background: url("../asserts/icon-time.png") no-repeat center / 100% 100%;
          }
          .address > i {
            width: 0.21rem;
            height: 0.25rem;
            background: url("../asserts/icon-address.png") no-repeat center / 100% 100%;
          }
        }
        .about {
          height: 0.6rem;
          color: #333;
          font-size: 0.24rem;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > i {
            color: #999;
          }
        }
      }
    }
  }
</style>