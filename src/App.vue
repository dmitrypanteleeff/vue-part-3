<template>
  <div class="wrapper">
    <HeaderComponent :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello</h1>
        <p>hello</p>
      </div>
    </div>
    <FooterComponent :links="links"></FooterComponent>
  </div>
</template>

<script>

import HeaderComponent from '@/components/header-component.vue';
import FooterComponent from '@/components/footer-component.vue';

export default {
  components: {
    HeaderComponent, FooterComponent
  },
  data() {
    return {
      title: "Header1", 
      links: [
        {
          title: 'Home',
          alias: 'home',
          url: '/'
        },
        {
          title: 'About',
          alias: 'about',
          url: '/about'
        },
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
