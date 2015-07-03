/*
The following the test suites for the the LengthConverter.js
 */
describe('LengthConverter', function() {
  var lengthConverter;

  beforeEach(function() {
    lengthConverter = new LengthConverter();
  });
  // spec 1, test the isNumber fuction
  it("isNumber returns true for valid inputs", function() {
    expect(lengthConverter.isNumber('5')).toBeTruthy();
    expect(lengthConverter.isNumber('8e5')).toBeTruthy();
    expect(lengthConverter.isNumber('0x89f')).toBeTruthy();
  });

  /*
  all the following spec test the convert function
   */

  // spec 2, to test the valid input
  it("convert calcuates correct values for valid number input", function() {
    var distance = lengthConverter.convert(200, 'Centimeter');
    //distance = {"kilometer": 0.02, 'Meter':2}
    expect(distance['Kilometer']).toBe(0.002);
    expect(distance['Meter']).toBe(2);
    expect(distance["Centimeter"]).toBe(200);
    expect(distance['Millimeter']).toBe(2000);
    expect(distance['Mile']).toBe(0.001242742);

  });

  //spec 3, when the input number is 0
  it("convert returns zeros values for zero number", function() {
    var distance = lengthConverter.convert(0, "Mile");
    expect(distance['Kilometer']).toBe(0);
    expect(distance['Meter']).toBe(0);
    expect(distance['Centimeter']).toBe(0);
    expect(distance['Millimeter']).toBe(0);
    expect(distance['Mile']).toBe(0);

  });

  //spec 4, when the number is invalid
  it("convert returns no values for invalid number", function() {
    var distance =  lengthConverter.convert("hello", "Foot");
    expect(distance['kilometer']).toBeUndefined();
    expect(distance['Meter']).toBeUndefined();
    expect(distance['Centimeter']).toBeUndefined();
    expect(distance['Millimeter']).toBeUndefined();
    expect(distance['Mile']).toBeUndefined();
  });

  //spec5, when the baseunit is invalid
  it("convert return no values for invalid unit", function() {
    var distance = lengthConverter.convert(500, 'Litter');
    expect(distance['kilometer']).toBeUndefined();
    expect(distance['Meter']).toBeUndefined();
    expect(distance['Centimeter']).toBeUndefined();
    expect(distance['Millimeter']).toBeUndefined();
    expect(distance['Mile']).toBeUndefined();
  })

});