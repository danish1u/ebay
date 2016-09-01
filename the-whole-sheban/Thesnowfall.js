    //default options
        snowFall.snow(document.body);

        var testContainer = document.querySelector('.test-container'),
            testContainerIsSnowing = false;

        snowFall.snow(testContainer);

        testContainer.addEventListener('click', function(e){
            testContainerIsSnowing = !testContainerIsSnowing;

            if(!testContainerIsSnowing){
                snowFall.snow(testContainer, "clear");
            }else{
                snowFall.snow(testContainer);
            }
        })

        document.getElementById("roundshadows").addEventListener("click", function(){
            document.body.className  = "lightBg";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {round : true, shadow : true, minSize: 5, maxSize:8});
        });
