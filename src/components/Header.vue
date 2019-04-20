<template lang="html">
    <div class="">
        <ul class="navigation">
            <li><router-link v-bind:to="{ name: 'goods' }">goods</router-link></li>
            <li><router-link v-bind:to="{ name: 'file' }">file upload</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    h1 {
        color : #2F3B52;
        font-weight : 900;
        margin: 2.5rem 0 1 5rem;
    }
</style>
