<template>
    <div class="main">
        <div class="view-container container detail-container">
            <h2 class="title">{{articleTitle}}</h2>
            <el-row class="small-title">
                <el-col :span="4" :offset="16">
                    时间：{{createTime}}
                </el-col>
                <el-col :span="4">
                    分类：{{articleCategory}}
                </el-col>
            </el-row>
            <el-row class="article-content">
                <span v-html="articleContent"></span>
            </el-row>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "detail",
        data() {
            return {
                articleTitle: '',
                articleCategory: '',
                articleContent: '',
                createTime: ''
            }
        },
        mounted() {
            axios
                .get('/cms/list/' + this.$route.params.id)
                      .then(response => {
                          console.log('success' + response.data);
                          let datas = response.data
                          this.articleTitle = datas.title;
                          this.articleCategory = this.GLOBAL.CATEGORIES.find((data) => data.value == datas.category ).label;
                          this.articleContent = datas.content;
                          this.createTime = new Date(Number(datas.id)).format('yyyy-MM-dd');
                      })
                      .catch(error => {
                        console.error(error)
                      })
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        font-size: 36px;
        color: #333;
        font-weight: normal;
    }
    .small-title {
        font-size: 12px;
        text-align: center;
        color: #999;
        padding: 0 15px;
        font-family: Verdana, Tahoma, 宋体;
    }
    .article-content {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0px;
        font-size: 16px;
        line-height: 30px;
        font-family: 宋体;
        color: rgb(44, 44, 44);
        white-space: normal;
    }
    .detail-container {
        background-color: #ffffff;
        padding: 20px;
        margin-top: 30px;
        min-height: 700px;
    }
</style>