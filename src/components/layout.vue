<template>
    <el-container>
        <el-header class="el-header-no-padding">
            <div class="header container">
                <div class="logo-text">
                    <div >
                        <div class="logo-text-color logo-text-color-top">文章发布系统</div>
                        <div class="logo-text-color logo-text-color-bottom">VUE-CMS</div>
                    </div>

                </div>
                <el-menu  class="el-menu-top" mode="horizontal" :default-active="$route.path" router
                     textColor="#ffffff" activeTextColor="#ffffff">
                    <el-menu-item index="/index">首页</el-menu-item>
                    <el-menu-item index="/publish">发布文章</el-menu-item>
                </el-menu>
            </div>

        </el-header>
        <el-main>
           <router-view></router-view>
        </el-main>
        <el-footer>
            <div class="container footer-container">
                <div class="project-name">
                    文章发布系统模板
                </div>
                <div class="copy-right">
                    Copyright @ 2020-2022 sumile-ting All rights reserved
                </div>

            </div>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>
    .el-header-no-padding, .el-footer {
        padding: 0px;
        background-color: rgb(182, 20, 18);
    }

    .logo-text {
        float: left;
        height: 60px;
        color: #ffffff;
        display: flex;
        align-items: center;
    }
    .el-menu-top {
        float: right;
        background-color: rgba(255,255,255,0);
        width: 200px;
        display: flex;
    }
    .logo-text-color {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }
    .logo-text-color-top {
        font-size: 18px;
    }
    .logo-text-color-bottom {
        font-size: 13px;
        font-weight: 500;
    }
    .footer-container {
        color: #ffffff;
        text-align: center;
    }

    .project-name {
        font-weight: bolder;
        font-size: 24px;
        line-height: 38px;
        margin-bottom: 12px;
    }
    .el-footer {
        display: flex;
        align-items: center;
        height: 90px !important;
    }
    .el-main {
        min-height: 787px;
        padding: 0px;
    }
    .el-menu-top>.el-menu-item.is-active {
        background-color: rgb(150, 0, 1);
    }
    .el-menu-top>.el-menu-item {
       border-bottom: none;
       flex: 1;
       text-align: center;
    }

    .el-menu-top>.el-menu-item:not(.is-disabled):focus,
    .el-menu-top>.el-menu-item:not(.is-disabled):hover,
    .el-menu-top>.el-submenu .el-submenu__title:hover {
        background-color: rgb(150, 0, 1);
    }
    .el-container {
        background: rgb(247, 248, 250);
    }
</style>