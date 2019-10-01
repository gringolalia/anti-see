<template lang="pug">
.ui.center.aligned.text.container
	.hello
		img(src='../assets/hammer-sickle.svg', width="150px;")
		sui-divider-hidden
		p(style="margin-top: 25px")
			a.ui.huge.secondary.button.dignity(href="/")
				i.material-icons(size="huge" style="margin-right: 12px") settings_input_antenna
				| Semiotic Interface
			h1.dignity(is='sui-header' size="massive") Semantic Vue Forty-Two

		h2(is='sui-header', icon='')
			sui-icon(name='waves')
				| Gnarly & Tubular
				sui-header-subheader
					| Wipeout! Wipeout!

			sui-divider-hidden
			sui-divider-hidden

	sui-grid(:columns='3', divided='' verticalAlign="middle")
		sui-grid-row(stretched='')
			sui-grid-column
				sui-segment
					sui-icon(name="chess queen" size="massive")

			sui-grid-column

				sui-segment
					sui-icon(name="chess knight" size="huge")

				sui-segment
					sui-icon(name="chess rook" size="huge")

			sui-grid-column
				sui-segment
					sui-icon(name="chess bishop" size="huge")
				sui-segment
					sui-icon(name="podcast" size="huge")
				sui-segment
					sui-icon(name="building" size="huge")
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
		margin-top: 15vh;
	}
	sui-header {
		@extend .dignity;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
