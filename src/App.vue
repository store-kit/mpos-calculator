<template>
  <div id="app" class="pnova overflow-x-hidden">
      <header class="vh-75-l vh-50-m h-100 dt w-100">
        <div id="stripeBg" class="absolute"></div>
        <div class="dt-m dt-l ph2 pv4-m pv6-l pb4 w-100 relative">
          <div class="mw8 center">
            <div class="dtc-m dtc-l v-mid w-100 w-50-m w-50-l ph4">
              <h1 class="f1 measure lh-title fw9 white">
                Compare mPOS Providers
              </h1>
              <div class="pb3 pb4-m pb4-l white measure">
                  <h2 class="f4 lh-copy fw2">Instantly find your lowest cost option for taking card payments in-store or on the go with our free mobile payments calculator.</h2>
                  <h2 class="f4 lh-copy fw2">Brought to you by <a href="https://storekit.com" class="white dim link">StoreKit</a></h2>
              </div>
            </div>
          </div>
        </div>
        <div id="devices" class="absolute"><img src="/static/devices-ds.png"></div>
      </header>
    <section id="calc" class="relative">
      <calc></calc>
    </section>
    <section id="faqs" class="relative">
      <div class="mw7 center relative">
        <div class="cf ph2-ns faqs">
          <div class="w-100">
            <h1 class="tc">FAQs</h1>
          </div>
          <div class="w-100 pa4 pa2-ns">
            <h1 class="f3 lh-copy">Why choose mPOS?</h1>
            <p class="lh-copy">If you take less than around 50,000 a year in card payments and/or run a seasonal business, we most often recommend using a mobile point of sale provider over a traditional card terminal rental. Although you'll often pay slightly more per transaction in fees, you won't pay a monthly rental fee, monthly account fee, PCI compliance fee, monthly minimum fee or any of the other inventive fees card processing companies like to hide in contracts. </p>
            <p class="lh-copy">You'll also pay upfront for your card terminal and own it outright, rather than entering into a years-long rental contract.</p>
            <h1 class="f3 lh-copy">What about XYZ?</h1>
            <p class="lh-copy">We're big fans of increased competition in the payments world, but mPOS providers need to meet certain criteria before we'll feature them:
              <li class="lh-copy">Clear, transparent and publicly available pricing structure.</li>
              <li class="lh-copy">Local support teams in respective markets.</li>
              <li class="lh-copy">Minimal or no contracts required to sign up.</li>
              <li class="lh-copy">Reasonable compatibility with modern smartphones and tablets.</li>
            </p>
            <h1 class="f3 lh-copy">Can I accept Amex?</h1>
            <p class="lh-copy">Amex works a little differently compared with Visa and Mastercard. You'll typically negotiate your own rates with Amex directly, but some providers like iZettle and Square absorb the extra cost of accepting Amex so take this into consideration if you have a high percentage of Amex transactions.</p>
            <h1 class="f3 lh-copy">Don't you mean mobile payments?</h1>
            <p>Not really. <a href="http://www.shopkeep.com/blog/mobile-point-of-sale-vs-mobile-payments-why-the-difference-matters" target="_blank" class="link"> See here</a></p>
            <h1 class="f3 lh-copy">What if I take more than 50,000 per year?</h1>
            <p class="lh-copy">We're working on a product that brings the simplicity of mPOS pricing and friendly contracts to larger businesses. Let's keep in touch.</p>
          </div>
        </div>
      </div>

      </section>
    <social></social>

  </div>
</template>

<script>

import Calc from './components/Calc'
import Social from './components/social/Social.vue'

export default {
    name: 'app',
    components: {
        Calc,
        Social
    }
}


</script>



<style>

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header {
    position: relative;
  }

  #faqs {
    z-index: 2;
  }

  #stripeBg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: skewY(-12deg);
    transform-origin: 0;
    background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
    box-shadow: inset 0 -8px 8px -8px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to right, #01acc1 0%, #495aff 100%);
  }

  #calc:before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: -25%;
    transform: skewY(-12deg);
    background: rgba(237,242,255,.8);
    background-image: linear-gradient(135deg,#fff,hsla(0,0%,100%,0));
  }

  #devices {
    /*left: 50%;*/
    pointer-events: none;
    z-index: 10;
    left: 5%;
    max-width: 80%;
    top: 320px;
    display: none;
  }

  #devices > img {
    width: 680px;
  }

  @media screen (max-width: 60em) and (min-width: 30em) {
    #devices {
      top: 300px;
      right:0;
      left:auto;
      width:500px;
    }
  }

  @media screen and (min-width: 60em) {
    #devices {
      display: block;
      top: 5px;
      margin-left: 20px;
      left:57%;
      width:800px;
    }
  }

  .pnova {
    font-family: "proxima-nova",
    -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    'helvetica neue', helvetica,
    ubuntu,
    roboto, noto,
    'segoe ui', arial,
    sans-serif;
  }


</style>
