<template>
	<div class="mt-2">
		<h1>Edit User</h1>
		<form @submit.prevent='edit()'>
			<fieldset class="form-group">
				<label>Name</label>
				<input type="text" class="form-control" v-model='user.name' autofocus>
			</fieldset>
			<fieldset class="form-group">
				<label>Email</label>
				<input type="email" class="form-control" v-model='user.email'>
			</fieldset>
			<fieldset class="form-group">
				<label>Password</label>
				<input type="password" class="form-control" v-model='user.password'>
			</fieldset>
			<button type="submit" class="btn btn-success">Save <i class="fa fa-check-circle"></i></button>
		</form>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'EditUser',
		beforeCreate() {
			console.log(this.$store);
			this.$store.dispatch('fetchOne', this.$route.params.id);
		},
		computed: {
			...mapState(['user'])
		},
		methods: {
			edit() {
				this.$store.dispatch('updateUser', this.user);
				this.$router.push({ name: 'users.index' });
			}
		},
	}
</script>

<style lang="css" scoped>
</style>