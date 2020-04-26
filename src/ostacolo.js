class Ostacolo {
    constructor(x, y, tipo, velocitaX)
	{
        //Contengo le posizioni x e y dell'ostacolo.
        this.x = x;
        this.y = y;
		this.tracceFisse=false;
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
			
			if(this.tipo==0)
			{
				
					ctx.beginPath();
					var grd=ctx.createLinearGradient(0, 5, dimXcanv, 5);
					if(velocitaX>0)
					{
						grd.addColorStop(0, "#46874C");
						grd.addColorStop(1, "green");
							
						//else
						//	ctx.rect(this.x+5, this.y+5, this.dimX/4, modulo-10);
						ctx.fillStyle = grd;
						if(!this.tracceFisse)
						{
							ctx.fillRect(0, this.y+modulo/5, this.x, modulo/10);
							ctx.fillRect(0, this.y+4*modulo/5, this.x, modulo/10);
						}
						else
						{
							ctx.fillRect(0, this.y+modulo/5, dimXcanv, modulo/10);
							ctx.fillRect(0, this.y+4*modulo/5, dimXcanv, modulo/10);
						}
					}
					else{
						grd.addColorStop(1, "#46874C");
						grd.addColorStop(0, "green");
							
						//else
						//	ctx.rect(this.x+5, this.y+5, this.dimX/4, modulo-10);
						ctx.fillStyle = grd;
						if(!this.tracceFisse)
						{
							ctx.fillRect(this.x, this.y+modulo/5, dimXcanv+this.dimX, modulo/10);
							ctx.fillRect(this.x, this.y+4*modulo/5, dimXcanv+this.dimX, modulo/10);
						}
						else
						{
							ctx.fillRect(0, this.y+modulo/5, dimXcanv, modulo/10);
							ctx.fillRect(0, this.y+4*modulo/5, dimXcanv, modulo/10);
						}
					}
					ctx.closePath();
					ctx.beginPath();
					ctx.rect(this.x+1, this.y+1, this.dimX+1, modulo+1);
					ctx.fillStyle = "black";
					ctx.fill();
					ctx.closePath();
				
			}
			
            //Disegno l'ostacolo.
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, modulo);
            //Differenzio automaticamente il colore.
			if(this.tipo==0)
				ctx.fillStyle = "grey";
			else
				ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
            
			if(this.tipo==0)
			{
				ctx.beginPath();
				if(velocitaX>0)
					ctx.rect(this.x+2*modulo-3*modulo/5, this.y+modulo/10, this.dimX/4, modulo-modulo/5);
				else
					ctx.rect(this.x+modulo/10, this.y+modulo/10, this.dimX/4, modulo-modulo/5);
				ctx.fillStyle = "lightblue";
				ctx.fill();
				ctx.closePath();
				
				
			}
			
            //Gestisco le nuove posizioni.
			this.x+=this.velocitaX;
			this.y+=velocitaScrolling;
        }
    }
};