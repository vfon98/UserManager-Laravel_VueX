<template>
	<div class="mt-2">
		<h1>Create User</h1>
		<form @submit.prevent='add()'>
			<fieldset class="form-group">
				<label>Name</label>
				<input type="text" class="form-control" v-model='name' autofocus>
			</fieldset>
			<fieldset class="form-group">
				<label>Email</label>
				<input type="email" class="form-control" v-model='email'>
			</fieldset>
			<fieldset class="form-group">
				<label>Password</label>
				<input type="password" class="form-control" v-model='password'>
			</fieldset>
			<button type="submit" class="btn btn-success">Save <i class="fa fa-check-circle"></i></button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'CreateUser',
		data () {
			return {
				name: null,
				email: null,
				password: null
			}
		},
		methods: {
			add() {
				this.$store.dispatch('addUser', {
					name: this.name,
					email: this.email,
					password: this.password
				});
				this.$router.push({ name: 'users.index' });
			}
		}
	}
</script>

<style lang="css" scoped>
</style>