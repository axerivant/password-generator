<script lang="ts">
	export let name: string
	export let isEnabled: boolean = false
</script>

<div class="text-accent flex items-center gap-3">
	<input class="accent-accent" id={name} type="checkbox" bind:checked={isEnabled} />
	<label for={name}>{name}</label>
</div>

<style>
</style>
