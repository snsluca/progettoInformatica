class Terreno {
    constructor(dimY, y, tipo) {
        //La dimensione del terreno generato, insieme al tipo, viene gestita da terrenoHandler.
        this.dimY = dimY;
        /*
		0=Terra
		1=Acqua
		*/
		this.tipo = tipo;
        this.y = y;
        
        this.disegnaTerreno = function() {
            //Disegno il terreno.
            ctx.beginPath();
            ctx.rect(0, this.y-this.dimY, dimXcanv, this.dimY);
            //Il colore dipende dal tipo di terreno: verde per la terra, blu per l'acqua.
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
