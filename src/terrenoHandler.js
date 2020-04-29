class terrenoHandler{
	constructor()
	{
		this.tipo=true;
		//Funzione per gestire la tipologia del terreno, in modo tale che i terreni generati siano alternativamente acqua e terra.
		this.invertiTipo=function()
		{
			this.tipo = this.tipo ? false : true;
			if(this.tipo)
				return 1;
			if(!this.tipo)
				return 0;
		}
		
		//Genero una lunghezza casuale in base al tipo di terreno.
		this.generaLunghezzaCasuale = function()
		{
			var fattore;
			if(this.tipo)
				fattore=20;
			else
				fattore=5;
			
			return (Math.floor(Math.random()*(fattore-2)+2))*modulo;
		}
		
		//Mi assicuro che il primo terreno sia sempre erba e mai acqua.
		this.terreno=[
			new Terreno(this.generaLunghezzaCasuale(), 500, this.invertiTipo())
		];
		//Genero altri 3 terreni per un totale di 4.
		for(var i=0; i<3; i++)
			this.terreno.push(new Terreno(this.generaLunghezzaCasuale(), this.terreno[i].y-this.terreno[i].dimY, this.invertiTipo()));
		
		//Ottengo il tipo di terreno in cui si trova una certa posizioneY.
		this.getTipoTerreno = function(posizioneY)
		{
			var ris=0;
			//Scorro tutti i terreni in cerca di quello corretto.
			for(var k=0; k<this.terreno.length; k++)
			{
				if((~~posizioneY<~~this.terreno[k].y)&&(~~posizioneY>=~~(this.terreno[k].y-this.terreno[k].dimY)))
				{ 
					ris=k;
					break;	
				}
			}
			return this.terreno[ris].tipo;
		}
		
		this.gestisciTerreno = function()
		{
			//Disegno tutti i terreni.
			for(var i=0; i<this.terreno.length; i++)
				this.terreno[i].disegnaTerreno();
						
			//Quando un terreno esce dallo schermo, lo cancello e ne genero un altro in cima.
			if(this.terreno[0].y-this.terreno[0].dimY>dimYcanv)
			{
				this.terreno.shift();
				this.terreno.push(new Terreno(this.generaLunghezzaCasuale(), this.terreno[this.terreno.length-1].y-this.terreno[this.terreno.length-1].dimY, this.invertiTipo()));
			}
	}
	}
	
};