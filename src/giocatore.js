class Giocatore {
    constructor(dimX) {
        //Ottengo la dimensione del giocatore (solitamente modulo).
        this.dimX = dimX;
        //Calcolo la sua posizione iniziale, in basso e al centro dello schermo.
        this.x = dimXcanv / 2 - dimX;
        this.y = dimYcanv - dimX*3;
        //La sua velocità è la sua dimensione in modo tale da ottenere uno spostamento non fluido.
        this.velocita = this.dimX;
        //Variabili per la gestione dei tasti.
		this.premuto=false;
		this.statoprec=false;
		this.tipoTerreno;
		
        this.disegnaGiocatore = function() {
            //Disegno il giocatore.
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimX);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
			
            //Gestisco lo stato dei tasti per evitare che il giocatore si muova a ripetizione se un tasto rimane premuto.
			if(vaiDx==true||vaiSx==true||vaiGiu==true||vaiSu==true)
				this.premuto=true;
			else
				this.premuto=false;
		
			if(this.statoprec!=this.premuto)
			{
                //Gestisco lo spostamento nelle quattro direzioni.
				if (vaiDx && this.x <= dimXcanv - this.dimX*2)
					this.x += this.velocita;
				if (vaiSx && this.x >= this.dimX)
					this.x -= this.velocita;
				if (vaiGiu && this.y <= dimYcanv - this.dimX*2)
				{
					this.y += this.velocita;
					punteggio--;
				}
					
				if (vaiSu && this.y >= this.dimX)
				{
					this.y -= this.velocita;
                    //Ad ogni passo avanti, aggiungo un punto.
					punteggio++;
				}
			}
			
			//this.tipoTerreno=terrHandler.getTipoTerreno(this.y);
			this.statoprec=this.premuto
            //Sposto il giocatore insieme allo schermo.
			this.y+=velocitaScrolling;
			if(this.y>dimYcanv)
				stop=true;
			if(terrHandler.getTipoTerreno(this.y)==1)
				this.x+=ostacHandler.getVelocitaOstacolo(this.y);
			//console.log(this.x+"-"+this.y)
        }
    }
};