<template>
  <div class="wrapper">
    <HeaderComponent />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import { process } from '@/_config';
import HeaderComponent from '@/components/header-component.vue';
import FooterComponent from '@/components/footer-component.vue';

export default {
  components: {
    HeaderComponent, FooterComponent
  },
  data() {
    return {
      test: process,
      title: "Header1", 
    }
  }
}
</script>
