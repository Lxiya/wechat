<template>
  <div>
    <jdh-header></jdh-header>
    <jdh-banner></jdh-banner>
  </div>
</template>

<script>
/* import dependences*/
import 'normalize.css'

/* import components */
import Header from './child/header/Header'
import Banner from './child/banner/Banner'

export default {
	name: 'Index',
	components:{
		'jdh-header':Header,
		'jdh-banner':Banner
	}
}
</script>

<style>
</style>
