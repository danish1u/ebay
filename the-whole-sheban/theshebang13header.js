<!--
jQuery(document).ready(function($) {

    var jssor_1_SlideshowTransitions = [{
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $Jease$.$InWave,
            $Top: $Jease$.$InWave,
            $Clip: $Jease$.$OutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    }, {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $Jease$.$InJump,
            $Top: $Jease$.$InJump,
            $Clip: $Jease$.$OutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    }, {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $Jease$.$InWave,
            $Top: $Jease$.$InWave,
            $Clip: $Jease$.$OutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    }, {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Left: $Jease$.$InJump,
            $Top: $Jease$.$InJump,
            $Clip: $Jease$.$OutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    }, {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
            $Left: $Jease$.$InOutSine,
            $Top: $Jease$.$OutWave,
            $Clip: $Jease$.$InOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 1.3
        }
    }, {
        $Duration: 1000,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2049,
        $Easing: $Jease$.$OutQuad
    }, {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Easing: $Jease$.$OutQuad
    }, {
        $Duration: 1000,
        y: -1,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 12
        }
    }, {
        $Duration: 1000,
        x: -0.2,
        $Delay: 40,
        $Cols: 12,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 260,
        $Easing: {
            $Left: $Jease$.$InOutExpo,
            $Opacity: $Jease$.$InOutQuad
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 0.5
        }
    }, {
        $Duration: 2000,
        y: -1,
        $Delay: 60,
        $Cols: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: $Jease$.$OutJump,
        $Round: {
            $Top: 1.5
        }
    }];

    var jssor_1_options = {
        $AutoPlay: true,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1000);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
document.writeln(" <div class=\"efusion-wrapcen\"> ");
document.writeln(" <div id=\"efusion-header\"> ");
document.writeln("      ");
document.writeln(" <div id=\"efusion-logo\"><a href=\"http://stores.ebay.com/The-Whole-Shebang-New-York\"><img src=\"http://i61.photobucket.com/albums/h76/Nimo18/new%20one1_zpsmhcqgpik.png\" width=\"180\" height=\"90\" /></a></div> ");
document.writeln("  ");
document.writeln("  ");
document.writeln(" <!--STORE SEARCH //STARTS--> ");
document.writeln(" <div id=\"efusion-search\"> ");
document.writeln("           <form action=\"/The-Whole-Shebang-New-York/_i.html\" style=\"display: inline;\" method=\"get\" name=\"Search\"> ");
document.writeln("             <div id=\"efusion-input\"> ");
document.writeln("               <input name=\"_nkw\" type=\"text\" class=\"v4sbox\" onclick=\"this.value='';\" value=\"Store Search\" size=\"13\" maxlength=\"300\" /> ");
document.writeln("             </div> ");
document.writeln("             <div id=\"efusion-submit\"> ");
document.writeln("               <input name=\"submit\" type=\"submit\"  class=\"btn-search\" /> ");
document.writeln("             </div> ");
document.writeln("           </form> ");
document.writeln(" </div> ");
document.writeln(" <!--STORE SEARCH //ENDS--> ");
document.writeln("  ");
document.writeln(" <!--STORE PAGES NAVIGATION //STARTS--> ");
document.writeln(" <div id=\"efusion-nav\"> ");
document.writeln(" 	<ul> ");
document.writeln("     	<li><a href=\"\">Contact Us</a></li> ");
document.writeln("         <li><a href=\"\">Ending Soon</a></li> ");
document.writeln("         <li><a href=\"\">New Arrivals</a></li> ");
document.writeln("         <li><a href=\"\">Add to Favorites</a></li> ");
document.writeln("         <li><a href=\"\">Home</a></li> ");
document.writeln("     </ul> ");
document.writeln(" </div> ");
document.writeln(" <!--STORE PAGES NAVIGATION //END--> ");
document.writeln("  ");
document.writeln(" <!--STORE NAVIGATION //STARTS--> ");
document.writeln(" <div id=\"efusion-menu\"> ");
document.writeln("   <div id=\"efusion-menu-holder\"> ");
document.writeln("     <ul id=\"efusionmenu\"> ");
document.writeln("     	<li><a href=\"\">MEN</a></li>  ");
document.writeln("         <li><a href=\"\">MISSY</a></li>  ");
document.writeln("         <li><a href=\"\">JUNIOR</a></li>  ");
document.writeln("         <li><a href=\"\">GIRLS</a></li> ");
document.writeln("         <li><a href=\"\">BOYS</a></li>  ");
document.writeln("         <li><a href=\"\">PLUS SIZE</a></li>  ");
document.writeln("         <li class=\"showall\"><a href=\"\">SHOW ALL</a></li> ");
document.writeln("     </ul> ");
document.writeln("   </div> ");
document.writeln(" </div> ");
document.writeln(" <!--STORE NAVIGATION //ENDS--> ");
document.writeln(" </div> ");
document.writeln("  ");
document.writeln(" <!--STORE BANNER //STARTS--> ");
document.writeln(" <div id=\"banner-holder\"> ");
document.writeln(" <div id=\"jssor_1\" style=\"position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1000px; height: 300px; overflow: hidden; visibility: hidden;\"> ");
document.writeln(" <div data-u=\"loading\" style=\"position: absolute; top: 0px; left: 0px;\">");
document.writeln(" <div style=\"filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;\">");
document.writeln(" </div> ");
document.writeln(" <div style=\"position:absolute;display:block;background:url('http://i61.photobucket.com/albums/h76/Nimo18/loading_zps3d9u7xbc.gif?t=1472615527') no-repeat center center;top:0px;left:0px;width:100%;height:100%;\">");
document.writeln(" </div> ");
document.writeln(" </div> ");
document.writeln("   <div data-u=\"slides\" style=\"cursor: default; position: relative; top: 0px; left: 0px; width:1000px; height: 300px; overflow: hidden;\">");
document.writeln(" <div data-p=\"112.50\" style=\"display: none;\"> ");
document.writeln("<img data-u=\"image\" src=\"http://i61.photobucket.com/albums/h76/Nimo18/TheWholeShebang_zpsmuzcczlp.jpg?t=1472515651\" width=\"1000px\" height=\"\" /> ");
document.writeln(" </div> ");
document.writeln(" <div data-p=\"112.50\" style=\"display: none;\"> ");
document.writeln("<img data-u=\"image\" src=\"http://i61.photobucket.com/albums/h76/Nimo18/TheWholeShebang_zpsmuzcczlp.jpg?t=1472515651\" width=\"1000px\" height=\"\" /> ");
document.writeln(" </div> ");
document.writeln(" <div data-p=\"112.50\" style=\"display: none;\"> ");
document.writeln("<img data-u=\"image\" src=\"http://i61.photobucket.com/albums/h76/Nimo18/TheWholeShebang_zpsmuzcczlp.jpg?t=1472515651\" width=\"1000px\" height=\"\" /> ");
document.writeln(" </div> ");
document.writeln(" <div data-p=\"112.50\" style=\"display: none;\"> ");
document.writeln("<img data-u=\"image\" src=\"http://i61.photobucket.com/albums/h76/Nimo18/TheWholeShebang_zpsmuzcczlp.jpg?t=1472515651\" width=\"1000px\" height=\"\" /> ");
document.writeln(" </div> ");
document.writeln(" </div> ");
document.writeln(" </div> ");
document.writeln(" <!--STORE BANNER //ENDS--> ");




document.writeln(" </div> ");
document.writeln("  ");
 // -->
