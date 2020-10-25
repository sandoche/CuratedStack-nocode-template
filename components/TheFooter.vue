<template>
  <footer class="footer">
    <div class="container">
      <div class="contact">
        <h2 class="section-title">
          {{ $t('footer.title') }}
        </h2>
        <p class="section-description">
          {{ $t('footer.description') }}
        </p>
        <a class="button" href="">{{ $t('buttons.footer.contact') }}</a>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        {{ $t('footer.copyright')
        }}<a :href="$t('footer.author.website')" target="_blank">{{
          $t('footer.author.name')
        }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
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
