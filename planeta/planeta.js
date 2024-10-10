class planeta {

    constructor(nombre, cantidadSatelites, masa, volumen, diametro, distanciaAlSol, esObservable) {
        this.nombre = nombre;
        this.cantidadSatelites = cantidadSatelites;
        this.masa = masa;
        this.volumen = volumen;
        this.diametro = diametro;
        this.distanciaAlSol = distanciaAlSol;
        this.esObservable = esObservable;

  }
        imprimirAtributos() {
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Cantidad de satélites: ${this.cantidadSatelites}`);
            console.log(`Masa: ${this.masa} kg`);
            console.log(`Volumen: ${this.volumen} km³`);
            console.log(`Diámetro: ${this.diametro} km`);
            console.log(`Distancia al Sol: ${this.distanciaAlSol} km`);
            console.log(`Es observable: ${this.esObservable}`);

            calcularDensidad() {
                return this.masa / this.volumen;
}
        }
         main() {
            const p1 = new Planeta("Tierra", 1, 5.9736E24, 1.08321E12, 12742, 150000000, true);
            const p2 = new Planeta("Júpiter", 1, 1.899E27, 1.4313E15, 139820, 750000000, true);
            
            // Imprimir atributos de P1
            console.log("Detalles del Planeta 1:");
            p1.imprimirAtributos();
            console.log(`Densidad de ${p1.nombre}: ${p1.calcularDensidad()} kg/km³\n`);
        
            // Imprimir atributos de P2
            console.log("Detalles del Planeta 2:");
            p2.imprimirAtributos();
            console.log(`Densidad de ${p2.nombre}: ${p2.calcularDensidad()} kg/km³`);

        }

    }

    main();