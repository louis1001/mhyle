<template>
  <section class="historia-wrapper">
    <h1 class="historia-title section-title">Historia de la inteligencia artificial.</h1>
    Bienvenido al inicio de historia.
    <transition
      name="bounce"
      mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style lang="sass">

</style>
