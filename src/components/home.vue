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
        <input
          type="button"
          value="INICIAR" 
          @click="undefined">
        <input
          type="button"
          value="EXTRA" 
          @click="undefined">
        <input
          type="button"
          value="OPCIONES" 
          @click="undefined">
        <input
          type="button"
          value="SALIR" 
          @click="undefined">
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

  .home-wrapper
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 100%
    max-width: 800px
    height: 70%
    // background: white

    .Logo
      height: 70%
      padding: 10px
      // border-bottom: 1px solid gray
    
    .TitleLogo
      color: #474747
      padding-top: 10px
      font-size: 2.3rem


    // .ControlBtHome
    //   width: 100%
    //   display: flex
    //   justify-content: space-evenly

    //   input 
    //     border: none
    //     background-color: #474747
    //     color: white
    //     font-weight: bold
    //     font-size: 1rem

    //     &:hover
    //       opacity: 0.8

</style>
