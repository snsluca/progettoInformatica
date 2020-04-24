class Ostacolo {
    constructor(dimX, dimY, x, y, tipo, dgX)
	{
        this.dimX = dimX;
        this.dimY = dimY;
		this.tipo=tipo;
        this.x = x;
        this.y = y;
		this.velocitaX = -.5;
		
		
		
        this.disegnaOstacolo = function(giocatoreX, giocatoreY) 
		{
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimY, this.tipo);
			if(this.tipo==0)
				ctx.fillStyle = "grey";
			else
				ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
			
			switch(tipo)
			{
				case 1: if((giocatoreX>=this.x)&&(giocatoreX<=this.x+this.dimX-dgX))
						{
							if((giocatoreY>=this.y)&&(giocatoreY<=this.y+this.dimY))
							{
								//alert("GAME OVER");
								console.log("colpito");
							}					
						} break;
				//case 0: alert("GAME OVER"); break;
			}	
			
			this.x+=this.velocitaX;
			this.y+=velocitaScrolling;
        }
    }
};