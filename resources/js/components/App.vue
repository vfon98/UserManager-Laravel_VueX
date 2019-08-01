<template>
	<div class="container">
		<div class="row">
			<ul class="nav nav-tabs">
				<a class="navbar-brand" href="#!">Laravel Vuex</a>
				<li class="nav-item">
					<router-link 
						:to="{ name: 'users.index' }"
						:class="['nav-link', { active: $route.name === 'users.index' }]"
					>Home</router-link>
				</li>
				<li class="nav-item">
					<router-link 
						:to="{ name: 'users.create' }" 
						:class="['nav-link', { active: $route.name === 'users.create' }]"
					>Create User</router-link>
				</li>
				<li class="nav-item">
					<router-link 
						to="/users/0/edit" 
						:class="['nav-link', { active: $route.name === 'users.edit' }]">Edit User</router-link>
				</li>
				<li class="nav-item">
					<router-link to="#" class="nav-link">About</router-link>
				</li>
			</ul>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {

		name: 'App',

		data () {
			return {

			}
		}
	}
</script>

<style lang="css" scoped>
</style>