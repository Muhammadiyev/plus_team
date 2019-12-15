<template>
	<div>
		<div class="footer">
			<div class="win" v-if="$store.state.show_win">
				<div @click="$store.state.show_win = false"><img src="../assets/img/ballot-x.png"></div>
				<div>ПОСТАВКА СЫРЬЯ <span><i class="fas fa-times"></i></span></div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" lang="scss" scoped="">
	.win {
		display: flex;
		div:first-child {
		background-color: #080808;
			padding: 14px;
			width: 55px;
			height: 55px;
			border: solid 1px rgba(255, 255, 255, 0.15);
			border-width: 0 1px 0 0;
			img {
				width: 100%;
			}
		}
		div:last-child {
			background-color: #080808;
			width: 295px;
			text-align: center;
			font-size: 18px;
			color: #fff;
			display: flex;
			align-items: center;
			padding-left: 70px;
			span {
				flex: 1;
				text-align: right;
				padding-right: 20.5px; 
				font-size: 18px;
			}
		}
	}
	.footer {
		width: 100%;
		background-color: #212121;
		height: 55px;
	}
</style>