<template>
	<div class="mt-3">
		<h1 class="page-header">User List</h1>
		<router-link :to="{ name: 'users.create' }" class="btn btn-success mb-1">
			<i class="fa fa-plus"></i> Add User
		</router-link>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<user-row v-for="user in users" :user='user' :key='user.id'></user-row>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import UserRow from './UserRow.vue';
	export default {
		name: 'UserList',
		components: { UserRow },
		computed: {
			...mapState(['users'])
		},
		created() {
			this.$store.dispatch('fetch');
		}
	}
</script>

<style lang="css" scoped>
</style>