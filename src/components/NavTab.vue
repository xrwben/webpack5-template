<template>
  <div class="nav-tab">
    <ul class="nav-list">
      <li :class="['nav-item', {'active': currentTab===item.name}]" 
        v-for="item in navList"
        :key="item.type"
        @click="changeNavTab($event, item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavTab',
  data () {
    return {
      navList: [
        { type: 1, name: '分班信息' },
        { type: 2, name: '授课日程' },
        { type: 3, name: '必修网课' },
        { type: 4, name: '选修网课' },
        { type: 5, name: '结业考试' }
      ],
      currentTab: '分班信息'
    }
  },
  methods: {
    // 点击切换tab
    changeNavTab (e, info) {
      if (this.currentTab === info.name) {
        return
      }
      this.currentTab = info.name
      const _li = e.target
      _li.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    }
  }
}
</script>

<style lang="less" scoped>
  .nav-tab {
    width: 100%;
    height: 0.8rem;
    position: relative;
    overflow: auto;
    .nav-list {
      height: 0.8rem;
      background: #fff;
      box-shadow: 0 0.17rem 0.24rem 0 rgba(211, 223, 237, 0.2);
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      white-space: nowrap;
      .nav-item {
        height: 100%;
        margin: 0 0.3rem;
        color: #999;
        font-size: 0.26rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        &.active {
          color: #000;
          font-size: 0.3rem;
          font-weight: 800;
          border-bottom: 0.05rem solid #1890FF;
        }
      }
    }
  }
</style>