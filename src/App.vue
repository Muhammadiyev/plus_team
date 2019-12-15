<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
	.score {
		background-color: #fff;
		position: absolute;
		right: 15px;
		top: 80px;
		z-index: 99;
		ul {
			list-style: none;
			margin: 0;
			padding: 15px;
			font-size: 26px;
		}
	}
	.f-wrap {
		flex-wrap: wrap;
	}
	.d-flex {
		display: flex;
	}
	.w-100 {
		width: 100%;
	}
	.flex-1 {
		flex: 1;
	}
	.d-column {
		flex-direction: column;
	}
</style>