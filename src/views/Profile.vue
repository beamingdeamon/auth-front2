<template>
    <div class="wrapper">
        <div class="modalChanges" id="modal" @click="isModal()">
            <div class="changeBlock" v-if="this.succes">
                Changes was suplied!!!
            </div>
        </div>
        <div v-if="this.user.user" class="userInfoBlock">
            <div class="back" @click="back">-Subjects-</div>
            <h1 class="header">Profile</h1>
            <h2 class="info">Your email: <br><span>{{this.user.user.email}}</span></h2>
            <h2 class="info">Your firstname: <br><span>{{this.user.first_name}}</span></h2>
            <h2 class="info">Your lastname: <br><span>{{this.user.last_name}}</span></h2>
            <h2 class="info">Your role: <br><span>{{this.user.role.role}}</span></h2>
        </div>
        <div class="changePassword">
            <h1 class="header">Change Your Info</h1>
            <form>
                <div class="change_item">
                    <h3>Change email</h3>
                    <input type="mail" v-model="email" placeholder="Enter new email">
                </div>
                <button @click="changeEmail">Submit</button>
            </form>
            <form>
                <div class="change_item">
                    <h3>Change firstname</h3>
                    <input type="text" v-model="first_name" minlength="6" placeholder="Enter new firstname">
                </div>
                <button @click="changeFirstName">Submit</button>
            </form>
            <form>
                <div class="change_item">
                    <h3>Change secondname</h3>
                    <input type="text" v-model="last_name" minlength="6" placeholder="Enter new lastname">
                </div>
                <button @click="changeLastName">Submit</button>
            </form>
            
        </div>
    </div>
</template>

        
        
// {{this.user['user']['email']}}
// {{this.user['first_name']}}
// {{this.user['second_name']}}
// {{this.user.role.role}}
<script>
import $ from "jquery"
import axios from 'axios'
export default {
    data:()=>{
        return{
            email: null,
            first_name: null,
            last_name: null,
            success: null,
            user: []
        }
    },
  methods: {
	back(){
        
		this.$router.push('/subjects')
    },
    isModal(){
        document.getElementById("modal").style.visibility = "hidden"
    },
    changeEmail(){
        const res = axios.put('http://127.0.0.1:5000/api/user/edit', { email: this.email},{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}});
        if(res.status === 200){
            
        }else{
            this.success = res.data;
            document.getElementById("modal").style.color = "red !important";
        }
    },
    changeFirstName(){
        const res = axios.put('http://127.0.0.1:5000/api/user/edit', {first_name: this.first_name },{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}});
        if(res.status === 200){
        }else{
            this.success = res.data;
            document.getElementById("modal").style.color = "red !important";
        }
    },
    changeLastName(){
        const res = axios.put('http://127.0.0.1:5000/api/user/edit', {last_name: this.last_name },{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}});
        if(res.statusCode === 200){
        }else{
            this.success = res.data;
            document.getElementById("modal").style.color = "red !important";
        }
    }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:5000/api/user',{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}})
        .then(response => (this.user = response.data))
        .then();
    }
}
</script>

<style lang="sass" scoped>
    .wrapper
        background-color: #7e8c73
        width: 100vw
        height: 100vh
        display: flex
        align-items: center
        justify-content: space-around
        color: white
        font-family: 'Montserrat', sans-serif
        .modalChanges
            visibility: hidden
            position: absolute
            width: 100vw
            height: 100vh
            background: rgba(255, 255, 255, 0.1)
            backdrop-filter: blur(10px)
            display: flex
            align-items: center
            justify-content: center
            .changeBlock
                background-color: grey
                width: 30vw
                height: 50vh
                display: flex
                align-items: center
                justify-content: center
                font-size: 4vh
        .userInfoBlock
            width: 30vw
            height: 80vh
            background-color: grey
            .header
                font-size: 6vh
                margin-left: 6vw
            .back
                background-color: black
                color: white
                width: 8vw
                height: 5vh
                font-size: 2.5vh
                text-align: center
                line-height: 2
                cursor: pointer
            .info
                margin-top: 8vh
                font-size: 3vh
                margin-left: 3vw
                span
                    color: red
        .changePassword
            width: 40vw
            height: 80vh
            background-color: grey
            .header
                font-size: 6vh
                margin-left: 6vw
            .change_item
                margin-left: 5vw
                font-size: 3vh
                input
                    width: 70%
                    height: 3vh
            button
                width: 10vw
                height: 5vh
                font-size: 2.5vh
                float: right
                margin-top: 3vh
</style>