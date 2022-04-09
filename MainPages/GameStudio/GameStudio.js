let Index = 0;

function Up()
{
    Index = Index + 1;
    if(Index > 1)
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
        Index = 1;
        
    }
    FindWhereMove();
}

function FindWhereMove()
{
    
    alert(Index);
    switch(Index)
    {
        case 0:
            location.href="#block";
            break;

        case 1:
            location.href="#block1";
            break;
    }
}



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

