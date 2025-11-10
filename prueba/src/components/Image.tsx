interface UserData{
    src: string;
    alt: string;
    width: number;
    height: number;
}

function Image() {    
    let user = {
        src: 'https://blog.blablacar.es/wp-content/uploads/2025/01/basilica-zaragoza.webp',
        alt: 'User Image',
        width: 500,
        height: 500
    }
    return <img src={user.src} alt={user.alt} width={user.width} height={user.height} />
}

export default Image;