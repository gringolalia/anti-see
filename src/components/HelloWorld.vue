<template lang="pug">
div
	.ui.center.aligned.text.container(style="margin-top: 125px")
		.hello
			img(src='../assets/biohazard.svg', width="100px;")
			sui-header.dignity(size="huge" style="margin-top: 0px;") Adeus, Mundo Imundo
			sui-header.dignity(size="large") Bom Dia, Meia-Noite
			a.ui.huge.secondary.button.dignity(to="/syntax")
				i.material-icons(size="huge" style="margin-right: 12px") settings_input_antenna
				| Semiotic Interface
			sui-header.medium.dignity A Linguistic Linguiça
			sui-hidden-divider
			sui-hidden-divider
			sui-hidden-divider

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

	.ui.center.aligned.middle.aligned.text.container(style="margin: 25px 25px")
		sui-button.with.dignity(secondary content='Go Modal' icon='chess' size='huge' @click.native='toggle')

		//- Get Modal Layout Right

		sui-modal.with.dignity(size='small' v-model='open')
			sui-modal-header.sui-display-2.with.dignity Ordering an Allen Ginsberger

			sui-modal-content(scrolling image)
				sui-image(wrapped size='small' src='../../static/ginsbergo.jpg' style="filter: grayscale(100%)")
					sui-modal-description
						sui-header Bearded Fiends of the Fifties!
						//- p Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

			sui-modal-actions
				sui-button.with.dignity(secondary size='large' @click.native='toggle')
					| If You Must Then Do
</template>

<script>
export default {
	name: 'ScrollingModalExample',
	data() {
		return { open: false };
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
	},
};
</script>

<style>
	.hello {
		margin-top: 8vh;
	}
	sui-header {
		@extend .dignity;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
