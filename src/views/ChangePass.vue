<template>
    <div class="wrapper">
        <div class="change_item">
            <form>
                <input type="password" v-model="first_pass" minlength="6" placeholder="Enter new password">
                <input type="password" v-model="second_pass" minlength="6" placeholder="Repeat password">
                <button type="button" @click="changePass()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            first_pass: null,
            second_pass: null
        }
    },
    methods:{
        changePass(){
            if(this.first_pass != this.second_pass){
                alert("Passwords aren't similar");
            }else{
                const res = axios.put('http://127.0.0.1:5000/api/user/changepas', {password: this.first_pass},{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}});
                this.$router.push('/')
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        width: 100vw
        height: 100vh
        background-color: #7e8c73
        display: flex
        align-items: center
        justify-content: center
        .change_item
            width: 40vw
            height: 50vh
            background-color: grey
            border-radius: 20px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            form
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                input
                    width: 20vw
                    height: 5vh
                    margin-top: 6vh
                    font-size: 2.5vh
                button
                    width: 10vw
                    height: 4vh
                    font-size: 2vh
                    margin-top: 3vh
                    margin-left: 15vw
                    border-radius: 10px
</style>