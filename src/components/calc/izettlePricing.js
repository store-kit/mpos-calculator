import izettleRates from './izettleRates.json'
import izettleRatesFr from './izettleRatesFr.json'

function calcIzettleRates(vol) {


  let t = vol * 100;

    var e = izettleRates.samples;





  // function a() {
  //     var e = this;
  //     e.get("./izettleRates.json").then(function(t) {
  //         e.setState({
  //             commission: t
  //         })
  //     })
  // }
  //
  // a(t);

  function s(e, t) {
    if (e) {
      var n = e.reduce(function(e, n) {
        return Math.abs(n.cpv - t) < Math.abs(e.cpv - t) ? n : e
      }, e[0]);
      return (n.feePerc * t / 10000);
    }
  }

  return s(e,t);
}

export default calcIzettleRates;
