<script>
import CommonButton from '../components/buttons/CommonButton.vue'

export default {
    components: {
        CommonButton
    },
}
</script>
<template>
    <div class="flex justify-center flex-col bg-green">
        <div class="flex justify-center mt-40">
            <img src="../assets/logo.png" class="w-1/3">
        </div>
        <div class="flex flex-row justify-center space-x-6 mt-20">
            <CommonButton>Sign Up</CommonButton> 
            <CommonButton>Sign In</CommonButton>
        </div>
    </div>
</template>