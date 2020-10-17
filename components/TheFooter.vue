<template>
  <footer class="footer">
    <div class="container">
      <div class="contact">
        <h2 class="section-title">
          {{ contactTitle }}
        </h2>
        <p class="section-description">
          {{ contactDescription }}
        </p>
        <a class="button" href="">Contact</a>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        {{ copyright
        }}<a href="https://www.sandoche.com" target="_blank">Sandoche</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      updateTitle: 'Get updates',
      updateDescription:
        'Register to the newsletter to get the updates of the latest amazing tools',
      contactTitle: 'Any tool to suggest?',
      contactDescription:
        'Any idea? Any amazing tool forgotten? Feel free to send it!',
      copyright: 'Made with ❤️ in Europe 🇪🇺 by '
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.footer {
  padding-top: 64px;
}

.updates {
  margin-bottom: 128px - 32px;
}

.contact {
  margin-top: 128px - 32px;
  margin-bottom: 128px;
  text-align: center;
}

.copyright {
  background-color: $light-grey-color;
  padding: 64px 0;
  text-align: center;
}
</style>
