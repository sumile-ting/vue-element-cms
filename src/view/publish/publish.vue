<template>
    <div class="main">
        <div class="view-container container">
            <el-row :gutter="15" class="row-header">
                <el-col :span="18" class="el-custom-flex-col">
                    <label class="label-custom">文章标题</label>
                    <el-input v-model="articleTitle" placeholder="请输入文章标题" class="el-custom-flex"></el-input>
                </el-col>
                <el-col :span="4" class="el-custom-flex-col">
                    <template>
                        <label class="label-custom">文章分类</label>
                        <el-select v-model="articleCategory" placeholder="请选择" class="el-custom-flex">
                            <el-option
                                    v-for="item in articleCategories"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-col>
                <el-col :span="2" class="el-custom-flex-col">
                    <el-button type="danger" class="el-custom-flex" @click="publishArticle">发布文章</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="15" style=" margin-top: 10px; margin-bottom: 20px;">
                <ckeditor style="background-color: #ffffff; min-height: 620px; border: 1px solid #ccc;" :editor="editor"
                          @ready="onReady" v-model="contentData"
                          :config="editorConfig"></ckeditor>
            </el-row>

        </div>
    </div>
</template>

<script>
    import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
    import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
    import FileUtil from "../../utils/FileUtil";

    export default {
        name: "publish",

        props: {
            uploadImgHook: {
                type: Function,
                default() {
                    return () => {
                        console.error("undefined uploadImg Hook")
                    }
                }
            }
        },
        data() {
            let categories = [
                {
                    label: '理论思想',
                    value: 'category1'
                }, {
                    label: '党章',
                    value: 'category2'
                }, {
                    label: '准则',
                    value: 'category3'
                }
            ];
            return {
                articleTitle: '',
                articleCategories: categories,
                articleCategory: categories[0].value,
                contentData: '',
                editor: DecoupledEditor,
                editorConfig: {
                    language: "zh-cn",
                    fontSize: {
                        options: [8, 10, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 32, 48]
                    },
                    fontFamily: {
                        options: ["宋体", "仿宋", "微软雅黑", "黑体", "仿宋_GB2312", "楷体", "隶书", "幼圆"]
                    }
                }
            };
        },
        methods: {
            onReady(editor) {
                // Insert the toolbar before the editable area.
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
                editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                    //let val = editor.getData();
                    return {
                        upload: async () => {
                            return await loader.file.then(f => {
                                const F = new FileReader();
                                F.readAsArrayBuffer(f);
                                console.log(f)
                                return new Promise(resolve => {
                                    F.onload = function () {
                                        resolve({bufAsArray: F.result, file: f})
                                    };
                                })
                            }).then(v => {
                                //执行上传上传
                                return this.uploadImgHook(v)
                            });

                        }
                    }
                };
            },
            publishArticle() {
               var content = `<html><head><meta charset="utf-8" /></head><body>${this.contentData}</body></html>`;
               FileUtil.doSave(content, "text/latex", "hello.html")
            }


        }
    }
</script>

<style scoped>
    .row-header {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .label-custom {
        display: inline-block;
        margin-right: 5px;
        color: #444444;
    }

    .el-custom-flex {
        flex: 1;
    }

    .el-custom-flex-col {
        display: flex;
        align-items: center;
    }

</style>