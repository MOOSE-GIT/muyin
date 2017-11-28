import Vue from 'vue'
import Router from 'vue-router'
import Music from '../components/main/music-m'
import Mine from '../components/main/mine'
import Dynamic from '../components/main/dynamic'

//e
import Ksong from '../components/e-kge/kge'
import Hotsong from '../components/HotSong/hotsong'
import Ydy from '../components/ydy/yindao'
import Login from '../components/login/login'
import Res from '../components/login/res'
//推荐热歌party

import ServerMain from '../components/main-2/server-main'
import Rserver from '../components/r-server/r-server-title'

//MUSIC 2
import Recommend from '../components/main-2/recommend-main'
import RecRadio from '../components/main-2/radio-main'
import List from '../components/main-2/list'
import Songlist from '../components/main-2/songlist/songlist'
import SingerDetail from '../components/main-2/songlist/singer-detail/singer-detail'



Vue.use(Router)

export default new Router({
	routes: [
	// {
	// 	path: "/",
	// 	redirect: '/music/recommend' 
	// },
	{
		path: '/',
		name: 'ydy',
		component: Ydy,
	},
	{
		path: "/music",
		redirect: '/music/recommend' 
	},
	{
		path: '/music',
		name: 'Music',
		component: Music,
		children: [
			{
				path: 'recommend',
				name: 'Recommend',
				component: Recommend
				
				
			},
			{
				path: 'radio',
				name: 'RecRadio',
				component: RecRadio
			
			},
			{
				path: 'list',
				name: 'List',
				component: List
			
			},
			{
				path: 'songlist',
				name: 'Songlist',
				component: Songlist,
				children:[
					{
						path:':id',
						component:SingerDetail
					}
				]
			}
			
		]
	
	},
	{
		path: '/mine',
		name: 'Mine',
		component: Mine
	
	},
	{
		path: '/ksong',
		name: 'ksong',
		component:Ksong
	
	},
	{
		path: '/hotsong',
		name: 'hotsong',
		component:Hotsong
	
	},
	{
		path: '/dynamic',
		name: 'dynamic',
		component: Dynamic
	
	},
	
	{
	path: '/server',
	name: 'Server',
	component: ServerMain
			
	},
	
	{
	path: '/rserver',
	name: 'Rserver',
	component: Rserver
			
	},
	{
	path: '/login',
	name: 'login',
	component: Login
			
	},
	{
	path: '/res',
	name: 'res',
	component: Res
			
	}
//	{
//	path: '/party',
//	name: 'Party',
//	component: Party
//			
//	}
	
	]
})