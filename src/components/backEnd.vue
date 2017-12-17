<template>
  <div class="end-wrapper">
      <div class="set-wrapper">
          榜单长度：<input type="text" :value="len" @input="e => changeL(e.target.value)">
          榜单页数：<input type="text" :value="page" @input="e => changeP(e.target.value)">
      </div>
      <div class="add-wrapper">
          名称：<input type="text" v-model="title">
          热度：<input type="text" v-model="l">
      </div>
      <div class="comfirm-btn" @click="add">确认</div>
      <table class="item-wrapper">
          <tr>
              <th>编号</th>
              <th>名称</th>
              <th>时间</th>
              <th>热度</th>
              <th>操作</th>
          </tr>
          <tr v-for="(item, index) in lists" :key="index">
              <td>{{index + 1}}</td>
              <td>{{item.title}}</td>
              <td>{{item.time}}</td>
              <td>{{item.num}}</td>
              <td>
                  <span @click="changeItem(item)">修改</span>
                  /
                  <span @click="delList(item.time)">删除</span>
              </td>
          </tr>
      </table>
      <div class="fall" v-show="flag">
          <div class="fall-paper"></div>
          <div class="content">
            名称：<input type="text" v-model="tempTit">
            <br>
            热度：<input type="text" v-model="tempNum">
            <br>
            <br>
            <button @click="changeList({
                title: tempTit,
                num: tempNum,
                time: tempTime
            });flag = false;">确认</button>
            <button @click="flag = false">取消</button>
          </div>
      </div>
  </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        data() {
            return {
                title: '',
                l: '',
                flag: false,
                tempTit: '',
                tempNum: '',
                tempTime: ''
            }
        },
        computed: {
            ...mapState({
                lists: state => state.lists,
                len: state => state.len,
                page: state => state.page
            })
        },
        methods: {
            ...mapMutations({
                changeL: 'changeLen',
                changeP: 'changePage',
                addList: 'addList',
                delList: 'delList',
                changeList: 'changeList'
            }),
            add() {
                if(this.title && this.l) {
                    this.addList({
                        title: this.title,
                        num: this.l
                    })
                    this.title = ''
                    this.l = ''
                } else {
                    this.addList({
                        title: 'name' + Math.floor(Math.random() * 100),
                        num: Math.floor(Math.random() * 100)
                    })
                }
            },
            changeItem(item) {
                this.tempTit = item.title;
                this.tempNum = item.num;
                this.tempTime = item.time;
                this.flag = true;
            }
        }
    }
</script>  

<style scope>
    .end-wrapper {
        margin-top: 20px;
    }
    .comfirm-btn {
        margin: 10px auto 0;
        width: 140px;
        height: 24px;
        border-radius: 5px;
        text-align: center;
        line-height: 25px;
        border: 1px solid grey;
        background: lightblue;
    }
    .comfirm-btn:hover {
        background: deepskyblue;
        cursor: pointer;
    }
    .item-wrapper {
        width: 100%;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }
    .item-wrapper td {
        white-space: nowrap;
    }
    .item-wrapper span {
        cursor: pointer;
    }
    .item-wrapper span:hover {
        color: deepskyblue;
    }
    .fall .fall-paper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: dimgrey;
        opacity: 0.6;
    }
    .fall .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
        border-radius: 4px;
        background: #ccc;
        padding: 6px 10px;
    }
</style>
