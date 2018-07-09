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
