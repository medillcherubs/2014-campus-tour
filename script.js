jQuery(document).ready(function() {
    var photosynth=0;
    jQuery(".photosynth").hide();
    jQuery(".photosynth").eq(photosynth).show();
    jQuery(".button1").click(function() {
        photosynth=photosynth+1;
        if(photosynth>9){photosynth=0;}
        jQuery(".photosynth").hide();
        var slide = jQuery(".photosynth").eq(photosynth);
        if (!slide.hasClass("photosynth-init")) {
            var html = jQuery(".photosynth").eq(photosynth).find("script").html();
            slide.append(html).addClass("photosynth-init");
        }
        jQuery(".photosynth").eq(photosynth).show();
    });
    jQuery(".button2").click(function() {
        photosynth=photosynth-1;
        if(photosynth<0){photosynth=9;}
        jQuery(".photosynth").hide();
        var slide = jQuery(".photosynth").eq(photosynth);
        if (!slide.hasClass("photosynth-init")) {
            var html = jQuery(".photosynth").eq(photosynth).find("script").html();
            slide.append(html).addClass("photosynth-init");
        }
        jQuery(".photosynth").eq(photosynth).show();
    });
 
    setInterval(function() {
        jQuery('body').height(jQuery('.campustour').outerHeight());
    }, 500);
});
