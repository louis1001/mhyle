<template>
  <section class="historia-wrapper">
    <h1 class="historia-title section-title">Aplicaciones para la inteligencia artificial.</h1>
    Bienvenido al inicio de la seccion Aplicaciones.
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
