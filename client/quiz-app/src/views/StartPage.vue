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
        <div class="flex flex-col justify-center rounded-xl mt-20 bg-dark-green shadow-lg ml-1/5 mr-1/5 p-5">
            <p class=" justify-center font-bold">Pass quiz or create a new one</p>
            <div class="flex flex-row justify-center space-x-6">
                <CommonButton>Sign Up</CommonButton> 
                <CommonButton>Sign In</CommonButton>
            </div>
        </div>
    </div>
</template>