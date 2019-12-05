("use strict");
(function() {
  var modal1 = document.querySelector("#callback");
  var jsBackCall = document.querySelector("#js-back-call");
  var model1Close = document.querySelector("#js-modal-close");
  var jsModalName = document.querySelector("#js-modal-name");
  var back = document.querySelector("#back");

  document.addEventListener("click", function(evt) {
    if (!modal1.contains(evt.target) && !jsBackCall.contains(evt.target)) {
      modal1.style.display = "none";
      back.style.display = "none";
      document.body.classList.remove("modal_scrool");
    }
  });

  jsBackCall.addEventListener("click", function() {
    modal1.style.display = "block";
    back.style.display = "block";
    document.body.classList.add("modal_scrool");
    jsModalName.focus();
  });

  model1Close.addEventListener("click", function() {
    modal1.style.display = "none";
    back.style.display = "none";
    document.body.classList.remove("modal_scrool");
  });

  document.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
      modal1.style.display = "none";
      back.style.display = "none";
      document.body.classList.remove("modal_scrool");
    }
  });

  var phoneMask = IMask(document.getElementById("feedback-phone"), {
    mask: "+{7}(000)000-00-00"
  });

  var phoneMask2 = IMask(document.getElementById("feedback-phone2"), {
    mask: "+{7}(000)000-00-00"
  });
})();
