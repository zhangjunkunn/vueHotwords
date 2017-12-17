<template>
    <div class="front-wrapper">
        <table class="table-wrapper">
            <tr>
                <th align="left">名称</th>
                <th align="right">热度</th>
            </tr>
            <tr v-for="i in len" :key="i" v-if="lists[page_num * len + i - 1]">
                <td><span class="i-font">{{page_num * len + i}}</span>{{lists[page_num * len + i - 1].title}}</td>
                <td>{{lists[page_num * len + i - 1].num}}</td>
            </tr>
        </table>
        <div class="page-area">
            <button @click="prevPage">上一页</button>
            <!-- <span>{{page_num + 1}}</span> -->
            <span>
                <i 
                v-for="index in page" 
                :key="index" 
                :class="{
                    active: index - 1 == page_num,
                    icon: true
                }"></i>
            </span>
            <button @click="nextPage">下一页</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                page_num: 0,
                // total_page: Math.ceil(this.lists.length / this.len) < this.page ? Math.ceil(this.lists.length / this.len) : this.page
            }
        },
        computed: {
            ...mapState({
                lists: "lists",
                len: state => state.len,
                page: state => (Math.ceil(state.lists.length / state.len) < state.page ? Math.ceil(state.lists.length / state.len) : state.page)
            }),
            // total_page: Math.ceil(this.lists.length / this.len) < this.page ? Math.ceil(this.lists.length / this.len) : this.page
        },
        methods: {
            prevPage() {
                this.page_num > 0 && this.page_num--
            },
            nextPage() {
                this.page_num + 1 < this.page && this.page_num++
            }
        }
    }
</script>  

<style scope>
    .front-wrapper {
        position: relative;
    }
    .table-wrapper {
        position: relative;
        margin: 10px auto;
    }
    .table-wrapper tr>td:first-child {
        text-align: left;
    }
    .table-wrapper tr>td:last-child {
        text-align: right;
    }
    .i-font {
        display: inline-block;
        width: 13px;
        height: 13px;
        font-size: 12px;
        color: #fff;
        margin-right: 4px;
        text-align: center;
        background: lightsalmon
    }
    .page-area {
        /* position: relative; */
        /* top: 30px; */
        margin-top: 30px;
    }
    i {
        display: inline-block;
        vertical-align: middle;
    }
    .icon {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #ccc;
        margin: 0 3px;
    }
    .active {
        background: lightseagreen;
    }
</style>

