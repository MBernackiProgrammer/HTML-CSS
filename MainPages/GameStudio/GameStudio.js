let Index = 0;
let HowManySections = 2;
var CanScroll = Boolean(true);
var Ended = Boolean(true);
var SidePossition = 0;

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
var h = innerHeight;
function ImproveSize()
{
    var element = document.getElementById("block");
    var element2 = document.getElementById("block1");
    var element3 = document.getElementById("block2");
    //var element = document.getElementsById("block");
    document.get
    
    
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


//var LastPossition = 0;
//let cos = 0;

function DoFalse()
{
    Ended = Boolean(false)
}
function myFunction1()
{
    if(Ended == true)
    {
        Ended = Boolean(false);
        if(window.scrollY > SidePossition)
        {
            Up();
        } 
        if(window.scrollY < SidePossition)
        {
            Down();
        } 
    
    }
    if(Ended == false)
    {
        if(window.scrollY > Index*h && window.scrollY < Index*h)
        {
            alert("test");
            Ended = Boolean(true);
            SidePossition = window.scrollY;
            
        }
    }

    
    

    /*
    if(CanScroll)
    {
        CanScroll = false;
        setTimeout(function(){

alert("xd");
        }, 500); 
        for(;;)
        {
            if(document.getElementById("block1") >= window.scrollY - 10 && document.getElementById("block1") <= window.scrollY + 10)
            {
                CanScroll = true;
                alert("down");
                break;
            }
            
        }
    }
/*
    
    if(cos < document.documentElement.scrollTop)
    {
        alert("down");
        Down();
    }
    else
    {
        alert("Up");
        Up();
    }
        
    cos = document.documentElement.scrollTop;
    */
   
}