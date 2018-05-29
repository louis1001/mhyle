<template>
  <div class="Engrane">
    <img
      class="EngraneCenter"
      src="@/assets/Img/EngraneFinalRevert.svg">
    <div class="ControlEngrane">
      <img
        class="EngraneBotton"
        src="@/assets/Img/EngraneFinal.svg">
      <img
        class="EngraneBotton"
        src="@/assets/Img/EngraneFinal.svg">
    </div>
    <img
      class="CerebroLogo"
      src="@/assets/Img/ControlCerebro.svg">
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.Engrane
  position: relative
  height: 90%
  // border: 1px solid red
  margin: 0 10%

  @media (max-width: 310px)
    height: 70%

  img 
    position: absolute
    max-height: 100%
    margin: 0 auto

  .ControlEngrane
    position: absolute
    width: 100%
    height: 50%
    bottom: 0
    display: block
    transform: scale(1.3) translateY(-5px)

  .EngraneBotton 
    position: relative

  .EngraneCenter
    display: block
    left: 0
    right: 0
    width: 50%
    height: 50%
    transform: scale(1.3)

  img.CerebroLogo 
    left: 0
    right: 0
    bottom: 0

</style>
