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
                          <span class="header-title">理论思想</span>
                          <span class="bottom-line"></span>
                      </div>
                      <div style="padding: 30px 10px 10px 5px;">
                          <div v-for="(item, index) in content1" :key="index">
                              <el-link class="link-font" :title="item.title">{{'● ' + item.title}}</el-link>
                          </div>
                      </div>


                  </el-col>
                </el-row>
                <el-row :gutter="30" style="padding-top: 20px;">
                  <el-col :span="12" style=" padding-left: 0px;">
                      <div class="row-bk-color row-padding-20">
                          <span class="header-title">党章</span>
                          <span class="bottom-line"></span>

                          <div style="padding: 30px 10px 10px 5px;">
                              <el-link class="link-font">中国共产党章程（2017年修改）</el-link>
                              <div v-for="(item, index) in content2" :key="index">
                                  <el-link class="link-font" :title="item.title">{{'● ' + item.title}}</el-link>
                              </div>
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="12" style="padding-right: 0px;">
                      <div class="row-bk-color row-padding-20">
                          <span class="header-title">准则</span>
                          <span class="bottom-line"></span>

                          <div style="padding: 30px 10px 10px 5px;">
                              <el-link class="link-font">关于新形势下党内政治生活的若干准则</el-link>
                              <div v-for="(item, index) in content3"  :key="index">
                                  <el-link class="link-font" :title="item.title">{{'● ' + item.title}}</el-link>
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
                content1: [
                    {
                        id: 1,
                        title: '学习贯彻新时代中国特色社会主义思想'
                    }, {
                        title: '学习贯彻党的十九大精神'
                    }, {
                        title: '学习教育 “两学一做”'
                    }, {
                        title: '学习贯彻全国组织工作会议精神'
                    }, {
                        title: '学习贯彻新时代中国特色社会主义思想'
                    }, {
                        title: '学习贯彻党的十九大精神'
                    }, {
                        title: '学习贯彻全国组织工作会议精神'
                    }, {
                        title: '学习贯彻新时代中国特色社会主义思想'
                    }, {
                        title: '学习教育 “两学一做”'
                    }
                ],
                content2: [
                    {
                        title: '中国共产党第十九次全国代表大会关于《中国共产党章程（修正案）》的决议'
                    }, {
                        title: '党章专题 党章解读 党章公开课 党章知识自测 党章学习资料下载'
                    }, {
                        title: '关于《关于新形势下党内政治生活的若干准则》的说明'
                    }, {
                        title: '中组部副部长齐玉介绍《关于新形势下党内政治生活的若干准则》有关情况'
                    }, {
                        title: '中国共产党第十九次全国代表大会关于《中国共产党章程（修正案）》的决议'
                    }, {
                        title: '党章专题 党章解读 党章公开课 党章知识自测 党章学习资料下载'
                    }
                ],
                content3: [
                    {
                        title: '关于《关于新形势下党内政治生活的若干准则》的说明'
                    }, {
                        title: '中组部副部长齐玉介绍《关于新形势下党内政治生活的若干准则》有关情况'
                    }, {
                        title: '中国共产党第十九次全国代表大会关于《中国共产党章程（修正案）》的决议'
                    }, {
                        title: '党章专题 党章解读 党章公开课 党章知识自测 党章学习资料下载'
                    }, {
                        title: '关于《关于新形势下党内政治生活的若干准则》的说明'
                    }, {
                        title: '中组部副部长齐玉介绍《关于新形势下党内政治生活的若干准则》有关情况'
                    }
                ],
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

</style>