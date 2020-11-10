<template>
  <a-layout class="layout">
    <!--S 头部-->
    <a-layout-header class="layout__header">
      <div class="layout__header__con">
        <Title />
        <Info />
      </div>
    </a-layout-header>
    <!--E 头部-->
    <a-layout>
      <!--S 视图层-->
      <a-layout-content class="layout__con">
        <router-view />
      </a-layout-content>
      <!--E 视图层-->
    </a-layout>
  </a-layout>
</template>

<script>
import Title from '@/components/menu/Title'
import Info from '@/components/menu/Info'
export default {
  name: 'full',
  components: { Title, Info },
}
</script>

<style lang="scss" scoped>
.layout {
  &__header {
    height: 60px;
    padding: 0 35px;
    &__con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
  }
  &__con {
    padding: 16px;
    height: calc(100vh - 60px);
    overflow: auto;
  }
}
</style>
