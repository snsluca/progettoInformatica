class Terreno {
    constructor(dimX, dimY, y, tipo) {
        this.dimX = dimX;
        this.dimY = dimY;

        this.x = 0;
        this.y = y;
        
		/*
		0=terra
		1=acqua
		*/
		this.tipo=tipo;
		
        this.velocita = 1;

        this.disegnaTerreno = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y-this.dimY, this.dimX, this.dimY);
            var colore;
			switch(tipo)
			{
				case 0: colore="green"; break;
				case 1: colore="blue"; break;
			}
			ctx.fillStyle = colore;
            ctx.fill();
            ctx.closePath();
			
			//Faccio avanzare il terreno
			this.y+=this.velocita;
        }
    }
};