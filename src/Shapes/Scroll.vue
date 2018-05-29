<template>
  <div
    :style="SyleTime"
    class="LineaTime">
    <div
      :syle="SyleTime"
      class="RectTime"/>
    <div
      v-if="activeArco"
      class="RectTimeAnimate"/>
    <div
      :class="{'CircleAnimation':activeCircle}"
      class="CicleTime"/>
  </div>
</template>
<script>
export default {
  props: {
    Index: {
      type: Number,
      default: 0
    },
    Active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      SyleTime: { "z-index": 8, left: "-50vw" },
      activeCircle: false,
      activeArco: false
    };
  },
  watch: {
    Active: val => {
        this.TimeAnimation(val);
    }
  },
  created() {
    this.SyleTime["z-index"] = 8 - this.Index;
    let PositionX = -50;
    for (let i = 0; i < this.Index; i++) {
      PositionX += 100;
    }
    this.SyleTime["left"] = PositionX - 2 + "vw";
     this.TimeAnimation(this.Active);
  },
  methods:
  {
    TimeAnimation(val)
    {
      if (val) {
        this.activeArco = val;
        let My = this;
        setTimeout(function() {
          My.activeCircle = val;
        }, 5000);
      } else {
        this.activeCircle = val;
        let My = this;
        setTimeout(function() {
          My.activeArco = val;
        }, 100);
      }
    }
  },
};
</script>
<style scoped>
.LineaTime {
  position: absolute;
  width: 100vw;
  height: 10vh;
  margin-top: 0.5%;
}
.RectTime {
  position: relative;
  float: left;
  width: 99%;
  height: 30%;
  margin: 1.8% 0;
  background-color: #dddddd;
}
.CicleTime {
  position: absolute;
  width: 5vh;
  height: 5vh;
  right: 0;
  background-color: #eeeeee;
  border-radius: 90%;
  border: 2.5vh #dddddd solid;
}
.CircleAnimation {
  animation: Flash 1s linear infinite;
}
@keyframes Flash {
  from {
    background-color: #70aeff;
  }
  to {
    background-color: #4183d7;
  }
}
.RectTimeAnimate {
  position: absolute;
  float: left;
  width: 99%;
  height: 30%;
  margin: 1.8% 0;
  background-color: #4183d7;
  animation: grow 5s linear;
}
@keyframes grow {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
