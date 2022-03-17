<template>
	<div class="wrapper">
		<div class="content_wrapper">
			<div class="support_subjects">
				Support Subjects
				<div class="logout" @click="Logout">
					Logout
				</div>
				<div class="profile" @click="Profile">
					Profile
				</div>
			</div>
			<Ticket_Item class="ticket_item"
			v-for="item in ticket" 
			:key="item.id" 
			:ItemData = "item" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Ticket_Item from '@/components/Ticket_Item.vue'
export default {
	data() {
    return {
      ticket: []
    };
	},
	components:{
	Ticket_Item
},
methods: {
	Profile(){
		this.$router.push('/profile')
	},
	Logout(){
		const res = axios.delete('http://127.0.0.1:5000/api/logout',{headers : {"Authorization": "Bearer " + window.localStorage.getItem('jwt')}});
		window.localStorage.removeItem('jwt');
		this.$router.push('/')
	}
},
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/gettickets/')
      .then(response => (this.ticket = response.data));
  }
}
</script>

<style lang="sass" scoped>
	.wrapper
		width: 100vw
		height: 86vh
		display: flex
		align-items: center
		justify-content: center
		.content_wrapper
			width: 80%
			height: 100%
			.support_subjects
				margin-top: 3vh
				font-size: 5vh
				margin-left: 5vh
			.profile
				width: 10vw
				height: 5vh
				line-height: 1.7
				float: right
				background-color: black
				color: white
				text-align: center
				font-size: 3vh
				cursor: pointer
			.logout
				width: 10vw
				height: 5vh
				line-height: 1.7
				margin-left: 3vw
				background-color: black
				color: white
				text-align: center
				float: right
				font-size: 3vh
				cursor: pointer
			.ticket_item
				margin-top: 2vh
				font-size: 4vh
</style>
