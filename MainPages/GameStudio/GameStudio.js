var Index = 0;

function ImproveSize()
{
    var element = document.getElementById("block");
    //var element = document.getElementsById("block");
    document.get
    
    var h = innerHeight;
    var w = innerWidth;
    
    var widthReady = String(w);
    widthReady = widthReady + "px";
    
    element.style.height = widthReady;
    

    var heightReady = String(h);
    heightReady = heightReady + "px";
    
    element.style.height = heightReady;
    //element.style.width = widthReady; 
    
    document.getElementById("block1").style.height = heightReady;
    document.getElementById("block1").style.width = widthReady;

    

     
}

function changeWidth(ele, wd) {
    z.innerHTML = h;
    ele.style.width = wd;
    ele.style.height = h;
}

ImproveSize();