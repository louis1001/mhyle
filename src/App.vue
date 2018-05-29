<template>
  <div id="app">
    <transition
      name="bounce"
      mode="out-in">
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

  h1
    margin: 0
    line-height: 2

.bounce-leave-active
  animation: bounce-out 1.2s reverse


.bounce-enter-active
  animation: bounce-in 1.0s

@keyframes bounce-out
  0%
    transform: translateX(400px) scale(0)
    opacity: 0

  50%
    transform: translateX(100px) scale(1.5)
    opacity: 0.2

  100%
    transform: translateX(0px) scale(1)
    opacity: 1

@keyframes bounce-in
  0%
    transform: translateX(-400px) scale(0)
    opacity: 0

  50%
    transform: translateX(-100px) scale(1.5)
    opacity: 0.2

  90%
    transform: scale(0.95)

  100%
    transform: translateX(0px) scale(1)
    opacity: 1

</style>
