<template>
    <div>
        <el-image style="width: 100%; height: 500px" :src="topImageUrl" lazy>
        </el-image>
        <div class="main">
            <div class="view-container container">
                <el-row class="row-bk-color row-padding-20" :gutter="30">
                  <el-col :span="12">
                      <el-image style="width: 100%;" :src="leftImageUrl" lazy>
                      </el-image>
                  </el-col>
                  <el-col :span="12">
                      <div>
                          <span class="header-title">
                              <router-link :to="{ name: 'index-more', params: { label: '理论思想' }}" class="link-font-title">理论思想</router-link>
                          </span>
                          <span class="bottom-line"></span>
                      </div>
                      <div style="padding: 30px 10px 10px 5px;">
                          <div v-for="(item, index) in content1" :key="index">
                              <router-link :to="{ name: 'detail', params: { id: item.id }}" class="link-font"  :title="item.title">{{'● ' + item.title}}</router-link>
                          </div>
                      </div>


                  </el-col>
                </el-row>
                <el-row :gutter="30" style="padding-top: 20px;">
                  <el-col :span="12" style=" padding-left: 0px;">
                      <div class="row-bk-color row-padding-20">
                          <span class="header-title">
                              <router-link :to="{ name: 'index-more', params: { label: '党章' }}" class="link-font-title">党章</router-link>
                          </span>
                          <span class="bottom-line"></span>

                          <div style="padding: 30px 10px 10px 5px;">
                              <div class="link-font">中国共产党章程（2017年修改）</div>
                              <div v-for="(item, index) in content2" :key="index">
                                  <router-link  :to="{ name: 'detail', params: { id: item.id }}" class="link-font" :title="item.title">{{'● ' + item.title}}</router-link>
                              </div>
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="12" style="padding-right: 0px;">
                      <div class="row-bk-color row-padding-20">
                          <span class="header-title">
                              <router-link :to="{ name: 'index-more', params: { label: '准则' }}" class="link-font-title">准则</router-link>
                          </span>
                          <span class="bottom-line"></span>

                          <div style="padding: 30px 10px 10px 5px;">
                              <div class="link-font">关于新形势下党内政治生活的若干准则</div>
                              <div v-for="(item, index) in content3"  :key="index">
                                  <router-link :to="{ name: 'detail', params: { id: item.id }}" class="link-font" :title="item.title">{{'● ' + item.title}}</router-link>
                              </div>
                          </div>
                      </div>

                  </el-col>
                </el-row>
            </div>
            <div class="row-bk-color footer-lunbo">
                <div class="view-container container">
                    <div class="flex-center">
                        <div>
                            <span class="header-title">党建期刊</span>
                            <span class="bottom-line" style="margin: 5px auto;"></span>
                        </div>

                    </div>
                    <div class="lunbo-container">
                        <div class="swiper-container">
                            <template>
                                <swiper :options="swiperOption" class="swiper-wrapper">
                                    <swiper-slide v-for="item in lunboImages" :key="item">
                                        <img :src="item">
                                    </swiper-slide>
                                </swiper>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
    import axios from 'axios';

    export default {
        name: "index",
        components: {
          Swiper,
          SwiperSlide
        },
        data() {
            return {
                topImageUrl: require('./../../images/llll.jpg'),
                leftImageUrl: require('./../../images/left.jpg'),
                content1: [],
                content2: [],
                content3: [],
                lunboImages: [require('./../../images/lunbo1.jpg'), require('./../../images/lunbo2.jpg'), require('./../../images/lunbo3.jpg'),
                    require('./../../images/lunbo4.jpg'), require('./../../images/lunbo5.jpg'), require('./../../images/lunbo6.jpg'),
                    require('./../../images/lunbo7.jpg')],
                swiperOption: {
                    speed: 100,
                    slidesPerView: 7,
                    autoplay: {
                        delay: 1000
                    },
                    loop: true,
                }


            }
        },
        computed: {
        },
        mounted() {
            axios.get('/cms/list').then((resp) => {
                let result = resp.data;
                this.content1 = result[0];
                this.content2 = result[1];
                this.content3 = result[2];
            })
        }
    }
</script>

<style scoped>
    .row-bk-color {
        background-color: #ffffff;

    }
    .row-padding-20 {
        padding: 20px;
    }
    .header-title {
        color: rgb(51, 51, 51);
        font-size: 24px;
        line-height: 30px;
    }
    .bottom-line {
        background: rgb(182, 20, 18);
        display: block;
        width: 24px;
        height: 4px;
        margin-top: 5px;
    }
    .link-font {
        color: rgb(102, 102, 102);
        font-size: 16px;
        line-height: 1.8;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: unset;
    }
    .footer-lunbo {
        margin-top: 30px;
    }
    .flex-center {
        display: flex;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
        justify-content: center;
    }
    .lunbo-container {
        text-align: center;
    }
    .link-font-title {
        color: rgb(51, 51, 51);
        text-decoration: unset;
    }

</style>