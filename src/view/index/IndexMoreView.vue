<template>
    <div class="main">
        <div class="view-container container">
            <el-row :gutter="30" style="margin-top: 30px;">
                <el-col :span="6">
                    <div class="list">

                        <div class="list-title-item">
                            <span>新闻中心</span>
                        </div>
                        <ul class="ul-menu">
                           <li v-for="item in categories" :key="item.value" v-bind:class="{ active: item.label == category }" @click="changeCategory(item)">
                               {{item.label}}
                           </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="18" style="background-color: #ffffff; min-height: 700px; padding: 20px; border: 1px solid #ededed;">
                    <div class="list-right">
                        <div class="list-right-title">
                            <div>
                                <el-divider direction="vertical" style="width: 3px; background-color: #0069c5; height: 1.2em;"></el-divider>
                                <span>{{category}}</span>
                            </div>
                        </div>
                        <div class="list-right-content">
                            <ul>
                                <li v-for="(item, index) in articles" :key="item.id">
                                    <span class="date-label">[2020-02-01]</span>
                                    <router-link  :to="{ name: 'detail', params: { id: item.id }}" class="link-font" :title="item.title">{{item.title}}</router-link>

                                    <el-divider v-if="(index + 1) % 5 == 0"></el-divider>
                                </li>
                            </ul>
                            <el-pagination
                                  @size-change="handleSizeChange"
                                  @current-change="handleCurrentChange"
                                  :current-page="pageNo"
                                  :page-sizes="[20, 50, 100, 200]"
                                  :page-size="pageSize"
                                  layout="total, sizes, prev, pager, next, jumper"
                                  :total="total" style="text-align: center;">
                                </el-pagination>
                        </div>
                    </div>
                </el-col>

            </el-row>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    const DEFAULT_PAGE_SIZE = 20;
    export default {
        name: "IndexMoreView",
        data() {
            return {
                categories: this.GLOBAL.CATEGORIES,
                category: this.$route.params.label,
                articles: [],
                pageNo: 1,
                pageSize: DEFAULT_PAGE_SIZE,
                total: 0
            }
        },
        methods: {
            handleSizeChange(val) {
                this.pageSize = val;
                this.getPage();
            },
            handleCurrentChange(val) {
                this.pageNo = val;
                this.getPage();
            },
            getPage() {
                  axios.get('/cms/list/category', {
                         params: {
                             pageNo: this.pageNo,
                             pageSize: this.pageSize,
                             category: this.categoryVal
                         }
                    }).then((resp) => {
                        console.log(resp.data);
                        this.articles = resp.data.result.map(item => {
                           return {
                             createTime: new Date(Number(item.id)).format('yyyy-MM-dd'),
                             id: item.id,
                             title: item.title
                           }
                        });
                        console.log(this.articles);
                        this.total = resp.data.total;
                    })
              },
            changeCategory(item) {
                this.category = item.label;
                this.pageNo = 1;
                this.pageSize = DEFAULT_PAGE_SIZE;
                this.getPage();
            }


        },
        mounted() {
            this.getPage();
        },
        computed: {
            categoryVal: function () {
                let category = this.category;
                return this.categories.find(function (item) {
                    return item.label == category;
                }).value;
            }
        }
    }
</script>

<style scoped>
    .list-title-item {
        background: rgb(189 45 42);
        color: #ffffff;
        height: 58px;
        font-weight: bold;
        font-size: 18px;
        line-height: 58px;
        text-align: center;
    }
    .ul-menu {
        list-style: none;
        padding-inline-start: unset;
        background: #f4f4f5;
        margin-block-start: unset;
    }
    .ul-menu > li {
        font-size: 16px;
        line-height: 56px;
        text-align: center;
        list-style: none;
    }
    .list-right-title {
        height: 36px;
        border-bottom: 1px solid #ededed;
        line-height: 36px;
    }
    .list-right-title > div {
        color: #0069c5;
        font-weight: bold;
        float: left;
        height: 35px;
        text-align: center;
        font-size: 16px;
        line-height: 35px;
    }
    .ul-menu > li.active {
        background: #e9e9e9;
        color: #1475cf;
        font-weight: bold;
    }
    .ul-menu > li:hover {
        color: rgb(218 96 93);
        cursor: pointer;
    }
    .link-font {
        text-decoration: none;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #2b2b2b;
        font-size: 16px;
        line-height: 38px;
    }
    .date-label {
        float: right;
        color: #757575;
        font-size: 16px;
        line-height: 38px;
    }
    .list-right-content > ul > li:hover > a{
        color: rgb(218 96 93)
    }
</style>