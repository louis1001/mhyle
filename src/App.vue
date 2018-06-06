<template>
  <div id="app">
    <transition
      name="bounce">
      <router-view/>

    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">

@import 'static/styles/utils'

body
  margin: 0
  padding: 0
  overflow-x: hidden

a.btn
  text-decoration: none
  padding: 10px 10px
  margin: 10px auto
  border-radius: 5px
  border: 1px solid gray

  &:active
    background: white
    border-color: rgb(255, 166, 50)


#app
  width: 100%
  min-height: 100vh
  top: 0
  background: honeydew
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

  a
    text-decoration: none

  h1
    margin: 0
    line-height: 2

.bounce-leave-active
  animation: bounce-out 1.2s


.bounce-enter-active
  animation: bounce-in 1.2s

@keyframes bounce-out
  0%
    opacity: 1

  100%
    opacity: 0

@keyframes bounce-in
  0%
    opacity: 0
    top: 0
    left: 0

  100%
    opacity: 1
    top: 0
    left: 0

</style>
