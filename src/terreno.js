class Terreno {
    constructor(dimY, y, tipo) {
        this.dimY = dimY;
		this.tipo = tipo;
        this.x = 0;
        this.y = y;
        
		/*
		0=terra
		1=acqua
		*/
		this.tipo=tipo;

        this.disegnaTerreno = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y-this.dimY, dimXcanv, this.dimY);
            var colore;
			switch(this.tipo)
			{
				case 0: colore="green"; break;
				case 1: colore="blue"; break;
			}
			ctx.fillStyle = colore;
            ctx.fill();
            ctx.closePath();
			
			//Faccio avanzare il terreno
			this.y+=velocitaScrolling;
        }
    }
};
