import GenerarCaracter from "../../../Utils/generador_caracteres"

const character = new GenerarCaracter



describe('App Barbery | Test E2E en Requerimientos', () => {

    beforeEach(() => {
        
    });

    it('A_001 | Registro en el Sistema', () => {
        cy.section('Ingreso de dletatos validos')
        console.log(character.generarCaracter(10))
        cy.step('1er login')
        cy.visit('http://automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=&submit_search=')
        cy.get('#search_query_top').type('asdasdad')
        cy.get('#searchbox > .btn').click
        cy.step('2do login')



    });

    it.only('A_002 | Login en el Sistema', () => {
        
        function generarCaracter() {
            // Genera un número aleatorio entre 0 y 25
            const numAleatorio = Math.floor(Math.random() * 26);
            // Convierte el número aleatorio en un caracter usando el código ASCII
            const caracter = String.fromCharCode(97 + numAleatorio); // 'a' es el código ASCII 97
            return caracter;

          }
          function multiplicarCaracter(veces) {
            let caractergen = generarCaracter();

            let resultado = "";
            for (let i = 0; i < veces; i++) {
              resultado += caractergen;
            }

            return resultado;
        
          }
          let reusltadoMultiCaract = multiplicarCaracter(1000) 

        cy.section('Ingreso de dletatos validos')
        cy.step('1er login')
        cy.visit('http://automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=&submit_search=')
        cy.get('#search_query_top').type(reusltadoMultiCaract)
        cy.get('#searchbox > .btn').click
        console.log(reusltadoMultiCaract) 
    });
    
    it('A_003 | Recuperar Contraseña', () => {

    
    });

    it('A_004 | Obtener un producto', () => {
        
    });

    it('A_005 | Ver lista servicios Disponibles', () => {
        
    });

    it('A_006 | Pagar un Producto', () => {
        
    });

    it('A_007 | pagar un Servicio', () => {
        
    });

});