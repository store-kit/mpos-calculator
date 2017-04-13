<template>
  <span>{{ tweeningValue | currencyDisplay }}</span>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    name: 'AnimatedNumber',
    props: {
      value: {
        type: Number,
        required: true
      }
    },
    data: function () {
      return {
        tweeningValue: 0
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        this.tween(oldValue, newValue)
      }
    },
    mounted: function () {
      this.tween(0, this.value)
    },
    methods: {
      tween: function (startValue, endValue) {
        var vm = this
        var animationFrame
        function animate (time) {
          TWEEN.update(time)
          animationFrame = requestAnimationFrame(animate)
        }
        new TWEEN.Tween({ tweeningValue: startValue })
          .to({ tweeningValue: endValue }, 750)
          .onUpdate(function () {
            vm.tweeningValue = this.tweeningValue.toFixed(0)
          })
          .onComplete(function () {
            cancelAnimationFrame(animationFrame)
          })
          .start()
        animationFrame = requestAnimationFrame(animate)
      }
    }
  }

</script>
