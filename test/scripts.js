
// Testing for Ezjs

// Extra Dependencies: N/A

// Starts with semicolon to make sure it runs
;(function(){
  // Some variable setup
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run');
  var tests = [];
  var passed = 0;
  var failed = 0;

  // Runs all tests
  function runTests() {
    checkBlock.innerHTML = '';
    passed = 0;
    failed = 0;
    for (var i = 0; i < tests.length; i++) {
      tests[i]();
    }
    console.log('Tests run!');
    console.log(passed + ' passed - ' + failed + ' failed');
  }

  // Creates the output for the tests
  function testOutput(text, check) {
    checkBlock.innerHTML += '<p><span class="code">' + text.substring(0, text.indexOf(')') + 1) + "</span>" + text.substring(text.indexOf(')') + 1, text.length) + ': <span class="' + check + '">' + check.capitalize() + '!</span></p><hr/>';
  }

  // Pulls if/else functionality from tests to make them
  // easier to work with
  // Comparison will evaluate to true or false which will
  // then be the deciding factor on whether the test
  // passes or fails.
  function runTest(comparison, text) {
    if(comparison) {
      testOutput(text, 'passed');
      passed += 1;
    } else {
      testOutput(text, 'failed');
      failed += 1;
    }
  }

  // ADDING TESTS
  // * set new text variable for every test
  // * runTest(comparison, text);

  
  tests.push(
    function() {
      var text = 'reverse() reverses a string';
      runTest("Luke".reverse() === "ekuL", text);
    }
  );

  
    // Stop adding tests here
  // Assign runTests function to the button on the page
  testStartButton.onclick = runTests;
})();
