import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		users: [],
		user: {}
	},
	mutations: {
		FETCH(state, users) {
			state.users = users;
		},
		FETCH_ONE(state, user) {
			state.user = user;
		}
	},
	actions: {
		fetch(context) {
			axios.get('api/users')
				.then(res => context.commit('FETCH', res.data))
				.catch(err => console.log(err));
		},
		fetchOne(context, id) {
			axios.get(`api/users/${id}/edit`)
				.then(res => context.commit('FETCH_ONE', res.data))
				.catch(err => console.log(err));
		},
		addUser(context, user) {
			console.log("FROM STORE", user);
			axios.post('api/users', user);
		},
		updateUser(context, user) {
			axios.put(`api/users/${user.id}`, user)
				.then(() => context.dispatch('fetch'));
		},
		deleteUser(context, user) {
			console.log("DELETE", user.id);
			axios.delete(`api/users/${user.id}`)
				.then(() => context.dispatch('fetch'))
				.catch(err => console.log(err));
		}
	}
});

export default store;