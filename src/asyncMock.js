const products = [
    {
        id: 1,
        title: 'Kimetsu no Yaiba',
        price: '50000',
        category: 'ultimos-lanzamientos',
        description:'uno de los animes más populares de los últimos años, vuelve a los videojuegos',
        image: 'https://media.vandal.net/m/16/169049/guardianes-de-la-noche-kimetsu-no-yaiba-a-por-todas-202471910155415_1.jpg',
    },
    {
        id: 2,
        title: 'Persona 3 Reload',
        price: '65000',
        category: 'ultimos-lanzamientos',
        description:'Uno de los juegos de rol japonés más aclamados de todos los tiempos regresa con este espectacular remake',
        image: 'https://mediamaster.vandal.net/m/14/143386/persona-3-reload-202427153879_33.jpg',
    },
    {
        id: 3,
        title: 'Sonic Dream Team',
        price: '0',
        category: 'juegos-gratuitos',
        description:'La querida mascota de SEGA regresa con una nueva aventura exclusiva para móviles',
        image: 'https://media.vandal.net/m/15/153078/sonic-dream-team-202312714321651_1.jpg',
    },
    {
        id: 4,
        title: 'Virtua Fighter 5: Ultimate Showdown',
        price: '1000',
        category: 'clasicos',
        description:'Una versión remasterizada de la quinta entrega de esta aclamada saga',
        image: 'https://media.vandal.net/t200/101254/virtua-fighter-5-ultimate-showdown-20216110212624_7.jpg',
    },
    {
        id: 5,
        title: 'Persona 5 Tactica',
        price: '35000',
        category: 'ultimos-lanzamientos',
        description:'Toma los personajes de Persona 5 y Persona 5 Royal, y los lleva a una aventura original en una nueva dimensión',
        image: 'https://mediamaster.vandal.net/m/14/142963/persona-5-tactica-2023111610201563_16.jpg',
    },
    {
        id: 6,
        title: 'Like a Dragon: Infinite Wealth',
        price: '70000',
        category: 'ultimos-lanzamientos',
        description:'La octava entrega de la saga Yakuza, que vuelve a apostar por un sistema de combate por turnos',
        image: 'https://mediamaster.vandal.net/m/12/126342/like-a-dragon-infinite-wealth-20242715441715_40.jpg',
    },
    {
        id: 7,
        title: 'Phantasy Star Online 2',
        price: '0',
        category: 'juegos-gratuitos',
        description:'Phantasy Star Online 2 para PC es un juego de rol multijugador masivo online, secuela de uno del primer juego de rol online para consola.',
        image: 'https://mediamaster.vandal.net/m/55526/phantasy-star-online-2-20209189523980_7.jpg',
    },
    {
        id: 8,
        title: 'Sonic Origins Plus',
        price: '20000',
        category: 'clasicos',
        description:'Sonic Origins Plus es recopilatorio de juegos de plataformas desarrollado por SEGA',
        image: 'https://mediamaster.vandal.net/m/138018/sonic-origins-plus-202362618455042_27.jpg',
    },
    {
        id: 9,
        title: 'Sonic Superstars',
        price: '25000',
        category: 'clasicos',
        description:'El título, afianzado en un estilo muy clásico que hace gala de todas las señas de identidad de la saga.',
        image: 'https://mediamaster.vandal.net/m/14/143065/sonic-superstars-202310171121124_1.jpg',
    },
    {
        id: 10,
        title: 'Football Manager 2024 Mobile',
        price: '0',
        category: 'juegos-gratuitos',
        description:'Football Manager 2024 Mobile es un simulador de gestión futbolística desarrollado por Sports Interactive y publicado por Sega para dispositivos móviles',
        image: 'https://media.vandal.net/m/14/149391/football-manager-2024-mobile-202311718175499_1.jpg',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})

export const getProduct = (id) => {
    return products.find ((prod) => prod.id == id);
}


export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
}