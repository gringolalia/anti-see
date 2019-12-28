<template lang="pug">
div
	.ui.center.aligned.text.container(style="margin-top: 125px")
		.hello
			img(src='../assets/biohazard.svg', width="100px;")
			sui-header.dignity(size="huge" style="margin-top: 0px;") Adeus, Mundo Imundo
			sui-header.dignity(size="large") Bom Dia, Meia-Noite

			sui-button.with.dignity(primary content='Go Modal' icon='chess' size='huge' @click.native='toggle')
			sui-hidden-divider
			sui-hidden-divider
			sui-hidden-divider
			sui-hidden-divider

		sui-grid(:columns='3' divided verticalAlign="middle" style="margin-top: 54px")
			sui-grid-row(stretched)
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


		//- Get Modal Layout Right

		sui-modal(id="	" size="tiny" v-model='open' animation="fade up")
			sui-modal-header.sui-display-2.with.dignity Ordering an Allen Ginsberger

			sui-modal-content(scrolling image)
				sui-image(wrapped size='small' src='../../static/ginsbergo.jpg' style="filter: grayscale(100%)")
				sui-modal-description
					sui-header.with.dignity Bearded Fiends of the Fifties
					p Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

			sui-modal-actions
				sui-button.with.dignity(secondary size='large' @click.native='toggle')
					| If You Must Then Do


		sui-modal(id="modal2" size="tiny" v-model='open2' animation="fade up")
			sui-modal-header.sui-display-2.with.dignity 
				i.fas.fa-sun.fa-2x
				| &nbsp;&nbsp;On the Road With Rolling Thunder

			sui-modal-content(scrolling image)
				sui-image(wrapped size='small' src='../../static/ginsbergo.jpg' style="filter: grayscale(100%)")
				sui-modal-description
					sui-header.with.dignity Bringing Home the Om 
					p Μνεσαρcηθμ cοτιδιεqθε αδ μελ. Μεα νατθμ ινvιδθντ ατ. Ετ vιμ μελιθσ ελοqθεντιαμ. Τολλιτ σεντεντιαε ηισ νε, qθι ρεqθε διcαμ ταμqθαμ ιν, αφφερτ δισπθτανδο εθμ cθ.

			sui-modal-actions
				sui-button.with.dignity(secondary size='large' @click.native='toggle')
					| Faça Se Quiser



		sui-dropdown.labeled.icon(icon='file' button text='Swaptions au Gogo')
			sui-dropdown-menu
				sui-dropdown-item New
				sui-dropdown-item
					| Open ... 
					span.description ctrl + o
				sui-dropdown-item
					| Save as... 
					span.description ctrl + s
				sui-dropdown-item
					| Rename 
					span.description ctrl + r
				sui-dropdown-item Make a copy
				sui-dropdown-item
					sui-icon(name='folder') Move to folder
				sui-dropdown-item
					sui-icon(name='trash') Move to trash
				sui-dropdown-divider
					sui-dropdown-item Download as...

</template>


<script>

export default {
	name: 'ScrollingModalExample',
	data() {
		return { 
			open: false,
			open2: false
			};
	},
	methods: {
		toggle() {
			this.open = !this.open;
			this.open2 = !this.open2;
		},
	},
};
</script>

<script>
export default {
  name: 'DropdownExample',
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
