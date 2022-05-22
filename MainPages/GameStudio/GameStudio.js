let Index = 0;
let HowManySections = 2;
var CanScroll = Boolean(true);
var Ended = Boolean(true);
var SidePossition = 0;
var LastPossition = 0;

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
    window.scrollTo(0, Index*h);
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

function chech()
{
   
    console.log(parseInt(window.scrollY));
    console.log(parseInt(LastPossition));
    if(parseInt(window.scrollY) == parseInt(LastPossition))
    {
        
        Ended = Boolean(true);
    }
    LastPossition=window.scrollY;
}
//var LastPossition = 0;
//let cos = 0;

function myFunction1()
{
    if(Ended == true)
    {
        Ended = Boolean(false);
        if(window.scrollY - Index*h > 0)
        {
            Up();
        }
        else
        {
            Down();
        }
    }
    else{
        if(window.scrollY > Index*h-2 && window.scrollY < Index*h+2)
        {
            
                    
            SidePossition = Index*h;
            
        }
    }

    setTimeout(chech, 1000);
    
   /*
   if(Ended == false)
   {
       if(Index*h < parseInt(window.scrollY))
       {
            
            Ended = Boolean(true);
       }    
       else{
      //  window.scrollBy(0,90000);
      window.scrollTo(0, Index*h);
        
       }
   
   }
   else
   {
    if(window.scrollY - Index*h > 0)
    {
        Index = Index + 1;
        Ended = Boolean(false);
    }
   }
*/
    

    

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