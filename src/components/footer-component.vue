<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.href">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { links } from '@/_config';
export default {
  name: 'FooterComponent',
  data() {
    return {
      links
    }
  }
}

</script>