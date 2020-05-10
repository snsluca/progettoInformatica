class ostacoloHandler {
    constructor() {
        /*
        	Matrice ostacoli formatain questo modo:
        	[
        	[ostacolo1, ostacolo2, ostacolo3],
        	[ostacolo1, ostacolo2, ostacolo3],
        	[ostacolo1, ostacolo2, ostacolo3],
        	ecc
        	]
        	
        	dove [ostacolo1, ostacolo2, ostacolo3] è una riga di ostacoli formata da 3 oggetti ostacolo.
        */
        this.ostacoli = [];
        //Variabile per contenere il numero di ostacoli da generare per ogni riga.
        this.numeroOstacoliPerRiga = 1;

        this.generaRigaOstacoli = function(pos) {
            //Ottengo il tipo di terreno su cui verrà generata la fila.
            var tipoTerreno = terrHandler.getTipoTerreno(pos);
            //Il vettore rigaOstacoli contiene la fila di ostacoli da inserire nella matrice. Viene restituito da questa funzione.
            var rigaOstacoli = [];
            //Genero la velocità di ogni riga casualmente.
            var velocita = -(Math.random() * (1.5 - .5) + .5);
            //Tiro un dado: ogni tanto una fila di ostacoli andrà nel verso opposto.
            if (Math.floor(Math.random() * 3) == 0)
                velocita *= -1;
            //Genero gli ostacoli.
            for (var z = 0; z < this.numeroOstacoliPerRiga; z++) {
                //Se il terreno è terra, allora gli ostacoli sono molto spaziati tra loro e molto veloci.
                if (tipoTerreno == 0)
                    rigaOstacoli.push(new Ostacolo(Math.random() * 1 * dimXcanv, pos, tipoTerreno, velocita * 2));
                //Se il terreno è acqua, allora gli ostacoli sono molto ravvicinati e più lenti.
                if (tipoTerreno == 1)
                    rigaOstacoli.push(new Ostacolo(Math.random() * 1 * dimXcanv, pos, tipoTerreno, velocita));
            }
            return rigaOstacoli;
        }

        /*
        Calcolo il numero di righe di ostacoli da generare e vi aggiungo 1 per compensare lo scrolling. Altrimenti, si vedrebbe
        il nuovo ostacolo generato in cima allo schermo comparire all'improvviso.
        
        Genero le righe di ostacoli necessarie per riempire lo schermo all'inizio.
        */
        for (var i = 0; i < (dimYcanv / modulo) + 1; i++) {
            this.ostacoli.push(this.generaRigaOstacoli(i * modulo));
        }

        this.getVelocitaOstacolo = function(posizioneY) {
            var risK = 0;
            var risZ = 0;
            //Scorro tutti i terreni in cerca di quello corretto.
            for (var k = 0; k < this.ostacoli.length; k++) {
                for (var z = 0; z < this.numeroOstacoliPerRiga; z++) {
                    //console.log(~~posizioneY+"-"+~~this.ostacoli[k][z].y);
                    if (~~posizioneY == ~~this.ostacoli[k][z].y) {
                        risK = k;
                        risZ = z;
                        break;
                    }
                }
            }
            //console.log(ris);
            return this.ostacoli[risK][risZ].velocitaX;
        }

        //Funzione per gestire correttamente la matrice di ostacoli.
        this.gestisciOstacolo = function(giocatoreX, giocatoreY) {
            for (var y = 0; y < this.ostacoli.length; y++) {
                for (var x = 0; x < this.numeroOstacoliPerRiga; x++) {
                    //Disegno l'ostacolo corrente
                    this.ostacoli[y][x].disegnaOstacolo(rana.x, rana.y);
                    //Se gli ostacoli che vanno verso sx spariscono, allora ricompaiono a dx.
                    if (this.ostacoli[y][x].x + this.ostacoli[y][x].dimX < 0) {
                        this.ostacoli[y][x].x = dimXcanv;
                        this.ostacoli[y][x].tracceFisse = true;
                    }

                    //Se gli ostacoli che vanno verso dx spariscono, allora ricompaiono a sx.
                    if (this.ostacoli[y][x].x > dimXcanv) {
                        this.ostacoli[y][x].x = -this.ostacoli[y][x].dimX;
                        this.ostacoli[y][x].tracceFisse = true;
                    }
                    //Controllo le collisioni con gli ostacoli.
                    //var colpito=false;	
                    if (~~giocatoreY == ~~this.ostacoli[y][x].y) {
                        if ((~~giocatoreX >= ~~this.ostacoli[y][x].x - modulo) && (~~giocatoreX <= ~~(this.ostacoli[y][x].x + this.ostacoli[y][x].dimX))) {
                            //console.log("colpito");
                            //colpito=true;
                            stop = true;
                        }
                    }
                }
            }
            //Se la fila di ostacoli sprofonda fuori dallo schermo, allora la cancello e ne genero un'altra in cima.
            if (this.ostacoli[this.ostacoli.length - 1][0].y > dimYcanv) {
                this.ostacoli.pop();
                this.ostacoli.unshift(this.generaRigaOstacoli(this.ostacoli[0][0].y - modulo));
            }
        }
    }
};