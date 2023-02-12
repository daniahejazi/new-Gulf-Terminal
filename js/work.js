// Add active class to the current button (highlight it)
        var header = document.getElementById("myDIV");
        var btns = header.getElementsByClassName("filter-btn");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          });
        }
        // show and hide cards-div
        // $( ".all-btn" ).click(function() {
        //     $( "#AllCards" ).show(2000);
        //     $( "#AppCards" ).hide(2000);
        //       $( "#SitesCards" ).hide(2000);
        // });
        // $( ".app-btn" ).click(function() {
        //     $( "#AppCards" ).show( 2000);
        //     $( "#AllCards" ).hide( 2000);
        //       $( "#SitesCards" ).hide( 2000);
        // });
        // $( ".site-btn" ).click(function() {
        //     $( "#SitesCards" ).show(2000);
        //     $( "#AppCards" ).hide( 2000);
        //       $( "#AllCards" ).hide(2000);
        // });
        // js
        var x = document.getElementById("AllCards");
        var y = document.getElementById("AppCards");
        var z = document.getElementById("SitesCards");
        function allFunction() {
            if (x.style.display === "none") {
              x.style.display = "block";
              y.style.display = "none";
              z.style.display = "none";
            } else {
              x.style.display = "none";
            }
          }
          function appFunction() {
            if (y.style.display === "none") {
              y.style.display = "block";
              x.style.display = "none";
              z.style.display = "none";
            } else {
              y.style.display = "none";
            }
          }
          function siteFunction() {
            if (z.style.display === "none") {
              z.style.display = "block";
              y.style.display = "none";
              x.style.display = "none";
            } else {
              z.style.display = "none";
            }
          }