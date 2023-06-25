$(document).ready(function(){
    $.ajax({url: 'one1.html', success: function(result){
      // alert(result);
      $(".item").html(result);
    }});
  
  
    $('li').click(function(){
      // Class=$(this).attr('Class');
      //  alert(Class);
      PageName=$(this).attr('value');
      // alert(PageName);
      $.ajax({url: PageName, success: function(result){
          // alert(result);
          $(".item").html(result);
        }});
  })
  })
