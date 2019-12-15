<template>
  <div class="home">
    <!-- <math-digit-plus></math-digit-plus> -->
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row header-text">
        <img src="../assets/img/header-text.svg" alt="">
      </div>

      <div class="row wrapper">
        <ul class="nav nav-tabs w-100" id="myTab" role="tablist">
          <li class="nav-item item-1">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#tabpanel_1" role="tab" aria-controls="home" aria-selected="true">Тренировка</a>
          </li>
          <li class="nav-item item-2">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#tabpanel_2" role="tab" aria-controls="profile" aria-selected="false">Соревнование</a>
          </li>
          <li class="nav-item item-3">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#tabpanel_3" role="tab" aria-controls="contact" aria-selected="false">Топ Республика</a>
          </li>
          <li class="nav-item item-4">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#tabpanel_4" role="tab" aria-controls="contact" aria-selected="false">Топ Школа</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="tabpanel_1" role="tabpanel" aria-labelledby="home-tab">
            <div class="d-flex f-wrap">

              <div class="col-sm-4 game-item">
                <div class="card" @click="post_game('matem')">
                  <div class="g-head">
                    <img src="../assets/img/unnamed1.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card" @click="post_game('fizika')">
                  <div class="g-head">
                    <img src="../assets/img/unnamed.webp" alt="">
                  </div>
                  <div class="g-foot">Физика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed2.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed3.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed4.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed5.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed6.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed7.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head">
                    <img src="../assets/img/unnamed.webp" alt="">
                  </div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>

            </div>
          </div>
          <div class="tab-pane fade" id="tabpanel_2" role="tabpanel" aria-labelledby="profile-tab">             <div class="d-flex f-wrap">

              <div class="col-sm-4 game-item">
                <div class="card" @click="post_game('matem')">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card" @click="post_game('fizika')">
                  <div class="g-head"></div>
                  <div class="g-foot">Физика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>
              <div class="col-sm-4 game-item">
                <div class="card">
                  <div class="g-head"></div>
                  <div class="g-foot">Математика</div>
                </div>
              </div>

            </div>
          </div>
          <div class="tab-pane fade" id="tabpanel_3" role="tabpanel" aria-labelledby="contact-tab">...</div>
          <div class="tab-pane fade" id="tabpanel_4" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    post_game (name) {
      if(name == 'matem') {
        this.$router.push('game_mat')
      }
      if(name == 'fizika') {
        this.$router.push('game_fizika')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .card {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-color: #C4C4C4;
    cursor: pointer;
    transition: all 0.125s ease-in-out;
    &:hover {
      opacity: 0.95;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    }
  }
  .header-text {
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 72%;
    }
  }

  .tab-pane {
    min-height: 1000px;
    padding-bottom: 52px;
    .game-item {
      min-height: 320px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-top: 52px;
      padding: 0 45px;
      .g-head {
        flex: 1;
        background-color: #C4C4C4;
        img {
          width: 100%;
        }
      }
      .g-foot {
        background-color: #fff;
        text-align: center;
        padding: 5px 0;
      }
    }
  }
  .wrapper {
    flex-direction: column;
  }
  .item-1 a, #tabpanel_1{
    background-color: #40C800 !important;
  }
  .item-2 a, #tabpanel_2{
    background-color: #FAC932 !important;
  }
  .item-3 a, #tabpanel_3{
    background-color: #008A7D !important;
  }
  .item-4 a, #tabpanel_4{
    background-color: #288BBE !important;
  }
  .nav-item {
    width: 25%;
    text-align: center;
  }
  .nav-item a, .nav-item a.active {
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #FFFFFF;
    border: none;
    border-radius: 0 !important;
  }
</style>