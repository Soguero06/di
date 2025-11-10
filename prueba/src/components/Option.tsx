interface UserData{
    ciudad1: string;
    ciudad2: string;
    ciudad3: string;
}


function Option() {
    let ciudades : UserData = {
        ciudad1: "Zaragoza",
        ciudad2: "Teruel",
        ciudad3: "Huesca"
    }
    return ciudades;
}
export default Option;