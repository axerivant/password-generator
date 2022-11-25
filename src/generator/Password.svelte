<script lang="ts">
	export let generatedPassword: string
</script>

<div class="bg-accent h-12 p-3 flex items-center justify-between rounded-sm">
	<p>{generatedPassword}</p>
	<button>
		<img src="/copy.svg" alt="" class="h-8" />
	</button>
</div>
