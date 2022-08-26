<template>
  <div class="broadcast-container" @click="goDetails">
    <i class="icon-broadcast"></i>
    <p class="con">{{ notoice && notoice.notice_name }}</p>
    <i class="arrow">&gt;</i>
  </div>
</template>

<script>
export default {
  name: 'Broadcast',
  props: {
    noticeList: {
      // type: Object,
      required: true
    }
  },
  data () {
    return {
      notoice: null
    }
  },
  // watch: {
  //   noticeList () {
  //     console.log('>>>>', this.noticeList)
  //     this.getNoticeList()
  //   }
  // },
  mounted () {
    // console.log('>>>>>', this.noticeList)
    this.getNoticeList()
  },
  methods: {
    getNoticeList () {
      let url = this.noticeList.data.source.data_url
      this.$axios.get(url,{
          params:{
              current: 1,
              size: 1,
              condition: null
          }
      }).then(res=>{
          if(res.data.code === 200){
            this.notoice = res.data.data.records[0]
          }
      }).catch(err => {
        console.error(err)
      })
    },
    goDetails () {
      this.$router.push({
        path: '/notice-details',
        query: {
          page_id: this.$route.query.page_id,
          data_url: this.noticeList.data.source.data_url
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .broadcast-container {
    width: 6.2rem;
    height: 0.7rem;
    background: rgba(200, 227, 250, 0.5);
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    margin: 0.3rem auto 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-broadcast {
      width: 0.27rem;
      height: 0.23rem;
      background: url("../assets/icon-broadcast.png") no-repeat center / 100% 100%;
    }
    .con {
      flex: 1;
      color: #0286ff;
      font-size: 0.24rem;
      font-weight: 500;
      padding: 0 0.15rem;
    }
    .arrow {
      color: #0286ff;
      font-size: 0.24rem;
      font-weight: 500;
    }
  }
</style>