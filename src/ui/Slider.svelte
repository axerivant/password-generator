<script lang="ts">
	export let label: string
	export let min: string
	export let max: string
	export let step: string = '1'
	export let value: string = min
</script>

<div class="flex flex-col gap-3">
	<div class="flex justify-between text-accent">
		<label for="">{label}</label>
		<div>{value}</div>
	</div>
	<input class="slider" type="range" {step} {min} {max} bind:value />
</div>

<style>
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 5px;
		border-radius: 5px;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
		@apply bg-dim;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		cursor: pointer;
		@apply bg-accent;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}
</style>
