$(document).ready(function(handler ) {
  $('#select_all').on('click',function(){
    if(this.checked){
      $('.form-check-input').each(function(){
        this.checked = true;
      });
    }else{
      $('.form-check-input').each(function(){
        this.checked = false;
      });
    }
  });
});
