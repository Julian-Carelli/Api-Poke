export interface IProps {
    collectionPokemonsView:Array<Object>;
    collectionPokemonView:Array<Object>;
    handleModal:(e:any) => void;
    isReady:boolean;
    stateLoading:boolean;
    stateAlert:boolean;
} 