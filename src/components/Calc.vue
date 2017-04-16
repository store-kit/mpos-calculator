<template>
  <div class="center Calc pv4">
    <div class="ph3 ph4-m ph5-l">
      <p class="lh-copy f5 f3-m f3-l measure tc center pv1 w-75 color-navy-900">
        Select your country and enter your the amount you take on cards. No more spreadsheets and guesswork!
      </p>
    </div>
        <form>
          <div class="CalcForm mw8 center ph2 ph3-ns pv5">
            <div class="CalcFormContainer br3 cf ph3 ph2-ns pv2">
              <div class="CountrySelect fl w-100 w-25-ns pa2">
                <!--<input type="checkbox" name="country" id="us" v-model="us">-->
                <!--<label for="us">USA</label>-->
                <!--{{us}}-->
                <span class="db ttu tracked f6 lh-copy pv2">Country</span>
                <div>
                  <multiselect v-model="countryValue" label="name" track-by="name" :options="countrySelect" :option-height="40" :custom-label="customLabel" :show-labels="false" :searchable="false" :allow-empty="false" >
                    <template slot="option" scope="props"><img class="FlagIcon" :src="props.option.img" height="20" width="15">
                      <div class="option__desc"><span class="option__title">{{ props.option.name }}</span></div>
                    </template>
                  </multiselect>
                </div>
              </div>
              <!--<div class="CountrySelect fl w-100 w-20-ns pa2">-->
                  <!--<span class="db ttu tracked f6 lh-copy pv2">Period</span>-->
                  <!--<input type="radio" name="period" id="monthly" v-model="time">-->
                  <!--<label for="monthly">Monthly</label>-->
                  <!--<input type="radio" name="period" id="yearly" v-model="time">-->
                  <!--<label for="yearly">Yearly</label>-->
              <!--</div>-->
              <div class="fl w-100 w-25-ns pa2" id="atv-wrapper" data-balloon="Enter the total amount you expect to take per month on credit and debit cards." data-balloon-pos="down" data-balloon-length="large">
                <label class="db ttu tracked f6 lh-copy pv2" for="volume">Average Sale Value</label>
                <span class="currency f4 lh-copy code">{{currency}}</span>
                <input class="dib bn input-reset outline-0 f4 lh-copy code w-80-ns" pattern="[0-9]*" inputmode="numeric" id="atv" v-model.number="atv" placeholder="15" type="number" step="1" min="0">
              </div>
              <div class="fl w-100 w-30-ns pa2" id="volume-wrapper" data-balloon="Enter the total amount you expect to take per month on credit and debit cards." data-balloon-pos="down" data-balloon-length="large">
                <label class="db ttu tracked f6 lh-copy pv2" for="volume">Monthly Card Volume</label>
                <span class="currency f4 lh-copy code">{{currency}}</span>
                <input class="dib bn input-reset outline-0 f4 lh-copy code w-80-ns" pattern="[0-9]*" inputmode="numeric" id="volume" v-model.number="vol" placeholder="10,000" type="number" step="100" min="0">
              </div>
              <div class="fl w-100 w-20-ns pa2" data-balloon="Enter the number of credit card readers you'll need" data-balloon-pos="down" data-balloon-length="large">
                <label class="db ttu tracked f6 lh-copy pv2" for="terminals">Card Readers</label>
                <input class="dib bn outline-0 f4 lh-copy code" id="terminals" pattern="[0-9]*" v-model.number="terminals" placeholder="1" type="number" min="0" autocomplete="off">
              </div>
            </div>
          </div>
        </form>

    <div class="Results tc cf pv4 center mw9">
      <!--<transition name="fade">-->
        <transition-group name="list-complete" tag="div">
          <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showPaypal === true" key="paypal">
          <a href="http://www.paypalhere.com?utm_source=StoreKit" class="link color-inherit" target="_blank">
          <div id="paypal" class="mposWrap bg-white br3" >
            <div class="mposValues tc">
              <div class="mposImg">
                <img src="../assets/pp.png" class="mposLogo">
              </div>
              <p class="f6">Upfront Cost</p>
              <span class="f4 lh-copy code">{{currency}}</span>
              <animated-number v-bind:value="paypalFront" class="code"></animated-number>
              <p class="f6">{{period}} Cost**</p>
              <span class="f4 lh-copy code">{{currency}}</span>
              <animated-number v-bind:value="paypalMonthly" class="code" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
            </div>
            <div class="mposText br--bottom br3">
              <ul class="mposBullets tl f6">
                <li>2-3 day deposits</li>
                <li>Muira M010 Reader</li>
                <li>No contract</li>
              </ul>
              <a href="http://www.paypalhere.com?utm_source=StoreKit" target="_blank" class="signupLink">Learn More</a>
            </div>
          </div>
          </a>
      </div>
          <div class="fl w-100 w-third-m w-20-ns pa2 mix" key="sumup">
            <a href="https://sumup.com/?a_aid=store-kit" class="link color-inherit" target="_blank">
              <div id="sumup" class="mposWrap bg-white br3">
                <div class="mposValues tc">
                  <div class="mposImg">
                    <img src="../assets/sumup.svg" class="mposLogo">
                  </div>
                  <p class="f6">Upfront Cost</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="sumupFront"></animated-number>
                  <p class="f6">Monthly Cost**</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="sumupMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
                </div>
                <div class="mposText br--bottom br3">
                  <ul class="mposBullets tl f6">
                    <li>2-3 day deposits</li>
                    <li>SumUp Reader</li>
                    <li>No contract</li>
                  </ul>
                  <a href="https://sumup.com/?a_aid=store-kit" target="_blank" class="signupLink">Learn More</a>
                </div>
              </div>
            </a>
          </div>
      <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showSquare" key="square">
        <a href="https://squareup.com?utm_source=StoreKit" class="link color-inherit" target="_blank">
        <div id="square" class="mposWrap bg-white br3">
          <div class="mposValues tc">
            <div class="mposImg">
              <img src="../assets/square.svg" class="mposLogo">
            </div>
            <p class="f6">Upfront Cost</p>
            <span class="f4 lh-copy code">{{currency}}</span>
            <animated-number v-bind:value="squareFront"></animated-number>
            <p class="f6">Monthly Cost**</p>
            <span class="f4 lh-copy code">{{currency}}</span>
            <animated-number v-bind:value="squareMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
          </div>
          <div class="mposText br--bottom br3">
            <ul class="mposBullets tl f6">
              <li>2-3 day deposits</li>
              <li>Square Reader</li>
              <li>No contract</li>
            </ul>
            <a href="https://squareup.com?utm_source=StoreKit" target="_blank" class="signupLink">Learn More</a>
          </div>
        </div>
        </a>
      </div>
      <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showIzettle" key="izettle">
        <a href="http://izettle.go2cloud.org/SH1bN" class="link color-inherit" target="_blank">
          <div id="izettle" class="mposWrap bg-white br3" >
            <div class="mposValues tc">
              <div class="mposImg">
                <img src="../assets/iz.svg" class="mposLogo">
              </div>
              <p class="f6">Upfront Cost</p>
              <span class="f4 lh-copy code">{{currency}}</span>
              <animated-number v-bind:value="izettleFront"></animated-number>
              <p class="f6">Monthly Cost**</p>
              <span class="f4 lh-copy code">{{currency}}</span>
              <animated-number v-bind:value="izettleMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
            </div>
            <div class="mposText br--bottom br3">
              <ul class="mposBullets tl f6">
                <li>2-3 day deposits</li>
                <li>iZettle Reader</li>
                <li>No contract</li>
              </ul>
              <a href="http://izettle.go2cloud.org/SH1bN" target="_blank" class="signupLink">Learn More</a>
            </div>
          </div>
        </a>
      </div>
      <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showSparkPay" key="sparkpay">
        <a href="https://squareup.com?utm_source=StoreKit" class="link color-inherit" target="_blank">
        <div id="sparkpay" class="mposWrap bg-white br3">
          <div class="mposValues tc">
            <div class="mposImg">
             <img src="../assets/sparkpay.png" class="mposLogo">
            </div>
            <p class="f6">Upfront Cost</p>
            <span class="f4 lh-copy code">{{currency}}</span>
            <animated-number v-bind:value="sparkPayFront"></animated-number>
            <p class="f6">Monthly Cost**</p>
            <span class="f4 lh-copy code">{{currency}}</span>
            <animated-number v-bind:value="sparkPayMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
          </div>
          <div class="mposText br--bottom br3">
            <ul class="mposBullets tl f6">
              <li>2-3 day deposits</li>
              <li>No contract</li>
            </ul>
            <a href="https://squareup.com?utm_source=StoreKit" target="_blank" class="signupLink">Learn More</a>
          </div>
        </div>
        </a>
      </div>
          <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showSmileAndPay" key="smileandpay">
            <a href="https://www.smileandpay.com?utm_source=StoreKit" class="link color-inherit" target="_blank">
              <div id="sparkpay" class="mposWrap bg-white br3">
                <div class="mposValues tc">
                  <div class="mposImg">
                    <img src="../assets/smileandpay.png" class="mposLogo">
                  </div>
                  <p class="f6">Upfront Cost</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="smileAndPayFront"></animated-number>
                  <p class="f6">Monthly Cost**</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="smileAndPayMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
                </div>
                <div class="mposText br--bottom br3">
                  <ul class="mposBullets tl f6">
                    <li>2-3 day deposits</li>
                    <li>Spire SPm2 Reader</li>
                    <li>No contract</li>
                  </ul>
                  <a href="https://www.smileandpay.com?utm_source=StoreKit" target="_blank" class="signupLink">Learn More</a>
                </div>
              </div>
            </a>
          </div>
      <div class="fl w-100 w-third-m w-20-ns pa2 mix" v-if="showBarclayCard" key="barclaycard">
            <a href="https://www2.barclaycard.co.uk/business/accepting-payments/card-machines/barclaycard-anywhere?utm_source=StoreKit" class="link color-inherit" target="_blank">
              <div id="sparkpay" class="mposWrap bg-white br3">
                <div class="mposValues tc">
                  <div class="mposImg">
                    <img src="../assets/barclaycard.svg" class="mposLogo">
                  </div>
                  <p class="f6">Upfront Cost</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="barclayCardFront"></animated-number>
                  <p class="f6">Monthly Cost**</p>
                  <span class="f4 lh-copy code">{{currency}}</span>
                  <animated-number v-bind:value="barclayCardMonthly" data-balloon="Includes estimated monthly terminal rental of £25" data-balloon-pos="right" data-balloon-length="large">{{currency}}</animated-number>
                </div>
                <div class="mposText br--bottom br3">
                  <ul class="mposBullets tl f6">
                    <li>2-3 day deposits</li>
                    <li>Muira M010 Reader</li>
                    <li>No contract</li>
                  </ul>
                  <a href="https://www2.barclaycard.co.uk/business/accepting-payments/card-machines/barclaycard-anywhere?utm_source=StoreKit" target="_blank" class="signupLink">Learn More</a>
                </div>
              </div>
            </a>
          </div>
        </transition-group>
    </div>
    <div>

    </div>
    <p class="note f7 tc">
      *All costs are estimated (data updated April '17)
      <br>
      ** Amex & international cards may be priced separately.
    </p>
  </div>
</template>

<script>

  import {default as calcRates} from './calc/processing.js'
  import {default as calcIzettleRates} from './calc/izettlePricing.js'
  import AnimatedNumber from './animatedNumber/AnimatedNumber.vue'
  import Multiselect from 'vue-multiselect'
  import MultiselectCSS from 'vue-multiselect/dist/vue-multiselect.min.css'


  export default {
    data: function () {
        return {
          vol: '7500',
          atv: '25',
          terminals: '1',
          time: ['Monthly', 'Yearly'],
          period: 'Monthly',
          countryValue: { name: 'UK', img: './static/uk.svg' },
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
        return `${name}`;
      }
    },
    computed: {
      currency: function () {
            if (this.countryValue.name == 'UK') {
                return '£';
            }

            else if (this.countryValue.name == 'USA') {
                return '$';
            }

            else {
                return '€';
            }
        },
      period: function () {
        return 'Monthly';
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

        let country = this.countryValue.name;

        if ( country !== 'USA' ) {
          return true;
        }
        else {
          return false;
        }

      },
      showSquare: function () {
        let country = this.countryValue.name;

        if ( country === 'UK' || country === 'USA') {
            return true;
        }

        else {
            return false;
        }
      },
      showSmileAndPay: function () {

          let country = this.countryValue.name;

          if ( country === 'France') {
              return true;
          }

          else {
              return false;
          }
      },
      showSparkPay: function () {

        let country = this.countryValue.name;

        if ( country !== 'USA' ) {
          return false;
        }
        else {
          return true;
        }

      },
      showBarclayCard: function () {

        let country = this.countryValue.name;

        if ( country !== 'UK' ) {
          return false;
        }
        else {
          return true;
        }

      },
      showPaypal: function () {

        return true;

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

        let country = this.countryValue.name;

        if (country === 'USA') {
          return this.terminals * 79;
        }

        else {
          return this.terminals * 37.5;
        }

      },
      smileAndPayFront: function () {
        return this.terminals * 79;
      },
      izettleFront:function () {

        if (this.terminals <= 1) {
          return this.terminals * 29;
        }
        else {
          return 29 + (this.terminals - 1) * 59;
        }
      },
      barclayCardFront: function () {
        return this.terminals * 60;
      },
      sumupFront: function () {

        let country = this.countryValue.name;

        if (country == 'USA') {
          return this.terminals * 69;
        }

        else if ( country === 'UK') {
          return this.terminals * 29;
        }

        else {
          return this.terminals * 39;
        }

      },
      squareFront: function () {

          let country = this.countryValue.name;

          if (country == 'USA') {
            return this.terminals * 49;
          }

          else if ( country === 'UK') {
              return this.terminals * 39;
          }

          else {
              return this.terminals * 39;
          }
      },
      squareMonthly: function () {

        let country = this.countryValue.name;

        if (country == 'USA') {
          return this.vol * 0.0275;
        }

        else if ( country === 'UK') {
          return this.vol * 0.0175;
        }

        else {
            return 0;
        }
      },
      smileAndPayMonthly: function () {

          let vol = this.vol;

        if (vol >= 10001) {
            return vol * 0.012;
        } else if (vol <= 1999) {
            return vol * 0.02;
        } else {
            let commission = -0.497 * Math.log(vol) + 5.776;
            commission = Math.round(commission * 100) / 100;
          return vol * commission / 100;
        }

      },
      sparkPayFront: function () {

        if (this.terminals <= 1) {
          return this.terminals * 0;
        }
        else {
          return 0 + (this.terminals - 1) * 13;
        }
      },
      sparkPayMonthly: function () {

          let vol = this.vol;
          let atv = this.atv;

          let trans = (vol/atv);

          if ( vol < 3000 ) {
              let result = ( (vol * 0.0265) + ( trans * 0.05 ) );
              if ( Number.isFinite(result) ) {
              return result;
            }
            else {
                  return 0;
            }
          }

          else {

            let result = ( 19 + ( (vol * 0.0199) + ( trans * 0.05 ) ));
            if ( Number.isFinite(result) ) {
              return result;
            }
            else {
              return 0;
            }
          }
      },
      paypalMonthly: function () {

        let country = this.countryValue.name;

        if (country === 'USA') {
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
      barclayCardMonthly: function () {

        let vol = this.vol;

        return vol * 0.026;
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
    max-width: 90%;
  }

  .currency {
    color: #00acc1;
  }

  .mposBullets {

  }

  label {
    color: #2c3e50;
  }



  .CalcForm {
    max-width: 1080px;
    margin:auto;
  }

  .note {
    color: #5e5e5e;
  }

  .CalcFormContainer {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 60px -10px;
    background-color: white;
  }

  .mposImg {
    height:50px;
   max-width: 130px;
    margin: 0 auto 20px auto;
    position: relative;
  }

  .mposLogo {
    position: absolute;
    top: 50%;
    transform:translate(-50%, -50%);
    /*width: 100%;*/
    margin: auto;
    text-align: center;
  }

  .mposWrap {
    box-shadow: 0 0 24px 0 rgba(0,0,0,.1);
    transition: all .3s ease;
    margin: 30px 10px;
  }

  .mposWrap:hover {
    box-shadow: 0 0 24px 0 rgba(0,0,0,.15);
    transform: translateY(-4px);
  }

  .mposValues {
    padding: 25px;
  }

  .mposText {
    padding: 5px;
    background: #f7f7f7;
  }

  .signupLink {
    display: block;
    padding: 8px;
    margin-bottom: 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #00acc1;
  }

  .signupLink:hover {
    text-decoration: underline;
  }

  /*.CountrySelect {*/
    /*visibility: hidden;*/
  /*}*/


</style>

<style>



  .mix {
    transition: all 1s;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
    right:0;
  }

  .multiselect:hover {
    cursor: pointer;
  }

  /*.multiselect__select:before {*/
    /*top: 45%;*/
  /*}*/

  div.multiselect__tags {
    border: none;
    padding-top: 4px;
    padding-left: 0;
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
  .multiselect__option > div {
    display: inline-block;
  }

</style>
