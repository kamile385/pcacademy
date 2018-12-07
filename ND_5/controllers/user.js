exports.signUp = async function(request, response){
    response.json({
        message: 'Sign up sucessful',
        user: request.user
    });
}