class terrenoHandler{
	constructor()
	{
		//Gestisco i terreni: quando uno di questi esce dallo schermo allora lo riporto in coda agli altri.
		//Contengo l'ultimo terreno nel vettore per eseguirvi delle operazioni.
		this.tipo=true;
		this.invertiTipo=function()
		{
			this.tipo = this.tipo ? false : true;
			if(this.tipo)
				return 1;
			if(!this.tipo)
				return 0;
		}
		
		this.generaLunghezzaCasuale = function()
		{
			var fattore;
			if(this.tipo)
				fattore=20;
			else
				fattore=5;
			
			return (Math.floor(Math.random()*(fattore-2)+2))*modulo;
		}
		
		this.terreno=[
			//new Terreno(400, 500, 0),
			//new Terreno(200, 100, 1),
			//new Terreno(300, -100, 0),
			//new Terreno(100, -300, 1),
			new Terreno(this.generaLunghezzaCasuale(), 500, this.invertiTipo())
		];
		
		for(var i=0; i<7; i++)
		{
			this.terreno.push(new Terreno(this.generaLunghezzaCasuale(), this.terreno[i].y-this.terreno[i].dimY, this.invertiTipo()));
		}
		
		this.getTipoTerreno = function(posizioneY)
		{
			var ris=0;
			for(var k=0; k<this.terreno.length; k++)
			{
				if((posizioneY<this.terreno[k].y)&&(posizioneY>=(this.terreno[k].y-this.terreno[k].dimY)))
				{ 
					ris=k;
				}
			}
			return this.terreno[ris].tipo;
		}
		
		//var ultimoTerreno=this.terreno.length-1;
		this.gestisciTerreno = function()
		{
			for(var i=0; i<this.terreno.length; i++)
			{
				this.terreno[i].disegnaTerreno();
			}
			
			if(this.terreno[0].y-this.terreno[0].dimY>dimYcanv)
			{
				//this.terreno[0].y=this.terreno[ultimoTerreno].y-this.terreno[ultimoTerreno].dimY;
				//this.terreno.push(this.terreno.shift());
				
				this.terreno.shift();
				this.terreno.push(new Terreno(this.generaLunghezzaCasuale(), this.terreno[this.terreno.length-1].y-this.terreno[this.terreno.length-1].dimY, this.invertiTipo()));
			}
	}
	}
	
};