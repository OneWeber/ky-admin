<template>
  <div class="info">
    <a-tooltip placement="bottom" class="icon" @click="handleSetting">
      <template slot="title">
        <span>设置</span>
      </template>
      <a-icon type="setting" />
    </a-tooltip>
    <User />
  </div>
</template>

<script>
import User from '@/components/menu/User'
export default {
  name: 'Info',
  components: { User },
  methods: {
    handleSetting() {
      // 点击设置icon跳转到设置页面
      this.$router.push('/setting')
    },
  },
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  .icon {
    color: #fff;
    font-size: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
