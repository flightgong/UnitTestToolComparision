/**
 * Created by zehuagong on 7/2/15.
 */
function LengthConverter() {
    var LENGTH_CONVERSION_MAP = {
            'Kilometer': 1,
            'Meter':1000,
            'Centimeter': 100000,
            'Millimeter': 1e+6,
            'Mile': 0.621371,
            'Yard':1093.61,
            'Foot': 3280.84,
            'Inch': 39370.1,
            'Nautical mile': 0.539957
        };
    // get the value of the map
    this.getUnitValue = function(unit) {
        return LENGTH_CONVERSION_MAP[unit];
    };

    //get the keys of the map
    this.getLengthUnitsOfMeasurement = function() {
        return Object.keys(LENGTH_CONVERSION_MAP);
    }
}


LengthConverter.prototype.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);

};

LengthConverter.prototype.convert = function(number, baseUnit) {
    //TODO: convert
    var resultHash = {};
    if (this.getUnitValue(baseUnit) && this.isNumber(number)) {
       var unitsOfMeasurement = this.getLengthUnitsOfMeasurement();
        for (var i = 0; i < unitsOfMeasurement.length; i++) {
            var key = unitsOfMeasurement[i];
            resultHash[key] = this.getUnitValue(key) * number / this.getUnitValue(baseUnit);
        }
    }
    return resultHash;
}