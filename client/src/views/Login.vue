<template>
    <div class="login-container">
        <div class="login">
            <h3 style="text-align:center;font-weight:bold">node+mongodb+vue实现的简单查询</h3>
            <van-cell-group>
                <van-field
                    v-model="username"
                    clearable
                    placeholder="请输入用户名"
                />
                <!-- <van-field
                    v-model="password"
                    type="password"
                    placeholder="请输入密码"
                    
                /> -->
            </van-cell-group>
            <van-button type="primary" size="large" style="margin-top:10px;" @click="login()"  :disabled="btnDisabled" >查询</van-button>
        </div>
       <van-button type="info" style="width:30%;margin:20px 0px 0px 30px;" @click="addNew()">新增</van-button>
        <div class="table-list">
            <ul>
                    <li>用户名</li>
                    <li>密码</li>
                    <li>操作</li>
                </ul>
                <ul v-for="item in userList" :key="item._id">
                    <li>{{item.userName}}</li>
                    <li>{{item.password}}</li>
                    <li><span @click="unpdata(item)">编辑</span>&nbsp;&nbsp;&nbsp;&nbsp;<span @click="delet(item)">删除</span></li>
                </ul>
                <ul v-if="userList.length==0">
                    <p>暂无数据</p>
                </ul></div>
        <van-popup
            :title="titleMap[dialogStatus]"
            v-model="show"
            position="top"
            :style="{ height: '20%' }">
            <van-field
                v-model="name"
                type="text"
                label="用户名"
                placeholder="用户名"
                required
            />
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="密码"
                required
            />
            <van-button type="primary" size="large" style="margin-top:10px;" @click="add()"  :disabled="btnDisabled" >{{btnName}}</van-button>
            </van-popup>

    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            show:false,
            btnDisabled:false,
            name:'',
            username:'',
            password:'',
            loading:false,
            stationId:'',
            btnName:'新      增',
            id:'',
            userList:[],
            dialogStatus:'',
            titleMap: {
                add:'新增',
                edit:'编辑'
            }
        }
    },
    mounted(){
        this.initData();
    },
    methods:{
        addNew(){
            this.btnName="新      增"
            this.name="",
            this.password="",
            this.show=true;
            this.dialogStatus='add'
        },
        unpdata(item){
             this.id=item._id;
             this.btnName="修      改"
            this.show=true,
            this.dialogStatus='edit'
            this.name=item.userName;
            this.password=item.password;
        },
        add(){
            if(this.dialogStatus=='add'){
                this.addInfo();
            }else{
                this.updateInfo();
            }
          
        },
        addInfo(){
            let url=this.$url.base+'addUser';
            let data={
                userName:this.name,
                password:this.password,
            }
            this.$axios.post(url,data)
            .then( (res)=> {
                if(res.data.code==200){
                    this.$toast.success('新增成功');
                    this.show=false;
                    this.initData();
                }
            })
            .catch( (error)=> {
                console.log(error);
            });
        },
        updateInfo(){
            let url=this.$url.base+"updateUser";
            let data={
                userName:this.name,
                password:this.password,
                _id:this.id
            }
          this.$axios.post(url,data)
         .then( (res)=> {
           if(res.data.code==200){
                 this.$toast.success('修改成功');
                 this.show=false;
                 this.initData();
             }
        })
        .catch( (error)=> {
            console.log(error);
        });
        },
        login(){
            // if(this.username == ''){
            //     this.$toast("用户名不能为空");
            //     return false;
            // }
            // if(this.password == ''){
            //     this.$toast("密码不能为空");
            //     return false;
            // }
            this.cashiercheck();
        },
        cashiercheck(){
          let url=this.$url.base+'login';
          this.$axios.get(url, {
                params: {
                    userName: this.username
                }
         })
         .then( (res)=> {
           this.userList=res.data.data
        })
        .catch( (error)=> {
            console.log(error);
        });
           
        },
        delet(item){
            console.log(item,2222);
          let url=this.$url.base+"deleteUserById";
          this.$axios.get(url, {
                params: {
                    id:item._id
                }
         })
         .then( (res)=> {
             if(res.data.code==200){
                 this.$toast.success('删除成功');
                 this.initData();
             }
        })
        .catch( (error)=> {
            console.log(error);
        });
        },
        initData(){
          let url=this.$url.base+"getUsers";
          this.$axios.get(url)
         .then( (res)=> {
               this.userList=res.data.data
        })
        .catch( (error)=> {
            console.log(error);
        });
        }
    }
}
</script>
<style>
.login-container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* background: url(../../public/img/bg.png) no-repeat; */
    background-size: 100% 100%;
    flex-direction: column;
    font-size: 14px;

}
.login{
    padding: 0px 15px;
}
.copyRight{
    font-size: 14px;
    text-align: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    padding: 20px 0;
    color: #726f6f;
}
.table-list {
    width: 90%;
    margin: 20px auto;
}
.table-list ul{
    flex: 1;
    display: flex;
      border: 1px solid #000;
      text-align: center;
  
}
.table-list ul li{
    padding: 5px 0;
    flex: 1;
      border: 1px solid #000;
}
.table-list ul p{
        width: 100%;
   text-align: center;
}
</style>


