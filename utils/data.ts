interface NFT {
    name: string;
    price: number;
    image: string;
}

const nfts: Array<NFT> = [
    {name: 'Mini', price: 0, image: '/images/Mini-NFT.png'},
    {name: 'Bantam', price: 19, image: '/images/nft2.jpg'},
    {name: 'Fractal', price: 49, image: '/images/Fractal-NFT.png'},
    {name: 'Optical', price: 199, image: '/images/Optical-NFT.png'},
    {name: 'Paradise', price: 999, image: '/images/Paradise-NFT.png'},
    {name: 'Cosmos', price: 2999, image: '/images/Cosmos-NFT.png'},
];

export {nfts};