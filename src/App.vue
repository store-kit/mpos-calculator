<template>
  <div id="app">
    <article class="helvetica pb5">
      <header class="vh-75 vh-100-s bg-light-pink dt w-100">
        <div
          style="background:url(http://mrmrs.io/photos/display.jpg) no-repeat center right;background-size: cover;"
          class="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 class="f2 f-subheadline-l measure lh-title fw9">Mobile Payments Calculator</h1>
          <h2 class="f6 fw6 black">Make sure you're getting the best deal by comparing all your options </h2>
          <h2 class="f6 fw6 black">Brought to you by <a href="https://storekit.com">StoreKit</a></h2>
        </div>
      </header>
      <div class="serif ph3 ph4-m ph5-l">
        <p class="lh-copy f5 f3-m f1-l measure center pv4">
          Use our mobile payments calculator to see if you're paying too much to accept card payments.
        </p>
      </div>
    </article>
    <div class="mw-80">
      <calc></calc>
    </div>
  </div>
</template>

<script>

import Calc from './components/Calc'

export default {
    name: 'app',
    components: {
        Calc
    }
}


</script>



<style>






</style>
