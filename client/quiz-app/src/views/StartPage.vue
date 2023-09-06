<script>
import CommonButton from '../components/buttons/CommonButton.vue';
import NavBar from '../components/pageblocks/NavBar.vue';
import Footer from '../components/pageblocks/Footer.vue';

export default {
    components: {
        CommonButton, NavBar, Footer,
    },
    methods: {
        onSignUpClick() {
            this.$router.push("/signup");
        },
    }
}
</script>
<template>
    <div class="flex justify-center flex-col">
        <NavBar></NavBar>
        <div class="flex justify-center mt-40">
            <img src="../assets/Quizzer.svg" class="w-1/3">
        </div>
        <div class="flex flex-col justify-center rounded-xl mt-20 bg-dark-green shadow-lg ml-1/5 mr-1/5 p-5 mb-1/10">
            <div>
                <p class="font-bold text-2xl text-center m-10 text-white">Pass quizzes, save results and create a new quizzes with account</p>
            </div>
            <div class="flex flex-row justify-center space-x-10">
                <CommonButton  @click="onSignUpClick">Sign Up</CommonButton> 
                <CommonButton>Sign In</CommonButton>
            </div>
            <div>
                <p class="font-bold text-2xl text-center m-10 text-white"> ... or ...</p>
                <p class="font-bold text-2xl text-center m-10 text-white">Pass any quiz as a guest</p>
            </div>
            <div class="flex justify-center">
                <CommonButton>Find quiz</CommonButton> 
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>