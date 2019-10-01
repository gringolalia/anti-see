<template lang="pug">
.ui.center.aligned.text.container
	.hello
		img(src='../assets/biohazard.svg', width="100px;")

		a.ui.huge.secondary.button.dignity(href="/" exact="")
			i.material-icons(size="huge" style="margin-right: 12px") settings_input_antenna
			| Semiotic Interface
		sui-header.medium.dignity Semantic Vue Forty-Two
		sui-divider-hidden
		sui-divider-hidden

	sui-tab
		sui-tab-pane(title='HTML')
			h3 HTML

			p
				| HTML (HyperText Markup Language) is the most basic building block of the Web.
				| It describes and defines the content of a webpage along with the basic layout of
				| the webpage. Other technologies besides HTML are generally used to describe a web
				| page&apos;s appearance/presentation (CSS) or functionality/ behavior (JavaScript).

		sui-tab-pane(title='CSS')
			h3 CSS

			p
				| Cascading Style Sheets (CSS) is a stylesheet language used to describe the
				| presentation of a document written in HTML or XML (including XML dialects such as SVG
				| or XHTML). CSS describes how elements should be rendered on screen, on paper, in
				| speech, or on other media.

		sui-tab-pane(title='JavaScript')
			h3 JavaScript

			p
				| JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language
				| with first-class functions. While it is most well-known as the scripting language for
				| Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB
				| and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic
				| language, supporting object-oriented, imperative, and declarative (e.g.
				| functional programming) styles.

	//- sui-grid(:columns='3', divided='' verticalAlign="middle")
	//- 	sui-grid-row(stretched='')
	//- 		sui-grid-column
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="massive")
	//-
	//- 		sui-grid-column
	//-
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="huge")
	//-
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="huge")
	//-
	//- 		sui-grid-column
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="huge")
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="huge")
	//- 			sui-segment
	//- 				sui-icon(name="chess" size="huge")
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
