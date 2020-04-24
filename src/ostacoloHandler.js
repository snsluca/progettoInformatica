class ostacoloHandler{
	constructor()
	{
		this.ostacoli=[];
		this.numeroOstacoliPerRiga=3;
		this.distanzaVerticaleOstacoli=(dimYcanv/modulo)+1;
		this.generaRigaOstacoli=function(pos)
		{
			var tipoTerreno=terrHandler.getTipoTerreno(pos);
			var rigaOstacoli=[];
			var velocita=-Math.random()*(1.5-.5)-.5;
			for(var z=0; z<this.numeroOstacoliPerRiga; z++)
			{
				if(tipoTerreno==0)
					rigaOstacoli.push(new Ostacolo(modulo*4, modulo, Math.random()*4*dimXcanv, pos, tipoTerreno, modulo,velocita))
				if(tipoTerreno==1)
					rigaOstacoli.push(new Ostacolo(modulo*8, modulo, Math.random()*2*dimXcanv, pos, tipoTerreno, modulo,velocita))					
			}
			return rigaOstacoli;
		}
		
		for(var i=0; i<this.distanzaVerticaleOstacoli; i++)
		{
				this.ostacoli.push(this.generaRigaOstacoli(i*modulo));
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
			}
			//if(this.ostacoli[0][0].y-this.ostacoli[0][0].dimY>dimYcanv)
			console.log(this.ostacoli[this.ostacoli.length-1][0].y);
			if(this.ostacoli[this.ostacoli.length-1][0].y>dimYcanv)
			{
				console.log("genera");
				this.ostacoli.pop();
				this.ostacoli.unshift(this.generaRigaOstacoli(this.ostacoli[0][0].y-modulo));
			}
		}
	}
};