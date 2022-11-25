<script lang="ts">
	export let label: string
</script>

<button
	on:click
	class="bg-500 text-accent h-12 flex justify-center items-center rounded-sm w-full hover:brightness-[110%] active:brightness-[120%] transition-all"
>
	{label}
</button>
