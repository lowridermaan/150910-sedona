var open = document.querySelector(".search-btn"),
    searchform = document.querySelector(".search-form"),
    datefocus = searchform.querySelector("[name=date-in]"),
    dateout = searchform.querySelector("[name=date-out]");



    open.addEventListener("click", function(event){
      event.preventDefault();
      searchform.classList.toggle("search-form-show");
      datefocus.focus();

   });

    searchform.addEventListener("submit", function(event){
      event.preventDefault();
   });
