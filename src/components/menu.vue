<template>
  <div class="Menu">
    <div class="ControlLineTime">
      <Scroll
        v-for="(Item , key) in BartScroll"
        :key="key"
        :index="key"
        :ictive="Item.Active"/>
    </div>
    <img
      class="EngraneA"
      src="@/assets/Img/EngraneFinal.svg">
    <div
      class="Profundidad"/>
    <div
      class="ModulePrev">
      <div
        class="IconModule"><img src="@/assets/Img/IconIncognito.svg"></div>
      <div
        class="IconLlave"><img src="@/assets/Img/LLaveIcon.svg"></div>
    </div>
    <div class="MenuTitle">
      <a
        href="#"
        class="SigBt"><h1 class="icon-left-open"/></a>
      <h1
        class="TitleModule">¿Que es Inteligencia?</h1>
      <a
        href="#"
        class="SigBt"><h1 class="icon-right-open"/></a>
    </div>
  </div>
</template>
<script>
import Scroll from "../Shapes/Scroll";

export default {
  components: { Scroll },
  data() {
    return {
      BartScroll: []
    };
  },
  created() {
    for (let i = 0; i < 8; i++) {
      if (i == 0) {
        this.BartScroll.push({ Active: true });
      } else {
        this.BartScroll.push({ Active: false });
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.Menu
  position: relative
  width: 100vw
  height: 100vh
  overflow: hidden
  background: white

  .ControlLineTime 
    position: absolute
    margin: 0
    margin-top: 65vh
    margin-left: 2%
    height: 5h

  .EngraneA 
    position: absolute
    width: 200px
    left: -100px
    bottom: -100px
    z-index: 15

  .Profundidad 
    position: absolute
    width: 100vw
    height: 100vh
    background: radial-gradient(rgba(255, 255, 255, 0) 20%, #353535 160%)
    z-index: 12

  .ModulePrev 
    position: relative
    width: 30%
    height: 20vh
    margin: 0
    margin-left: 32.5%
    margin-top: 15vh

  .IconModule 
    width: 30%
    margin: 0 35%
    opacity: 0.9

  .IconLlave 
    margin-top: -5%

  .MenuTitle 
    position: absolute
    z-index: 20
    width: 30%
    margin: 0 35%
    height: 10vh
    margin-top: 20%
    /* color:#353535*/

  .TitleModule 
    width: 60%
    /*  font-size: 2.5vw
      text-align: center
      float: left
      
      font-weight: bold*/

  .SigBt 
    width: 20%
    /*text-decoration: none
      font-size: 2.5vw
      float: left
    
      text-align: center
      margin: 5% 0
      color:#353535*/

  .SigBt > h1:hover 
    /* color: white*/

</style>
