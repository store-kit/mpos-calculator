// Processing.js

// var constant_pricing_scale = [
//     0.0030,
//     0.0032,
//     0.0034,
//     0.0037,
//     0.0040,
//     0.0040,
//     0.007,
//     0.01
// ];

var constant_pricing_scale = [
  0.004,
  0.004,
  0.004,
  0.004,
  0.004,
  0.004,
  0.004,
  0.004
];


var constant_scheme_fixed = [
  0.01,
  0.01,
  0.02,
  0.02,
  0.02,
  0.02,
  0.02,
  0.02
];

var constant_scheme_bp = [
  0.0001,
  0.000225,
  0.0004,
  0.0004,
  0.000425,
  0.000425,
  0.000625,
  0.000625
];

var constant_assumed_weights = [
  0.8338,
  0.0655,
  0.001,
  0.0151,
  0.011,
  0.0565,
  0.0082,
  0.0089
]

// Value changed is [2], visa non-consumer-debit.

var constant_interchange_bp = [
  0.002,
  0.003,
  0.004,
  0.017,
  0.002,
  0.003,
  0.019,
  0.0145
]


var constant_scheme_calc = []

var interchange_plus_cs = []

var blended_equivelant_calc = []

var blended_equivelant_ouput = []

var weighted_values = []



function calcRates (vol,atv) {

  // vol = this.vol;

  var price_scale_calculated = 0;

  if ( vol < 7000 ) {
    price_scale_calculated = constant_pricing_scale[7];
  }
  else if ( ( vol => 7000  ) && ( vol < 15000 ) ) {
    price_scale_calculated = constant_pricing_scale[6]
  }
  else if ( ( vol => 15000 ) && ( vol < 25000 ) ) {
    price_scale_calculated = constant_pricing_scale[5];
  }
  else if ( ( vol => 25000 ) && ( vol < 40000 ) ) {
    price_scale_calculated = constant_pricing_scale[4];
  }
  else if ( ( vol => 40000 ) && ( vol < 55000 ) ) {
    price_scale_calculated = constant_pricing_scale[3];
  }
  else if ( ( vol => 55000 ) && ( vol < 80000 ) ) {
    price_scale_calculated = constant_pricing_scale[2];
  }
  else if ( ( vol => 80000 ) && ( vol < 150000 ) ) {
    price_scale_calculated = constant_pricing_scale[1];
  }
  else if ( vol => 150000 ) {
    price_scale_calculated = constant_pricing_scale[0];
  }

  // console.log("StoreKit bracket: " + price_scale_calculated);
  var avg_trans = atv;

  if ( ( 0.01 / avg_trans + 0.002 ) < ( 0.75 / avg_trans ) ) {
    constant_interchange_bp[2] = ( 0.01 / avg_trans + 0.002 );
  }
  else {
    constant_interchange_bp[2] = ( 0.75 / avg_trans );
  }

  for ( i = 0; i < constant_scheme_fixed.length ; i++ ) {
    constant_scheme_calc[i] = constant_scheme_bp[i] + ( constant_scheme_fixed[i] / avg_trans ) };

  for ( i = 0; i < constant_scheme_fixed.length ; i++ ) {
    interchange_plus_cs[i] = constant_scheme_calc[i] + constant_interchange_bp[i];
  }

  for ( i = 0; i < constant_scheme_fixed.length ; i++ ) {
    blended_equivelant_calc[i] = (interchange_plus_cs[i] + price_scale_calculated) * 100 ;
  }

  for ( i = 0; i < blended_equivelant_calc.length ; i++ ) {
    blended_equivelant_ouput[i] = (blended_equivelant_calc[i].toFixed(2));
  }

  var text = "";

  for(i in blended_equivelant_ouput) {
    var item = blended_equivelant_ouput[i];

    text += item + "%" + "<br/>";
  }

  for ( i = 0; i < blended_equivelant_calc.length ; i++ ) {
    weighted_values[i] = blended_equivelant_calc[i] * constant_assumed_weights[i];
  }

  var total=0;
  for(var i in weighted_values) { total += weighted_values[i]; }

  var est_cost = total * vol / 100;

  return est_cost;


}


export default calcRates;
