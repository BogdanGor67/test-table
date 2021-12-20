<template>
	<transition name="modal">
		<div class="custom-modal text-white p-2 border border-secondary bg-info rounded">
			<h4 class="modal-title ml-2">
				Create new post
				<transition name="fade">
					<span v-show="showWarning" class="text-danger">
						This form is empty!
					</span>
				</transition>
			</h4>
			<div class="modal-body">
				<label for="title" class="d-flex flex-column mb-2">
					<span class="mb-2">Title:</span>
					<input class="form-control" v-model="newPost.title" 
						id="title" type="text">
				</label>
				<label for="content" class="d-flex flex-column mb-2">
					<span class="mb-2">Content:</span>
					<input class="form-control" v-model="newPost.content" 
						id="content" type="text">
				</label>
			</div>
			<div class="modal-footer">
				<button @click="addNewPost" type="button" class="btn btn-success">
					Add new post
				</button>
				<button @click="closeModal" type="button" class="btn btn-danger">
					Close
				</button>
			</div>
		</div>
	</transition>	
</template>

<script>

	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'VModal',
		data() {
			return {
				newPost: {
					title: '',
					content: ''
				},
				showWarning: false
			}
		},
		computed: {
			...mapGetters(['infoLength']),
			readyToAdd() {
				return Object.values(this.newPost).every(item => {
					return item !== '';
				})
			}
		},
		methods: {
			...mapActions(['addRow']),
			addNewPost() {
				if (this.readyToAdd) {
					let row = {
						allowChangeContent: false,
						body: this.newPost.content,
						id:  this.infoLength + 1,
						title: this.newPost.title,
						userId: 3
					};
					this.addRow(row);
					this.newPost.content = '';
					this.newPost.title = '';
					this.closeModal();
					this.showWarning = false;
				} else {
					this.showWarning = true;
				}
			},
			closeModal() {
				this.$emit('closeModal');
				this.showWarning = false;
			}
		}
	};

</script>

<style scoped>
	.custom-modal {
		width: calc(100% - 30px);
		max-width: 750px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.fade-enter-active {
		animation: fade 0.5s;
	}

	.fade-leave-active {
		animation: fade 0.5s reverse;
	}

	.modal-enter-active {
		animation: modalAnimation 0.8s;
	}

	.modal-leave-active {
		animation: modalAnimation 0.8s reverse;
	}

	@keyframes modalAnimation {
		0% {
			top: -100%;
		}
		100% {
			top: 50%;
		}
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}


</style>