 var app = {
 imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler

}

var apps = {
 imageHandler:function() {
        $("#upload1").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload1")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview1").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}

var appz = {
 imageHandler:function() {
        $("#upload2").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload2")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview2").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}




// findworka carousel js///

$('#myCarousel').carousel({
  interval: 80000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }
});

// end
 