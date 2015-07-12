1. How to run
   option 1: a. USING IDE webstorm, import the foler directory to IDE
             b. For Jasmine Test, run SpecRunner.html
                For Qunit Test, run QunitTest/taskRunner.html
             (becasue webstorm include own server)
   option2: a. Add your folder to your server
            b. same as b of option 1
2. folder structure introduction
   1. src: The target project to be tested
      src/js: The target js files to be tested
              There are 3 scenarios:
                1. LengthConverter.js: The basic(common) javascript object and functions to be tested.
                2. ajaxCall.js: The case of ajax call rest api to tested
                3. DOMEvent.js: The case of dom manimpulation and event binding to be tested
      src/data.json: The mock json response from the rest api's server.

   2. JasmineTest: The JasmineTest to test the project given from src
                   The lib dependency:
                       1. lib/jasmine-2.3.4.js: core jasmine libary
                       2. lib/sinon-1.15.4.js: sinion used to fake server
                       3. lib/jasmine-sinon.js: matcher of sinon to compatibe with jasmie
                       4. lib/jasmie-jquey.js: plugin used to test dom manipuation and event binding
                    The test files:
                       1.spec/ajaxCall.js, spec/DOMEvent.js, spec/LengthConverter.js are used to test the
                       corresponding js files in src.
      QunitTest: The QUnit test to test the project given from src
                 The lib dependecny:
                    same as Jasmine one, except sinon-qunit-1.0.0.js is used to machter compatible for qunit






