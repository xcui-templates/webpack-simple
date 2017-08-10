<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>\{{ greeting }}</h1>
    <ul>
      <li>
        <x-button type="primary" @click="welcome"> Hello World </x-button>
      </li>
      <li>
        Xcui is a collection of Vue.js 2.x desktop components collection.
      </li>
      <li>
        To learn more about xcui, visit
        <a :href="docsURL" target="_blank">
          \{{ humanizeURL(docsURL) }}
        </a>
      </li>
      <li>
        Github:
        <a :href="docsURL" target="_blank">
          \{{ humanizeURL(repoURL) }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js & xcui app!',
    docsURL: 'https://wmfe.github.io/xcui/',
    repoURL: 'https://github.com/wmfe/xcui',
  },
  methods: {
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    },
    welcome() {
      this.$Message.info('Hello World!')
    }
  }
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 15px;
}

a {
  color: #42b983;
}
</style>
