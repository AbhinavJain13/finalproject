
	
    $(document).ready(function()
    {
      $('.flip').click(function() 
      {
    
        var src = $(this).attr('src');
        var altSrc = $(this).attr('alt-src')
        
            $(this).attr('src', altSrc);
            $(this).attr('alt-src', src);
            
        
      });
    });
    

  
