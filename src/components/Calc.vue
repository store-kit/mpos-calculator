<template>
  <div>
        <form>
          <div class="CalcForm mw8 center ph2 ph3-ns pv5">
            <div class="CalcFormContainer br3 cf ph2-ns pv2">
              <div class="CountrySelect fl w-100 w-20-ns pa2">
                <!--<input type="checkbox" name="country" id="us" v-model="us">-->
                <!--<label for="us">USA</label>-->
                <!--{{us}}-->
                <span class="db ttu tracked f6 lh-copy pv2">Country</span>
                <div>
                  <multiselect v-model="value" label="name" track-by="name" :options="countrySelect" :option-height="40" :custom-label="customLabel" :show-labels="false" :searchable="false" :allow-empty="false">
                    <template slot="option" scope="props"><img class="FlagIcon" :src="props.option.img" alt="No Man’s Sky" height="20" width="15">
                      <div class="option__desc"><span class="option__title">{{ props.option.name }}</span></div>
                    </template>
                  </multiselect>
                </div>
              </div>
              <div class="CountrySelect fl w-100 w-20-ns pa2">
                  <span class="db ttu tracked f6 lh-copy pv2">Period</span>
                  <input type="radio" name="period" id="monthly" v-model="us" checked>
                  <label for="monthly">Monthly</label>
                  <input type="radio" name="period" id="yearly" v-model="us">
                  <label for="yearly">Yearly</label>
              </div>
              <div class="fl w-100 w-30-ns pa2" id="volume-wrapper" data-balloon="Enter the total amount you expect to take per month on credit and debit cards." data-balloon-pos="down" data-balloon-length="large">
                <label class="db ttu tracked f6 lh-copy pv2" for="volume">Monthly Card Volume</label>
                <span class="currency f4 lh-copy code">{{currency}}</span>
                <input class="dib bn input-reset outline-0 f4 lh-copy code" pattern="[0-9]*" inputmode="numeric" id="volume" v-model.number="vol" placeholder="10,000" type="number" step="100" min="0">
              </div>
              <div class="fl w-100 w-30-ns pa2" data-balloon="Enter the number of credit card readers you'll need" data-balloon-pos="down" data-balloon-length="large">
                <label class="db ttu tracked f6 lh-copy pv2" for="terminals">Card Readers</label>
                <input class="dib bn outline-0 f4 lh-copy code" id="terminals" pattern="[0-9]*" v-model.number="terminals" placeholder="1" type="number" min="0" autocomplete="off">
              </div>
            </div>
          </div>
        </form>

    <div class="Results tc">
      <div id="paypal" class="mposWrap w-100 w-20-ns dib bg-white br3 pa2">
        <div class="mposValues tc">
          <img src="../assets/pp.png" class="processor-logo">
          <p>Upfront Cost</p>
          <animated-number v-bind:value="paypalFront" class="code"></animated-number>
          <p>Monthly Cost**</p>
          <animated-number v-bind:value="paypalMonthly" class="code" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
        </div>
        <div class="processor-text">
          <ul>
            <li>2-3 day deposits</li>
            <li>No contracts</li>
          </ul>
        </div>
      </div>
      <div id="square" class="mposWrap w-100 w-20-ns dib bg-white br3 pa2">
        <div class="mposValues tc">
          <img src="../assets/square.svg" class="processor-logo">
          <p>Upfront Cost</p>
          <animated-number v-bind:value="squareFront"></animated-number>
          <p>Monthly Cost**</p>
          <animated-number v-bind:value="squareMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
        </div>
        <div class="processor-text">
          <ul>
            <li>2-3 day deposits</li>
            <li>No contracts</li>
          </ul>
        </div>
      </div>
      <div id="izettle" class="mposWrap w-100 w-20-ns dib  bg-white br3 pa2">
        <div class="mposValues tc">
          <img src="../assets/iz.png" class="processor-logo">
          <p>Upfront Cost</p>
          <animated-number v-bind:value="izettleFront"></animated-number>
          <p>Monthly Cost**</p>
          <animated-number v-bind:value="izettleMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
        </div>
        <div class="processor-text">
          <ul>
            <li>2-3 day deposits</li>
            <li>No contracts</li>
          </ul>
        </div>
      </div>
      <div id="sumup" class="mposWrap w-100 w-20-ns dib bg-white br3 pa2">
        <div class="mposValues tc">
          <img src="../assets/sumup.svg" class="processor-logo">
          <p>Upfront Cost</p>
          <animated-number v-bind:value="sumupFront"></animated-number>
          <p>Monthly Cost**</p>
          <animated-number v-bind:value="sumupMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
        </div>
        <div class="processor-text">
          <ul>
            <li>2-3 day deposits</li>
            <li>No contracts</li>
          </ul>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>



  import {default as calcRates} from './calc/processing.js'
  import {default as calcIzettleRates} from './calc/izettlePricing.js'
  import AnimatedNumber from './animatedNumber/AnimatedNumber.vue'
  import Multiselect from 'vue-multiselect'
  import VueMultiSelect from 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    data: function () {
        return {
          us: false,
          vol: '1000',
          atv: '50',
          terminals: '1',
          value: { name: 'UK', img: './static/uk.svg' },
          countrySelect: [
            { name: 'UK', img: './static/gb.svg'},
            { name: 'USA', img: './static/us.svg'},
            { name: 'France', img: './static/fr.svg'},
            { name: 'Germany', img: './static/de.svg'},

          ]
        }
    },
    components: {
        AnimatedNumber,
        Multiselect
    },
    methods: {
      customLabel ({ name, img }) {
        return `${name}`
      }
    },

    computed: {
      currency: function () {
            if (this.us === false) {
                return '£';
            }

            else {
                return '$';
            }
        },
      complete: function () {
        if (this.vol && this.atv && this.terminals != '') {

//              document.getElementById('volume-wrapper').removeAttribute('data-balloon-visible');
          return true;
        }


      },
      posSystem: function () {

        let name = "pos_system";
        return getParameterByName(name);
      },
      showIzettle: function () {

        let name = "i";

        if (getParameterByName(name) !== null) {
          return true;
        }
        else {
          return false;
        }

      },
      showPaypal: function () {

        let name = "p";

        if (getParameterByName(name) !== null) {
          console.log(getParameterByName(name));

          return true;
        }
        else {
          return false;
        }

      },
      showPX: function () {

        let name = "s";

//        if (getParameterByName(name) !== null) {
//          return true;
//        }
//        else {
//          return false
//        }

        return true;

      },
      // getter
      paypalFront: function () {
        //

        return this.terminals * 37.5;

      },
      izettleFront:function () {

        if (this.terminals <= 1) {
          return this.terminals * 29;
        }
        else {
          return 29 + (this.terminals - 1) * 59;
        }
      },
      sumupFront: function () {
        return this.terminals * 29;
      },
      squareFront: function () {
        return this.terminals * 39;
      },
      squareMonthly: function () {

        return this.vol * 0.0175;
      },
      paypalMonthly: function () {

        let us = this.us;

        if (us === true) {
            var paypal_rates = [0.027,0.027,0.027];
        }

        else {
          var paypal_rates = [0.0275, 0.02, 0.015];
        }

        if ( this.vol <= 6000 ) {
          return paypal_rates[0]*this.vol;
        }

        else if ( this.vol > 6000 && this.vol <= 15000 ) {
          return paypal_rates[1]*this.vol;
        }

        else if ( this.vol > 15000 && this.vol <= 55000 ) {
          return paypal_rates[2]*this.vol;
        }

        else if ( this.vol > 55000 ) {
          return paypal_rates[2]*this.vol;
        }

      },
      sumupMonthly: function () {

        let vol = this.vol;

        return vol * 0.0195;
      },
      izettleMonthly: function () {

        let vol = this.vol;
        if (vol !== null ) {
          return calcIzettleRates(vol);
        }
        else {
          return 0;
        }
      },
      paymentExpressMonthly: function () {

        let vol = this.vol;
        let atv = this.atv;
        return ( calcRates(vol,atv) + this.terminals * 19);

      },
      paymentExpressMonthlyRental: function () {

        return this.terminals * 25;
      },
      paymentExpressFront: function () {
        return 0;
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  input {
    color: #00acc1;
  }

  .currency {
    color: #00acc1;
  }

  .CalcForm {
    max-width: 1080px;
    margin:auto;
  }

  .CalcFormContainer {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 60px -10px;
  }

  .mposWrap {

  }

  /*.CountrySelect {*/
    /*visibility: hidden;*/
  /*}*/


</style>

<style>

  .multiselect:hover {
    cursor: pointer;
  }

  .multiselect__tags {
    border: none!important;
  }

  .multiselect__single {
    font-family: Consolas, monaco, monospace!important;
    font-size: 1.25rem!important;
  }

  .multiselect__content {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 60px -10px;
    border: none!important;
  }

  .option__title {
    vertical-align: text-top;
  }

  .FlagIcon {
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    width: 1.33333333em;
    line-height: 1em;
  }

  .multiselect__input, .multiselect__single,
  .multiselect__option {
    font-size: 1.25rem;
    font-family:monospace;
  }

  .multiselect__option--selected.multiselect__option--highlight,
  .multiselect__option--highlight {
    background-color: inherit!important;
    color: #00acc1!important;
  }


  .multiselect__option--selected {
    font-weight: inherit!important;
    color: #00acc1!important;
    background-color: inherit!important;
  }

  .multiselect__option > img,
  .multiselect__option > div
  {
    display: inline-block;
  }


</style>
