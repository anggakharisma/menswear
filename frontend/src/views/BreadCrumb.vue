<template>
    <div class="bread-crumb">
        <bread-crumb-item v-for="(item, index) in $route.path.split('/')" :key="index" :breadItem="item"></bread-crumb-item>
    </div>
</template>


<script>
import BreadCrumbItem from './BreadCrumbItem';

export default {
    name: 'BreadCrumb',
    components: {
        'bread-crumb-item' : BreadCrumbItem
    },
    mounted() {
        console.log(this.$route.path.split('/'))
    }
}
</script>
