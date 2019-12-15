<template>
  <div>
    <div class="my-navbar">
      <div class="container">
        <div class="row my-nav">
          <img src="../assets/img/logo.svg" alt="logo">
          <div class="flex-1">
            <div class="d-flex ul">
              <div class="flex-item">
                <img src="../assets/img/search.svg" alt="">
                <span>Помощь</span>
              </div>
              <div class="flex-item">
                <span>Войти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
    }
  }
</script>

<style lang="scss" scoped>


.my-navbar {
  z-index: 99999;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(73, 132, 255, 0.15);
  background-color: #fff;
  .ul {
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    .flex-item {
      display: flex;
      justify-content: space-between;
      min-width: 100px;
      align-items: center;
      font-size: 18px;
      line-height: 25px;
      color: #888EA0;
      margin-left: 45px;
      cursor: pointer;
      transition: all 0.125s ease-in-out;
      &:hover {
        color: #262626;
      }
      img {
        margin-right: 26px;
      }
    }
  }
}

</style>