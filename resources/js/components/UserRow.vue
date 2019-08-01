<template>
	<tr>
		<td>{{ user.id }}</td>
		<td>{{ user.name }}</td>
		<td>{{ user.email }}</td>
		<td>
			<router-link 
				:to="{ name: 'users.edit', params: { id: user.id } }" 
				class="btn btn-primary">
					<i class="fa fa-edit"></i> Edit
				</router-link>
			<button class="btn btn-danger" @click='deleteUser()'>
				<i class="fa fa-trash"></i> Delete
			</button>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'UserRow',
		props: ['user'],
		methods: {
			deleteUser() {
				this.$store.dispatch('deleteUser', this.user);
				this.$router.push({ name: 'users.index' });
			}
		}
	}
</script>

<style lang="css" scoped>
</style>