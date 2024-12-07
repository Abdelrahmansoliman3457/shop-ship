// // loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-container").fadeOut("slow", function () {
      $(".loader-container").remove();
    });
  }, 1000);
});




// toggle drop-down
let myBtndrop = document.querySelector(".coll-icon");
let drop = document.querySelector(".my-drop-now");

if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
    this.classList.toggle("active");
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
    myBtndrop.classList.remove("active");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}





// Show And Hide Search Navbar
let searchIcon = document.querySelector(".search-main");
let searchBox = document.querySelector(".search-form");

if (searchIcon) {
  searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (this.firstElementChild.classList.contains("fa-magnifying-glass")) {
      this.firstElementChild.classList.replace(
        "fa-magnifying-glass",
        "fa-xmark"
      );
    } else {
      this.firstElementChild.classList.replace(
        "fa-xmark",
        "fa-magnifying-glass"
      );
    }
  });
}



//  add active class to cuurent link
$(".links > li > a").each(function () {
  console.log(window.location.href);
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});


