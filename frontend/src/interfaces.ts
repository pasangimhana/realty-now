export interface CardData {
    title: string
    description: string
    imageUrl: string
}

export interface Location {
    address: string
    imageUrl: string
}

export interface RecentNews {
    propertyType: string
    date: string
    title: string
    url: string
    imageUrl: string
}

export interface PropertyForSale {
    availability: string
    featured: boolean
    title: string
    location: string
    price: Number
    beds: Number
    baths: Number
    area: number
    url: string
    imageUrl: string
}

export interface Broker {
    imageUrl: string
    name: string
}

// hold customer reviews
export interface Review{
    imgUrl:string
    name:string
    review:string
}

export interface Location {
    address: string
    imageUrl: string
}