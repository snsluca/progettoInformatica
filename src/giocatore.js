class Giocatore {
    constructor(dimX) {
        this.dimX = dimX;

        this.x = dimXcanv / 2 - dimX;
        this.y = dimYcanv - dimX*3;
        this.velocita = this.dimX;
		this.premuto=false;
		this.statoprec=false;
		
        this.disegnaGiocatore = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimX);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
			
			if(vaiDx==true||vaiSx==true||vaiGiu==true||vaiSu==true)
				this.premuto=true;
			else
				this.premuto=false;
		
			if(this.statoprec!=this.premuto)
			{
				if (vaiDx && this.x <= dimXcanv - this.dimX*2)
					this.x += this.velocita;
				if (vaiSx && this.x >= this.dimX)
					this.x -= this.velocita;
				if (vaiGiu && this.y <= dimYcanv - this.dimX*2)
					this.y += this.velocita;
				if (vaiSu && this.y >= this.dimX)
				{
					this.y -= this.velocita;
					punteggio++;
				}
					
			}
			this.statoprec=this.premuto
			this.y+=velocitaScrolling;
        }
    }
};