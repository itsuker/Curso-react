//desc shourcoud
// se incorpora la estrutura y lo de adentro es la prueba del componente un ejemplo
describe('Pruebas en <DemoComponent', () => {
  
    test('Esta prueba no debe fallar' , ()=>{

        //1. Inicializacion
          const message1 = 'Hola mundo';
      
        //2. estimulo
      
        const message2 = message1.trim();
      
        //3. Observar el comportamiento ... esperado
        expect(message1).toBe(message2);
      });


});




