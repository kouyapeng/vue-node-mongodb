<template>
    <div>
        <div>
            <van-nav-bar
                :title="title"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
        <van-row>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic1.jpg" alt />
                    <p>javascript</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic2.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic3.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic4.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic1.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic3.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic4.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
            <van-col span="8">
                <div class="book-list">
                    <img src="../../public/img/pic2.jpg" alt />
                    <p>图书1</p>
                </div>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'你好,kouyapeng'
        };
    },
    mounted() {},
    methods: {
         onClickLeft(){
             this.$router.push({name:'login'})
         }
    }
};
</script>
<style>
.book-list {
    border: 1px solid #ccc;
    margin: 10px 5px;
}
.book-list img {
    width: 100%;
}
.book-list p {
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    text-align: center;
}
</style>


