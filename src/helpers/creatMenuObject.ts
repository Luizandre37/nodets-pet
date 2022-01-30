type MenuOptions = ''|'all'|'dog'|'cat'|'fish'

export const creatMenuObject = (activeMenu: MenuOptions) =>{
    let returnObjetc = {
      all: false,
      dog: false,
      cat: false,
      fish: false,
    };
    if( activeMenu !== ''){
        returnObjetc[activeMenu]=true;
    }

    return returnObjetc

}