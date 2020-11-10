<template>
  <div class="user">
    <img src="@/assets/img/avatar.jpeg" />
    <span>欢迎你，xxx</span>
  </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

<style lang="scss" scoped>
.user {
  img {
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
  }
  span {
    color: #fff;
    margin-left: 10px;
  }
}
</style>
