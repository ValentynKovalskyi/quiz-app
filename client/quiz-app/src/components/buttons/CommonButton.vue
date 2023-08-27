<script>
    export default {
        props: {
            buttonText: String
        }
    }
</script>
<template>
     <button class=" bg-semi-dark border-2 border-dark text-white rounded-lg font-sans pr-3 pl-3 pt-1 pb-1 transition-colors
        hover:bg-green hover:text-dark hover:transition-colors font-bold">
            <slot>Hello</slot>
        </button>
</template>