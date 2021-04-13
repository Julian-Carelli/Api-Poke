/**
 * 
 * @param array Parametro tipo Array
 * @param query Parametro tipo string para evaluar si esta incluido
 * @returns resultado filtrado
 */

const arrayFilter = (array:Array<any>, query:string) => array.filter(element => 
    `${element.name}`.toLowerCase().includes(query.toLowerCase()));

export default arrayFilter