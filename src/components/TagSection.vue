<template>
    <div v-if="user.tags" class="container my-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Network ~</span></p> 
        <div class="d-flex flex-wrap">
            <button v-for="word in displayedWords" :key="word" class="btn btn-light border m-1">
                {{ word }}
            </button>
            <span v-if="!showAll" @click="showMore" class="btn btn-outline-dark m-1">More</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            initialDisplayCount: 5,
            showAll: false
        }
    },
    computed: {
        displayedWords() {
            return this.showAll ? this.user.tags : this.user.tags.slice(0, this.initialDisplayCount)
        }
    },
    methods: {
        showMore() {
            this.showAll = true
        }
    }
}
</script>

<style scoped> 
</style>