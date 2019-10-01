<template lang="pug">
.ui.center.aligned.text.container
	.hello
		img(src='../assets/alchemy-sulphuric.svg', width="100px;")
		div(style='margin-top: 25px')
			a.ui.huge.secondary.button.dignity(href="/" exact="")
				i.material-icons(size="huge" style="margin-right: 12px") all_inclusive
				| Semes or Memes?
			sui-header.huge.with.dignity Paying Our Back Sin Taxes
			sui-divider-hidden
			sui-divider-hidden

	sui-grid(:columns='3', divided='' verticalAlign="middle")
		sui-grid-row(stretched='')
			sui-grid-column
				sui-segment
					sui-icon(name="chess" size="massive")

			sui-grid-column

				sui-segment
					sui-icon(name="chess" size="huge")

				sui-segment
					sui-icon(name="chess" size="huge")

			sui-grid-column
				sui-segment
					sui-icon(name="chess" size="huge")
				sui-segment
					sui-icon(name="chess" size="huge")
				sui-segment
					sui-icon(name="chess" size="huge")
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Adeus, Mundo Imundo'
		}
	}
}
</script>

<style>
	.hello {
		margin-top: 25vh;
	}
	sui-header {
		@extend .dignity;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
