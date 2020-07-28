<template>
	<div class="about">
		<div class="box1">
			<div class="firstMenu" v-for="(item,index) in datainfo" :key="item.id" @click="menuIndex = index">{{item.name}}
				<template v-if="index == menuIndex">
					<div v-for="(val) in item.list" :key="val.id">{{val.name}}</div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			datainfo: [
				{
					'id': 1,
					'name': '一级菜单1',
					'filters': [],
					'list': [
						{
							'id': 100,
							'name': '二级菜单1',
							'filters': []
						}
					]
				},
				{
					'id': 2,
					'name': '一级菜单2',
					'list': [
						{
							'id': 200,
							'name': '二级菜单2',
							'filters': []
						},
						{
							'id': 201,
							'name': '二级菜单3',
							'filters': []
						}
					]
				}
			],
			menuIndex: 0
		}
	},
	methods: {
		getData () {
			axios.get('/api/users').then(res => {
				console.log(res.data, '请求数据3333')
			})
		}
	},
	created () {
		this.getData()
	},
}
</script>
<style lang="scss">
.box1 {
	overflow: hidden;
	.firstMenu {
		float: left;
	}
}
.box2{
	.secondMenu{
		overflow: hidden;
		div{
			float: left;
		}
	}
}
</style>