<template>
	<div class="error-component">
		<p class="text-center d-flex flex-column">
			Page didn't loaded. Try again.
			<button @click="setInfo" 
			class="btn btn-large btn-info text-white mt-3">
				Try again
			</button>
		</p>
	</div>
</template>

<script>

	import { mapActions } from 'vuex';

	export default {
		name: 'Err',
		methods: {
			...mapActions(['setInfo']),
		}
	};
</script> 

<style scoped>
	.error-component {
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>