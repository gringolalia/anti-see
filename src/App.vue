<template lang="pug">
#apps
	sui-menu.dignity(fixed='top' borderless inverted)
		sui-menu-item.dignity( link='/' name='Principio' style="font-size: 18px;")
			i.fas.fa-cogs.fa-2x
			| &nbsp; &nbsp;Engenho Novo LLC

		sui-menu-item(name='Principio' link='/') In Principio
		sui-menu-item(name='Perpateia' link='/syntax') In Media Res
		sui-menu-item(name='Hamartia' link='/pragmatics') Festina Lente
		sui-menu-item
			sui-dropdown(text='Tragoedia')
				sui-dropdown-menu
					sui-dropdown-item
						sui-icon(name='plane')
						| Mimesis
					sui-dropdown-item
						sui-icon(name='ship')
						| Hamartia
					sui-dropdown-item
						sui-icon(name='tty')
						| Anagnorisis
					sui-dropdown-item
						sui-icon(name='wrench')
						| Mythos
					sui-dropdown-item
						sui-icon(name='sun')
						| Katharsis
					sui-dropdown-item
						sui-icon(name='chess')
						| Peripeteia
					sui-dropdown-item
						sui-icon(name='moon')
						| Lusis
					sui-dropdown-divider
					sui-dropdown-item
						sui-icon(name='plug')
						| Desis


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
    body, html, .ui, .suis {
      font-family: 'News Cycle', sans-serif !important;
      font-weight: 300;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: "News Cycle", sans-serif !important;
      font-weight: 300;
    }

    .headline {
      font-family: 'News Cycle', sans-serif !important;
      font-size: 25px;
    }

    .dignity {
      font-family: 'News Cycle', sans-serif !important;
      font-weight: 300 !important;
    }

    i, .material-icons, .fas {
      vertical-align: middle;
    }


</style>
