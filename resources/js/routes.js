import UserList from './components/UserList.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';

const routes = [
	{
		path: '/',
		component: UserList,
		name: 'users.index'
	},
	{
		path: '/users/create',
		component: CreateUser, 
		name: 'users.create'
	},
	{
		path: '/users/:id/edit',
		component: EditUser,
		name: 'users.edit'
	}
];

export default routes;