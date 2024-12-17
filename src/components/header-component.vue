<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a class="navbar-logo" href="/">
          {{ title2 }}
        </a>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.url">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { links } from '@/_config';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      title2: 'comp2',
      links
    }
  }
}

</script>