<template>
  <!-- <transition enter-active-class="fadeIn" 
                  leave-active-class="fadeOut"> -->
  <div class="Home">
    <div class="home-wrapper">
      <div class="Logo">
        <Engrane class="engranaje-element"/>
        <h1 class="TitleLogo">MHYLE</h1>
      </div>
      <div class="ControlBtHome">
        <router-link
          to="/menu">Iniciar</router-link>
        <router-link
          to="/">Extra</router-link>
        <router-link
          to="/">Opciones</router-link>
        <router-link
          to="/">Salir</router-link>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>
<script>

//require("vue2-animate/dist/vue2-animate.min.css");
import Engrane from "@/Shapes/Engrane";
export default {
  components: { Engrane },
  data() {
    return {};
  },
  methods: {
    Post(opcion) {
      this.$emit("Post", { Opcion: opcion });
    }
  }
};
</script>
<style lang="sass" scoped>

.Home
  height: 100vh
  overflow: hidden
  background: radial-gradient(white 20%, #353535 150%)
  align-items: center

  .home-wrapper
    max-width: 800px
    margin: auto
    max-height: 100vh

    .Logo
      height: 90%

      overflow: hidden

      #app .TitleLogo
        color: #474747
        font-size: 2.3rem
        padding: 0
        margin: 0
        line-height: 1
        height: 1em
      
      .engranaje-element
        max-height: 400px
        display: block
        

    .ControlBtHome
      display: flex
      justify-content: center

      height: 2rem

      a
        cursor: pointer
        flex-grow: 1
        flex-basis: 0
        padding: 10px 
        border: none
        margin: 0 1%
        background-color: #474747
        color: white
        font-weight: bold
        font-size: 1rem
        text-transform: uppercase

        &:hover
          opacity: 0.8

</style>
