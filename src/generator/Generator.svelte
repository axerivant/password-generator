<script lang="ts">
	import { Container, Group, Button, Slider } from '@/ui'
	import Option from '@/ui/Option.svelte'
	import { Password } from '.'

	let generatedPassword = 'cdw@$fef9e3f233efe9wjrr43fdfcfd3fdr3'
</script>

<Container>
	<h1 class="text-xl text-accent">password generator</h1>
	<Group>
		<Password {generatedPassword} />
		<Button label="generate" />
	</Group>
	<Group>
		<Slider label="length" min="12" max="64" />
		<Slider label="strength" min="0" max="1" step="0.01" />
	</Group>
	<Group>
		<Option name="uppercase" />
		<Option name="numbers" />
		<Option name="symbols" />
	</Group>
</Container>
