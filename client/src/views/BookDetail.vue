<template>
    <div>
       
        <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
        />
          <div class="book-detail-pic"><img src="../../public/img/pic3.jpg" alt /></div>
        <van-cell-group>
            <van-cell title="图书名称" value="不念过去 不畏将来" />
            <van-cell title="出版社" value="天津人民出版社" />
            <van-cell title="ISBN" value="9787201101903" />
            <van-cell title="商品编码" value="22604446043" />
            <van-cell title="包装" value="平装" />
            <van-cell title="开本" value="16开" />
            <van-cell title="出版时间" value="2016-05-01" />
            <van-cell title="字数" value="180000" />
           
        </van-cell-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "你好,kouyapeng"
        };
    },
    mounted() {},
    methods: {
        onClickLeft() {
            this.$router.push({ name: "bookList" });
        }
    }
};
</script>
<style>
.book-detail-pic{
    height: 200px;
    text-align: center;
}
.book-detail-pic img{
    height: 100%;
}
</style>


