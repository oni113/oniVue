<template lang="html">
    <div class="">
        <GoodsInput v-on:addGoods="addGoods"></GoodsInput>
        <GoodsList v-bind:propsdata="goodsList" @removeGoods="removeGoods"></GoodsList>
    </div>
</template>

<script>
import GoodsInput from './GoodsInput.vue'
import GoodsList from './GoodsList.vue'

export default {
    props : ['propsdata'],
    data () {
        return {
            goodsList : []
        }
    },
    created() {
        this.getGoodsList();
    },
    methods : {
        getGoodsList() {
            const listURI = '/api/goods';
            this.$http.get(listURI, {}).then((result) => {
                if (result.data.results) {
                    this.goodsList = result.data.results;
                }
            });
        },
        addGoods(goods) {
            console.log('call addGoods in App');
            console.log(goods);
            const saveURI = '/api/goods';
            this.$http.post(saveURI, goods).then((result) => {
                console.log(result);
            });
            this.getGoodsList();
        },
        removeGoods(goods, index) {
            console.log('call removeGoods in App');
            const deleteURI = '/api/goods?id=' + goods.id;
            this.$http.delete(deleteURI, {}).then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            });
            this.getGoodsList();
        }
    },
    components : {
        'GoodsInput' : GoodsInput,
        'GoodsList' : GoodsList
    }
}
</script>

<style>
body {
    text-align : center;
    background-color : #F6F6F8
}
input {
    border-style : groove;
    width : 200px;
}
button {
    border-style : groove;
}
.shadow {
    box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
