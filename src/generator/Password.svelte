<script lang="ts">
	export let generatedPassword: string

	const handleCopy = () => {
		navigator.clipboard.writeText(generatedPassword)
	}
</script>

<div class="bg-accent h-12 p-3 flex items-center justify-between rounded-sm">
	<p>{generatedPassword}</p>
	<button on:click={handleCopy}>
		<img src="/copy.svg" alt="" class="h-8" />
	</button>
</div>
