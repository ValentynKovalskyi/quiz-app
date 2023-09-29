<template>
    <div class="bg-gradient-to-r to-dark-blue from-light-blue flex justify-center items-center h-screen">
        <NavBar></NavBar>
        <div class="flex flex-col justify-center items-center bg-dark-green w-1/4 shadow-xl shadow-dark rounded-xl">
            <h2 class="font-bold text-white text-center text-xl p-4">Sign Up</h2>
            <input type="text" v-model="username" placeholder="Username" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/10">
            <input type="email" v-model="email" placeholder="E-mail" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/10">
            <div class="flex flex-row content-stretch justify-stretch w-1/1.5 mb-1/40">
                <input ref="passwordInput" v-bind:type="isPasswordShown ? 'password': 'text'" v-model="password" placeholder="Password" class="rounded-l-md shadow-inner shadow-dark text-sm p-1 w-9/10">
                <div @click="isPasswordShown = !isPasswordShown" class="flex justify-center content-center hover:cursor-pointer hover:bg-dark-blue bg-light-blue rounded-r-md shadow-inner shadow-dark px-1 w-1/10">
                    <img v-if="isPasswordShown" src="../assets/eye-fill.svg">
                    <img v-else src="../assets/eye-slash-fill.svg">
                </div>
            </div>
            <div ref="passwordStrengthDiv" class="max-h-1/20 flex-col w-1/1.5 flex mb-1/40 opacity-0">
                <span class = "text-xs text-white font-medium mb-1/40"> {{ passwordStrengthMessage }}</span>
                <div class="w-full h-1 bg-white rounded-2xl">
                    <div ref="progress" class="h-full bg-light-blue rounded-2xl transition-all"></div>
                </div>
            </div>
            <input type="password" v-model="passwordConfirmation" placeholder="Confirm Password" class="rounded-md shadow-inner shadow-dark text-sm w-1/1.5 p-1 mb-1/10">
            <CommonButton class="w-1/3 self-center text-sm mb-1/10">Sign Up</CommonButton>
        </div>
    </div>
</template>

<script>
import CommonButton from '../components/buttons/CommonButton.vue';
import NavBar from '../components/pageblocks/NavBar.vue';
import * as Password from '../utils/passwordStrength.js';

    export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passswordConfirmation: '',
            passwordStrengthMessage: 'Default',
            passwordStrength: 0,
            isPasswordInputStarted: false,
            isPasswordShown: false,
        };
    },
    components: { CommonButton, NavBar },
    methods: {
        submitRegistration() {
            
        },
        updateProgressBar(value) {
            this.$refs.progress.style.width = `${value}%`;
            this.$refs.progress.style.backgroundColor = 
            value < 20 ? 'red'
            : value < 40 ? 'orange'
            : value < 60 ? 'yellow'
            : value < 80 ? 'yellowgreen'
            : value < 100 ? 'darkgreen'
            : value < 40 ? 'aqua': 'black';
        }
    },
    watch: {
        password() {
            if (!this.isPasswordInputStarted) {
                this.isPasswordInputStarted = true;
                this.$refs.passwordStrengthDiv.style.opacity = "1";
            }
            if (this.password == '') {
                this.$refs.passwordStrengthDiv.style.opacity = "0";
                this.isPasswordInputStarted = false;
            }
            let passwordStrength = Password.getPasswordStrength(this.password);
            this.updateProgressBar( passwordStrength );
            this.passwordStrengthMessage = Password.passwordLevels.get(passwordStrength);
        }
    }
}
</script>
