<template lang="pug">
#apps
	sui-menu.dignity(fixed='top' borderless)
		sui-menu-item.dignity(active link='/' name='Principio' style="font-size: 18px;")
			i.fa.fa-gears.fa-2x
			| &nbsp; &nbsp;Engenho Novo LLC

		sui-menu-item(name='Principio' link='/') In Principio
		sui-menu-item(name='Perpateia' link='/syntax') Peripateia
		sui-menu-item(name='Hamartia' link='/pragmatics') Hamartia
		sui-menu-item(name='Anagnorisis' link='/semantics', floated='right') Anagnorisis
		sui-menu-item
			sui-dropdown(text='Hubris')
				sui-dropdown-menu
					sui-dropdown-item
						sui-icon(name='plane')
						| Macedon
					sui-dropdown-item
						sui-icon(name='ship')
						| Athens
					sui-dropdown-item
						sui-icon(name='tty')
						| Syracuse
					sui-dropdown-item
						sui-icon(name='wrench')
						| Sparta
					sui-dropdown-item
						sui-icon(name='sun')
						| Corinth
					sui-dropdown-item
						sui-icon(name='chess')
						| Thebes
					sui-dropdown-item
						sui-icon(name='moon')
						| Rhodes
					sui-dropdown-divider
					sui-dropdown-item
						sui-icon(name='plug')
						| Argos


	router-view
</template>

<script>
export default {
	name: 'PointingMenuSecondaryExample',
	data() {
		return {
			active: 'In Principio',
			items: ['In Principio', 'In Media Res', 'O Fim da Picada'],
		};
	},
	methods: {
		isActive(name) {
			return this.active === name;
		},
		select(name) {
			this.active = name;
		},
	},
};
</script>

<style>
#app {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

	<style>
		body, html, .ui, .sui  {
			font-family: 'News Cycle', sans-serif !important;
			font-weight: 300 !important;
			height: 100%;
		}

		h1, h2, h3, h4, h5, h6 {
			font-family: 'News Cycle', sans-serif !important;
			font-weight: 300 !important
		}

		.dignity {
			font-family: "News Cycle", sans-serif !important;
			font-weight: 300 !important;
		}

		.material-icons, .fa {
			vertical-align: middle;
		}

</style>
