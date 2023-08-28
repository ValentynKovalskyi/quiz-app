<script>
    export default {
        props: {
            buttonText: String
        }
    }
</script>
<template>
     <button class=" bg-green border-2 shadow-semi-dark shadow-xl transition-all text-white rounded-lg font-sans pr-3 pl-3 pt-1 pb-1
        hover:bg-semi-dark hover:transition-all hover:shadow-none font-bold">
            <slot>Hello</slot>
        </button>
</template>