<template>
  <div class="course-container">
     <div class="head">
      <i></i>
      <h3>必修网课</h3>
    </div>
    <div class="course-list">
      <div class="course-block" v-for="item in 2" :key="item">
        <div class="left-pic">
          <img src="https://yanxuan.nosdn.127.net/7a766807e360e4693347e2003812d03b.jpeg" alt="">
        </div>
        <div class="right-info">
          <div class="title"><em>视频</em>什么是快乐星球</div>
          <div class="intro">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状...</div>
          <div class="time-watch">
            <p class="time"><i></i>2021.09.30</p>
            <p class="watch"><i></i>2.4K</p>
          </div>
        </div>
      </div>
    </div>
    <div class="more">查看更多<i>&gt;</i></div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      bannerInfo: null
    }
  }
}
</script>

<style lang="less" scoped>
  .course-container {
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
    .course-list {
      width: 100%;
      .course-block {
        height: 2.15rem;
        border-bottom: 0.02rem solid #f2f2f2;
        display: flex;
        align-items: center;
        .left-pic {
          width: 1.6rem;
          height: 1.6rem;
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
            & > em {
              width: 0.6rem;
              height: 0.32rem;
              background: #1890ff;
              border-radius: 0.05rem;
              color: #fff;
              font-size: 0.2rem;
              font-style: normal;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0.12rem;
            }
          }
          .intro {
            width: 100%;
            color: #666;
            font-size: 0.24rem;
            line-height: 0.4rem;
          }
          .time-watch {
            color: #999;
            font-size: 0.2rem;
            display: flex;
            justify-content: flex-end;
            & > p {
              display: flex;
              align-items: center;
              margin-left: 0.2rem;
              & > i {
                width: 0.2rem;
                height: 0.2rem;
                display: block;
                margin-right: 0.05rem;
              }
            }
            .time > i {
              background: url("../asserts/icon-date.png") no-repeat center / 100% 100%;
            }
            .watch > i {
              background: url("../asserts/icon-watch.png") no-repeat center / 100% 100%;
            }
          }
        }
      }
    }
    .more {
      height: 0.76rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      font-size: 0.24rem;
       & > i {
        color: #999;
      }
    }
  }
</style>