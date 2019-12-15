<template>
	<div>
		<app-navbar></app-navbar>
		<math-digit-plus></math-digit-plus>

			<button @click="showAlert">Hello world</button>
	</div>
</template>

<script>
    export default {
        methods: {
            showAlert() {
              this.$swal('Hello Vue world!!!');
            },
        },
    };
</script> 