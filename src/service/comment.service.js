const createComment = (comment) => {
    return fetch('https://jsonplaceholder.typicode.com/comments',
        {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            }
        })
        .then(value => value.json())
}

export { createComment };

