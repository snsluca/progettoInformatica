class Ostacolo {
    constructor(x, y, tipo, dgX, velocitaX)
	{
        //Contengo le posizioni x e y dell'ostacolo.
        this.x = x;
        this.y = y;
        //La velocità e il tipo sono gli stessi per tutti gli ostacoli di una fila. Vengono valorizzati da ostacoloHandler.
		this.velocitaX = velocitaX;
		this.tipo=tipo;
		//Valorizzo le dimensioni automaticamente.
        if(this.tipo==0)
			this.dimX=modulo*2;
		else
			this.dimX=modulo*3;
        
        this.disegnaOstacolo = function(giocatoreX, giocatoreY) 
		{
            //Disegno l'ostacolo.
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, modulo, this.tipo);
            //Differenzio automaticamente il colore.
			if(this.tipo==0)
				ctx.fillStyle = "grey";
			else
				ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
            
			if((giocatoreX>=this.x)&&(giocatoreX<=(this.x+this.dimX-modulo)))
						{
							if((giocatoreY>=this.y)&&(giocatoreY<=this.y+modulo))
							{
								
								//alert("GAME OVER");
								//console.log("colpito");
							}					
						}
			
			//Controllo le collisioni del giocatore:
			/*switch(tipo)
			{
				//case 0: alert("GAME OVER"); break;
				case 0: 
						if((giocatoreX>=this.x-modulo)&&(giocatoreX<=this.x+this.dimX-modulo))
						{
							if((giocatoreY>=this.y)&&(giocatoreY<=this.y+modulo))
							{
								
								//alert("GAME OVER");
								console.log("colpito");
							}					
						} break;
				case 1: 
					if(!((giocatoreX>=this.x)&&(giocatoreX<=this.x+this.dimX-dgX)))
					{
						if(!((giocatoreY>=this.y)&&(giocatoreY<=this.y+modulo)))
						{
								//alert("GAME OVER");
								//console.log("affondato");
							}					
					} break;
			}	
			*/
            //Gestisco le nuove posizioni.
			this.x+=this.velocitaX;
			this.y+=velocitaScrolling;
        }
    }
};