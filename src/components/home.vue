<template>
  <!-- <transition enter-active-class="fadeIn" 
                  leave-active-class="fadeOut"> -->
  <div class="Home">
    <div class="home-wrapper">
      <div class="Logo">
        <Engrane/>
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
  padding: 0 10px
  overflow: hidden
  background: radial-gradient(white 20%, #353535 150%)
  display: flex
  justify-content: center
  align-items: center

  @media (max-height: 400px)
    overflow-y: auto

  .home-wrapper
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 100%
    max-width: 800px
    height: 70%

    .Logo
      height: 500px
      padding: 10px
      display: flex
      align-items: stretch
      flex-direction: column
    
      .TitleLogo
        color: #474747
        padding-top: 10px
        font-size: 2.3rem

    .ControlBtHome
      display: flex
      justify-content: center

      a
        cursor: pointer
        flex-grow: 1
        flex-basis: 0
        padding: 6px 10px 
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
