<template> 
    <div v-if="user.banner" class="w-100">
        <img :src="user.banner" alt="banner" style="width: 100%;max-height: 500px; object-fit: fill;">
    </div>
    <div v-else class="w-100">
        <img src="/img/bg.svg" alt="banner" style="width: 100%;max-height: 500px; object-fit: fill;">
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style scoped>
 
</style>