interface Name {
    title: string,
    first: string,
    last: string
}

interface Picture {
    large: string
}

interface Login {
    username: string
}

interface User {
    name: Name,
    picture: Picture,
    email: string,
    login: Login,
    location: Location
    cell: string
}

interface Location {
    city: string,
    state: string,
    country: string,
    postcode: number,
    street: Street,
    cell: string
}

interface Street {
    number: number,
    name: string
}

export default User;
