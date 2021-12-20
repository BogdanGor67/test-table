<template>
	<div>
		<div class="container">
			<div class="row">
				<table class="table">
	        <thead>
	          <tr>
	            <th class="text-center" scope="col">
	            	id
	            </th>
	            <th class="text-center" scope="col">
	            	title
	            </th>
	            <th class="text-center" scope="col">
	            	content
	            </th>
	            <th class="text-center" scope="col">
	            	controls
	            </th>
	          </tr>
	        </thead>
	        <transition-group tag="tbody" name="list">
	          <tr v-for="(item, i) in info" :key="item.id">
	            <td>
	              {{item.id}}
	            </td>
	            <td>
	              {{item.title}}
	            </td>
	            <td>
	              <span v-show="!item.allowChangeContent">{{item.body}}</span>
	              <input class="form-input" v-show="item.allowChangeContent"
	              v-model="item.body" @change="changeContentEnd(i, item.body, false)" type="text" placeholder="new content...">
	            </td>
	            <td class="d-flex justify-content-between">
	            	<button @click="removePost(i)" class="btn btn-danger btn-sm mr-1">
	            		X
	            	</button>
	            	<button @click="changeContent(i, true)" 
	            	class="btn btn-info btn-sm">
	            		<img class="pen-img" src="../../public/pencil.png" 
	            		alt="pencil">
	            	</button>
	            </td>
	          </tr>
	        </transition-group>
	      </table>
			</div>
		</div>
	</div>
</template>

<script>

	import {mapActions} from 'vuex';

	export default {
		name: 'VTable',
		props: {
			info: {
				type: Array,
				required: true
			}
		},
		methods: {
			...mapActions(['removePost', 'allowChangeContent', 
				'resetContent', 'changeText']),
			changeContent(index, bollean) {
				this.resetContent(index);
				this.allowChangeContent({index, bollean});
			},
			changeContentEnd(index, newText, bollean) {
				this.changeText({index, newText});
				this.allowChangeContent({index, bollean});
			}
		}
	};
</script>

<style scoped>

	td {
		position: relative;
	}
	
	.form-input {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 10px 15px;
		top: 0;
		left: 0;
		border: none;
	}

	.pen-img {
		width: 15px;
		height: 15px;
	}

	.form-input:focus {
		outline: none;
	}

	.list-enter-active, .list-leave-active {
	  transition: all 0.5s;
	}

	.list-enter, .list-leave-to  {
	  opacity: 0;
	  transform: translateX(30px);
	}

</style>