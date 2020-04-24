class terrenoHandler{
	constructor()
	{
		//Gestisco i terreni: quando uno di questi esce dallo schermo allora lo riporto in coda agli altri.
		//Contengo l'ultimo terreno nel vettore per eseguirvi delle operazioni.
		this.terreno=[
			new Terreno(400, 500, 0),
			new Terreno(200, 100, 1),
			new Terreno(300, -100, 0),
			new Terreno(100, -300, 1),
		];
		
		var ultimoTerreno=this.terreno.length-1;
		
		this.getTipoTerreno = function(posizioneY)
		{
			var ris=0;
			for(var k=0; k<this.terreno.length; k++)
			{
				if((posizioneY<this.terreno[k].y)&&(posizioneY>(this.terreno[k].y-this.terreno[k].dimY)))
				{ 
					console.log("NUMERO:"+k);
					ris=k;
				}
					
			}
			return this.terreno[ris].tipo;
		}
		
		this.gestisciTerreno = function()
		{
			for(var i=0; i<this.terreno.length; i++)
			{
				this.terreno[i].disegnaTerreno();
			}
			
			if(this.terreno[0].y-this.terreno[0].dimY>dimYcanv)
			{
				this.terreno[0].y=this.terreno[ultimoTerreno].y-this.terreno[ultimoTerreno].dimY;
				this.terreno.push(this.terreno.shift());
		}
	}
	}
	
};