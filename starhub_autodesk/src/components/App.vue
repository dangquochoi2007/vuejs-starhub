<template>
<div id="wrapper">
  <app-nav></app-nav>
  <div class="container">
    <router-view></router-view  >
  </div>
  <app-footer></app-footer>
</div>
</template>



<script type="text/javascript">
  import AppNav from './layouts/AppNav'
  import AppFooter from './layouts/AppFooter'

  export default {
    name: 'app',
    components: { AppNav, AppFooter },
    data () {
      return {}
    }
  }
</script>
