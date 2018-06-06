<template>
  <div class="Menu">
    <div class="menu-container">
      <img
        class="menu-svg"
        src="@/assets/Img/Menu.svg"
        alt="Menu">
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
<style lang="scss" scoped>
.Menu{
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background: white;

  .menu-svg{
    max-height: 100vh;
    max-width: 100vw;
  }

  @media (min-width: 640px) {
    .Menu .menu-svg{
      max-height: 800vh;
      max-width: 80vw;
    }
  }
}


</style>
