function validate(request, params) {
    for (let key in params) {
        const isKeyRequired =
            request[key] ?? request.body ? request.body[key] : false;
        console.log(isKeyRequired ? true : false);
    }
}

validate(
    { password: '12311' },
    {
        login: 'required',
    }
);