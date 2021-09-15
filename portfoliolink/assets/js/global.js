$(".accordion.projects").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  });
  
  /* Open when someone clicks on the span element */
  function openNav() {
    document.querySelector(".overlay").classList.remove("d-none");
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector(".overlay").classList.add("d-none");
  }
  
  function toggleModal() {
    $("#image-modal").toggleClass("active");
  }
  
  function zoom(e) {
      let src = e.querySelector('img').src
    $(".image-modal-container img").attr("src", src);
    $("#image-modal").toggleClass("active");
  }
  
  $(".grid-img-container").click(function () {
    $(".image-modal-container img").attr("src", $(this).find("img").attr("src"));
    $("#image-modal").toggleClass("active");
  });
  
  function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".about-desc");
    var text = thhis.text().trim().split("");
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function () {
      thhis.css("opacity", 1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for (var i = 0; i < amntOfChars; i++) {
        (function (i, char) {
          setTimeout(function () {
            newString += char;
            thhis.text(newString);
          }, i * typingSpeed);
        })(i + 1, text[i]);
      }
    }, 1500);
  }
  
  $(document).ready(function () {
    // Now to start autoTyping just call the autoType function with the
    // class of outer div
    // The second paramter is the speed between each letter is typed.
    autoType(".about-container", 100);
  });
  
  $("form").submit(function (e) {
    e.preventDefault();
    checkCaptcha(e);
  });
  
  function checkCaptcha(e) {
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha == "") {
      e.preventDefault();
      alert("Please check the recaptcha");
    } else if (recaptcha !== "" || recaptcha !== null) {
      var fullname = $("form").find('input[name="fullname"]').val();
      var email = $("form").find('input[name="email"]').val();
      var message = $("form").find('textarea[name="message"]').val();
  
      let url = `https://api.whatsapp.com/send?phone=6287869395917&text=Hi Gladys!%20I%20would%20like%20to%20discuss with you regarding my photography needs, here's my detail:%0aFull Name: ${fullname}%0aEmail: ${email}%0aMessage: ${message}`;
      window.open(url, "_blank");
    }
  }
  
  function copyToClipboard(e) {
    e.preventDefault();
    var value = window.location.href;
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();
    var toast = new iqwerty.toast.Toast();
    toast.setText("URL has been copied to your clipboard!").show();
  }
  