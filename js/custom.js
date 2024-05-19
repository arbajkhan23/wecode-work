document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".counter").forEach(function (counter) {
    var minusButton = counter.querySelector(".minus");
    var plusButton = counter.querySelector(".plus");
    var numberSpan = counter.querySelector(".number");

    minusButton.addEventListener("click", function () {
      var currentNumber = parseInt(numberSpan.textContent);
      if (currentNumber > 1) {
        numberSpan.textContent = currentNumber - 1;
      }
    });

    plusButton.addEventListener("click", function () {
      var currentNumber = parseInt(numberSpan.textContent);
      numberSpan.textContent = currentNumber + 1;
    });
  });
});
