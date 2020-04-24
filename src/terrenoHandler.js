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
		
		
		
		this.getTerreno = function(posizioneY)
		{
			var ris=0;
			for(var i=0; i<this.terreno.length; i++)
			{	
				//console.log(this.terreno[i].y+"/"+posizioneY+"/"+(this.terreno[i].y-this.terreno[i].dimY))
				if(posizioneY<=this.terreno[i].y&&posizioneY>=(this.terreno[i].y-this.terreno[i].dimY));
				{ 
					//console.log(posizioneY<=this.terreno[i].y&&posizioneY>=(this.terreno[i].y-this.terreno[i].dimY));
					//console.log("NUMERO:"+i);
					ris=i;
				}
			}
			return ris;
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