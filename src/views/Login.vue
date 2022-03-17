<template>
	<div class="wrapper">
		<div class="content_wrapper">
			<h1>Login</h1>
			<form >
        <input type="text" v-model="email" class="inputs" placeholder="Enter your email" required>
        <input type="password" v-model="password" class="inputs" placeholder="Enter your password" required>
        <button type="button" class="send" @click="LoginUser">Login</button>

      </form>
			<router-link :to='{ path: `/register` }' class="register">Registration</router-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			email: null,
			password: null,
			results:[]
		};
	},computed: {
    jwt () {
      return store.state.jwt
    }
  },
	methods:{
		async LoginUser(){
			const response = await axios.post("http://127.0.0.1:5000/api/login", {
				email: this.email,
				password: this.password,
			})
			.catch(function (error) {
			if (error.response) {
				alert('bad email or password');
			}});
			this.$store.commit("setJwt", response.data.accessToken)
			window.localStorage.setItem('jwt',  response.data.accessToken)
			const status = JSON.parse(response.status);
			alert(response.status);
			console.log(status);
			if (status === 200) {
				this.$router.push('/subjects');
			} else if (status === 401) {
				alert("Bad email or password");
			}else {
				alert("Bad")
			}
		}
	},

}
</script>

<style lang="sass" scoped>
	header
		display: none !important
	.wrapper
		width: 100vw
		height: 100vh
		display: flex
		align-items: center
		justify-content: center
		background-color: #7e8c73
		.content_wrapper
			width: 30vw
			height: 60vh
			background-color: #adbf9f
			display: flex
			flex-direction: column
			align-items: center
			form
				display: flex
				flex-direction: column
				width: 100%
				height: 70%
				align-items: center
				justify-content: center
				.inputs
					width: 60%
					font-size: 2vh
					height: 3.5vh
					margin-top: 2vh
				.send
					margin-top: 2vh
					font-size: 2vh
					cursor: pointer
					margin-left: 50%
			.register
				text-decoration: none
				font-size: 2vh
				color: white

</style>
