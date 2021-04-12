const arrayFilter = (array:Array<any>, query:string) => array.filter(element => 
    `${element.name}`.toLowerCase().includes(query.toLowerCase()));

export default arrayFilter