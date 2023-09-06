<script>
import CommonButton from '../components/buttons/CommonButton.vue';
import NavBar from '../components/pageblocks/NavBar.vue';

    export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passswordConfirmation: '',
        };
    },
    components: { CommonButton, NavBar },
    methods: {
        submitRegistration() {
            
        },
    }
}
</script>
<template>
    <div class="bg-gradient-to-r to-dark-blue from-light-blue flex justify-center items-center h-screen">
        <NavBar></NavBar>
        <div class="flex flex-col justify-center items-center bg-dark-green w-1/4 shadow-xl shadow-dark rounded-xl">
            <h2 class="font-bold text-white text-center text-xl p-4">Sign Up</h2>
            <input type="text" v-model="username" placeholder="Username" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/20">
            <input type="email" v-model="email" placeholder="E-mail" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/20">
            <input type="password" v-model="password" placeholder="Password" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/20">
            <input type="password" v-model="passwordConfirmation" placeholder="Confirm Password" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/20">
            <CommonButton class="w-1/3 self-center text-sm mb-1/10">Sign Up</CommonButton>
        </div>
    </div>
</template>