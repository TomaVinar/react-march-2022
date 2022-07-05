const createUser = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        })
        .then(value => value.json())
}

export { createUser };
