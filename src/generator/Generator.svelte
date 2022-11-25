<script lang="ts">
	import { Container, Group, Button, Slider, Option } from '@/ui'
	import generate from './generator'
	import { Password } from '.'
	import { onMount } from 'svelte'

	let generatedPassword = 'fef9e3f233efe9wjrr43fdfcfd3fdr3'

	// parameters
	let length: string = '26'
	let strength: string = '0.5'
	let enableUppercase: boolean = true
	let enableNumbers: boolean = true
	let enableSymbols: boolean = false

	const handleGenerate = () => {
		const parameters = {
			length,
			strength,
			enableUppercase,
			enableNumbers,
			enableSymbols
		}
		generatedPassword = generate(parameters)
	}

	// generate initial password with default parameters
	onMount(handleGenerate)
</script>

<Container>
	<h1 class="text-xl text-accent">password generator</h1>
	<Group>
		<Password {generatedPassword} />
		<Button on:click={handleGenerate} label="generate" />
	</Group>
	<Group>
		<Slider bind:value={length} label="length" min="12" max="64" />
		<Slider bind:value={strength} label="strength" min="0.1" max="1" step="0.1" />
	</Group>
	<Group>
		<Option bind:isEnabled={enableUppercase} name="uppercase" />
		<Option bind:isEnabled={enableNumbers} name="numbers" />
		<Option bind:isEnabled={enableSymbols} name="symbols" />
	</Group>
</Container>
