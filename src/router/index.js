import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Semantics from '@/components/semantics'
import Syntax from '@/components/syntax'
import Pragmatics from '@/components/pragmatics'
import Grammar from '@/components/generative-grammar'
import Morphology from '@/components/morphology'
import Paleography from '@/components/paleography'
import Phonetics from '@/components/phonetics'
import Phonology from '@/components/phonology'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Adeus Mundo Imundo',
      component: HelloWorld
    },
    {
      path: '/semantics',
      name: 'Semantics',
      component: Semantics
    },
    {
      path: '/grammar',
      name: 'Grammar',
      component: Grammar
    },
    {
      path: '/phonology',
      name: 'Phonology',
      component: Phonology
    },
    {
      path: '/phonetics',
      name: 'Phonetics',
      component: Phonetics
    },
    {
      path: '/paleograpy',
      name: 'Paleography',
      component: Paleography
    },
    {
      path: '/morphology',
      name: 'Morphology',
      component: Morphology
    },
    {
      path: '/syntax',
      name: 'Syntax',
      component: Syntax
    },
    {
      path: '/pragmatics',
      name: 'Pragmatics',
      component: Pragmatics
    }

  ]
})
