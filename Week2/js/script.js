if (document.getElementById("principles-search")) {
  function navSearch() {
    // Declare variables
    let input = document.getElementById("principles-search");
    let filter = input.value.toUpperCase();
    let principles = document.getElementsByClassName("principle");

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < principles.length; i++) {
      let a = principles[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        principles[i].classList.remove("inactive");
      } else {
        principles[i].classList.add("inactive");
      }
    }
  }
}

if (document.getElementById("principles-list")) {
  function wtfIndicator() {
    let section = document.getElementById("principles-list");
    let links = section.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
      let span = document.createElement("span");
      let text = document.createTextNode("Wat the actual fuck does this mean?");
      span.appendChild(text);
      span.classList.add("wtf-indicator");
      links[i].appendChild(span);
    }
  }

  wtfIndicator();
}

// vjeze jquery code die gelukkig wel werkt
if (document.getElementsByClassName("sort-bar")) {
  function sort() {
    let newest = document.getElementById("newest");
    let oldest = document.getElementById("oldest");
    let $wrapper = $(".example-images");

    newest.addEventListener("click", function() {
      $wrapper
        .find("a")
        .sort(function(a, b) {
          return +a.dataset.percentage - +b.dataset.percentage;
        })
        .appendTo($wrapper);
      if (!newest.classList.contains("active")) {
        newest.classList.add("active");
        oldest.classList.remove("active");
      }
    });

    oldest.addEventListener("click", function() {
      $wrapper
        .find("a")
        .sort(function(b, a) {
          return +a.dataset.percentage - +b.dataset.percentage;
        })
        .appendTo($wrapper);
      if (!oldest.classList.contains("active")) {
        oldest.classList.add("active");
        newest.classList.remove("active");
      }
    });
  }
  sort();
}
