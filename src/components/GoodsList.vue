<template lang="html">
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(goods, index) in propsdata" :key="goods.id" class="shadow">
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                <span>{{ goods.name }}</span>
                <span>{{ goods.category }}</span>
                <span>{{ goods.price }}</span>
                <span>{{ goods.description }}</span>
                <span class="removeBtn" type="button" @click="removeGoods(goods, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    props : ['propsdata'],
    methods : {
        removeGoods(goods, index) {
            console.log('call removeGoods in GoodsList');
            this.$emit('removeGoods', goods, index);
            console.log('after call removeGoods in GoodsList');
        }
    }
}
</script>

<style lang="css" scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-move {
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
        width : 100%;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 9.0rem;
        background: white;
        border-radius: 5px;
    }

    li:first-child {
        border-top: 2px solid #6a6a6a;
        border-bottom: 2px solid #6a6a6a;
        padding-left: 150px;
    }

    li:last-child {
        border-bottom: 1px solid #000;
    }

    li span {
        display: inline-block;
        float: right;
        width: 150px;
        text-align: center;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>
