interface UserData{
    name: string;
    age: number;
    isActive: boolean;
}

// Componente Button: demuestra variables con tipos y operaciones sobre arrays
function Button() {
    // Ejemplo de variables tipadas en TypeScript
    // name: cadena, age: número, price: número (decimales), isActive: booleano
    let name: string = 'Javier'
    let age: number = 28
    let price: number = 28.6
    let isActive: boolean = true

    // Array de strings con anotación de tipo
    let names: string[] = ['Javier', 'Erica', 'María']
    let teachers: Map<string, string> = new Map();
    teachers.set('javier.fuertes@...', 'Javier');
    teachers.set('erica@...', 'Erica');
    teachers.set('maria@...', 'María');

    let user:UserData = {
        name: "Javier",
        age: 28,
        isActive: false
    }

    if(user.isActive){
        return <button>Esta logueado</button>
    } else{
        return <button>No esta logueado</button>
    }

    // Modificamos el primer elemento
    names[0] = 'javier'
    // Añadimos un elemento al final
    names.push('Javier')
    // Eliminamos el último elemento: pop devuelve el elemento eliminado (o undefined)
    // Guardamos el elemento eliminado en la variable lastName por si la necesitamos
    let lastName = names.pop()

    // El return devuelve JSX; aquí mostramos el valor de la variable `name`
    return <button>{user.name}</button>
}

// Exportamos el componente para usarlo en otros módulos (ej.: `main.tsx`)
export default Button