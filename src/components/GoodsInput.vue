<template lang="html">
    <div class="inputBox shadow">
        <input type="text" v-model="newGoods.name">
        <input type="text" v-model="newGoods.category">
        <input type="text" v-model="newGoods.price">
        <input type="text" v-model="newGoods.description">
        <span class="addContainer" v-on:click="addGoods">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                {{message}}
                <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    //props : ['propsdata'],
    data () {
        return {
            newGoods : {
                name : '',
                category : '',
                price : '',
                description : ''
            },
            showModal : false,
            message : ''
        }
    },
    methods : {
        addGoods() {
            if (this.validateInput()) {
                //const value = this.newGoods;
                this.$emit('addGoods', this.newGoods);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newGoods = {
                name : '',
                category : '',
                price : '',
                description : ''
            };
        },
        validateInput() {
            if (this.newGoods.name == null || this.newGoods.name == '') {
                this.message = '상품명을 입력하세요.';
                return false;
            } else if (this.newGoods.category == null || this.newGoods.category == '') {
                this.message = '카테고리를 입력하세요.';
                return false;
            } else if (this.newGoods.price == null || this.newGoods.price == '' || !this.isNumber(this.newGoods.price)) {
                this.message = '가격을 입력하세요.(숫자)';
                return false;
            } else if (this.newGoods.description == null || this.newGoods.description == '') {
                this.message = '상품설명을 입력하세요.';
                return false;
            }
            return true;
        },
        isNumber(s) {
            s += ''; // 문자열로 변환
            s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
            if (s == '' || isNaN(s)) {
                return false;
            }
            return true;
        }
    },
    components : {
        Modal : Modal
    }
}
</script>

<style lang="css" scoped>
    input:focus {
        outline : none;
    }
    .inputBox {
        background : white;
        height : 50px;
        line-height : 50px;
        border-radius : 5px;
    }
    .inputBox input {
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>
