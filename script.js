jQuery(document).ready(function() {
   var photosynth=0
    jQuery(".photosynth").hide();
        jQuery(".photosynth").eq(photosynth).show();
    jQuery(".button1").click(function() {
        photosynth=photosynth+1;
        if(photosynth>9){photosynth=0}
        console.log(photosynth)
       jQuery(".photosynth").hide();
        jQuery(".photosynth").eq(photosynth).show();
    });
    jQuery(".button2").click(function() {
        photosynth=photosynth-1
        if(photosynth<0){photosynth=9}
       jQuery(".photosynth").hide();
        jQuery(".photosynth").eq(photosynth).show();
        
    });
 
});