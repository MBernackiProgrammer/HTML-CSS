let Index = 0;
let HowManySections = 2;

function Detect() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function Up()
{
    Index = Index + 1;
    if(Index > HowManySections)
    {
        Index = 0;
    }
    FindWhereMove();
}

function Down()
{
    Index = Index - 1;
    if(Index < 0)
    {
        Index = HowManySections;
        
    }
    FindWhereMove();
}

function FindWhereMove()
{
    switch(Index)
    {
        case 0:
            location.href="#block";
            break;

        case 1:
            location.href="#block1";
            break;

        case 2:
            location.href="#block2";
            break;
    }
}

function ImproveSize()
{
    var element = document.getElementById("block");
    var element2 = document.getElementById("block1");
    var element3 = document.getElementById("block2");
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
    element2.style.height = heightReady;
    element3.style.height = heightReady;
    //element.style.width = widthReady; 
    

}


