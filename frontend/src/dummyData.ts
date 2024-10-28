import { PropertyForSale, Broker, Review, Location } from "./interfaces"


export const bestDeals: PropertyForSale[] = [
    {
        availability: "FOR SALE",
        featured: true,
        title: "Luxury Family Home",
        location: "1800-1818 79th St",
        price: 395000,
        beds: 4,
        baths: 1,
        area: 400,
        url: "https://example.com/property/luxury-family-home",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR SALE",
        featured: false,
        title: "Skyper Pool Apartment",
        location: "1020 Bloomingdale Ave",
        price: 280000,
        beds: 4,
        baths: 2,
        area: 450,
        url: "https://example.com/property/skyper-pool-apartment",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR RENT",
        featured: false,
        title: "North Dillard Street",
        location: "4330 Bell Shoals Rd",
        price: 250,
        beds: 4,
        baths: 2,
        area: 400,
        url: "https://example.com/property/north-dillard-street",
        imageUrl: "https://via.placeholder.com/345x200"
    },
]

export const recommendations: PropertyForSale[] = [
    {
        availability: "FOR SALE",
        featured: true,
        title: "Luxury Family Home",
        location: "1800-1818 79th St",
        price: 395000,
        beds: 4,
        baths: 1,
        area: 400,
        url: "https://example.com/property/luxury-family-home",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR SALE",
        featured: false,
        title: "Skyper Pool Apartment",
        location: "1020 Bloomingdale Ave",
        price: 280000,
        beds: 4,
        baths: 2,
        area: 450,
        url: "https://example.com/property/skyper-pool-apartment",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR RENT",
        featured: false,
        title: "North Dillard Street",
        location: "4330 Bell Shoals Rd",
        price: 250,
        beds: 4,
        baths: 2,
        area: 400,
        url: "https://example.com/property/north-dillard-street",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR SALE",
        featured: true,
        title: "Oceanview Penthouse",
        location: "500 Ocean Dr",
        price: 750000,
        beds: 5,
        baths: 3,
        area: 600,
        url: "https://example.com/property/oceanview-penthouse",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR RENT",
        featured: false,
        title: "Greenwood Apartments",
        location: "742 Evergreen Terrace",
        price: 1200,
        beds: 3,
        baths: 2,
        area: 350,
        url: "https://example.com/property/greenwood-apartments",
        imageUrl: "https://via.placeholder.com/345x200"
    }
]

export const similarProperties: PropertyForSale[] = [
    {
        availability: "FOR SALE",
        featured: true,
        title: "Luxury Family Home",
        location: "1800-1818 79th St",
        price: 395000,
        beds: 4,
        baths: 1,
        area: 400,
        url: "https://example.com/property/luxury-family-home",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR SALE",
        featured: false,
        title: "Skyper Pool Apartment",
        location: "1020 Bloomingdale Ave",
        price: 280000,
        beds: 4,
        baths: 2,
        area: 450,
        url: "https://example.com/property/skyper-pool-apartment",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR RENT",
        featured: false,
        title: "North Dillard Street",
        location: "4330 Bell Shoals Rd",
        price: 250,
        beds: 4,
        baths: 2,
        area: 400,
        url: "https://example.com/property/north-dillard-street",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR SALE",
        featured: true,
        title: "Oceanview Penthouse",
        location: "500 Ocean Dr",
        price: 750000,
        beds: 5,
        baths: 3,
        area: 600,
        url: "https://example.com/property/oceanview-penthouse",
        imageUrl: "https://via.placeholder.com/345x200"
    },
    {
        availability: "FOR RENT",
        featured: false,
        title: "Greenwood Apartments",
        location: "742 Evergreen Terrace",
        price: 1200,
        beds: 3,
        baths: 2,
        area: 350,
        url: "https://example.com/property/greenwood-apartments",
        imageUrl: "https://via.placeholder.com/345x200"
    }
]

export const brokers: Broker[] = [
    {
        imageUrl: "https://example.com/broker1.jpg",
        name: "John Doe"
    },
    {
        imageUrl: "https://example.com/broker2.jpg",
        name: "Jane Smith"
    },
    {
        imageUrl: "https://example.com/broker3.jpg",
        name: "Michael Johnson"
    },
    {
        imageUrl: "https://example.com/broker4.jpg",
        name: "Emily Davis"
    }
]

export const reviews: Review[] = [
    {
        imgUrl: 'https://example.com/images/user1.jpg',
        name: 'John Doe',
        review: 'This property was fantastic! The location was perfect, and the amenities were top-notch.',
    },
    {
        imgUrl: 'https://example.com/images/user2.jpg',
        name: 'Jane Smith',
        review: 'Had a wonderful experience. The staff was very helpful, and the place was clean and comfortable.',
    },
    {
        imgUrl: 'https://example.com/images/user3.jpg',
        name: 'Emily Johnson',
        review: 'A lovely stay! The views were stunning, and I would definitely come back again.',
    },
    {
        imgUrl: 'https://example.com/images/user4.jpg',
        name: 'Michael Brown',
        review: 'Great value for money. Everything was just as described, and the communication was excellent.',
    },
]


export const popularLocations: Location[] = [
    {
        address: "Sydney Opera House, Sydney, Australia",
        imageUrl: "https://example.com/images/sydneyoperahouse.jpg"
    },
    {
        address: "Great Barrier Reef, Queensland, Australia",
        imageUrl: "https://example.com/images/greatbarrierreef.jpg"
    },
    {
        address: "Uluru, Northern Territory, Australia",
        imageUrl: "https://example.com/images/uluru.jpg"
    },
    {
        address: "Bondi Beach, Sydney, Australia",
        imageUrl: "https://example.com/images/bondibeach.jpg"
    },
    {
        address: "Great Ocean Road, Victoria, Australia",
        imageUrl: "https://example.com/images/greatoceanroad.jpg"
    },
    {
        address: "Daintree Rainforest, Queensland, Australia",
        imageUrl: "https://example.com/images/daintreerainforest.jpg"
    },
    {
        address: "Blue Mountains, New South Wales, Australia",
        imageUrl: "https://example.com/images/bluemountains.jpg"
    },
    {
        address: "Kakadu National Park, Northern Territory, Australia",
        imageUrl: "https://example.com/images/kakadunationalpark.jpg"
    },
    {
        address: "Barossa Valley, South Australia, Australia",
        imageUrl: "https://example.com/images/barossavalley.jpg"
    },
    {
        address: "Gold Coast, Queensland, Australia",
        imageUrl: "https://example.com/images/goldcoast.jpg"
    }
]
