class ostacoloHandler{
	constructor()
	{
		this.ostacoli=[];
		this.numeroOstacoliPerRiga=3;
		this.distanzaVerticaleOstacoli=dimYcanv/25;
		this.generaRigaOstacoli=function()
		{
			var tipoTerreno=terrHandler.getTipoTerreno(i*25);
			var rigaOstacoli=[];
			for(var z=0; z<this.numeroOstacoliPerRiga; z++)
			{
				if(tipoTerreno==0)
					rigaOstacoli.push(new Ostacolo(100, 25, Math.random()*4*dimXcanv, i*25, tipoTerreno, 25))
				if(tipoTerreno==1)
					rigaOstacoli.push(new Ostacolo(200, 25, Math.random()*2*dimXcanv, i*25, tipoTerreno, 25))					
			}
			return rigaOstacoli;
		}
		
		for(var i=0; i<this.distanzaVerticaleOstacoli; i++)
		{
				this.ostacoli.push(this.generaRigaOstacoli());
		}
		
		this.gestisciOstacolo = function()
		{
			for(var y=0; y<this.ostacoli.length; y++)
			{
				for(var x=0; x<this.numeroOstacoliPerRiga; x++)
				{
					this.ostacoli[y][x].disegnaOstacolo(rana.x, rana.y);
				
					if(this.ostacoli[y][x].x+this.ostacoli[y][x].dimX<0)
					{
						this.ostacoli[y][x].x=dimXcanv;
					}
					
				}
				
					if(this.ostacoli[y][0].y-this.ostacoli[y][0].dimY>dimYcanv)
					{
						this.ostacoli.push(this.generaRigaOstacoli());
						//this.terreno.shift()
					}
		}
	}
	}
};