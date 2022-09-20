const userController = {
    login (request, response){
       
            // 
            const email = request.body.email;
            const password = request.body.password;
            // find database raw of user
            userOperations.findByEmail(email).then(userObj => {
                const isPasswdMatched = compareSync(password, userObj.password);
                if (!isPasswdMatched) {
                    response.status(401).send({ msg: 'invalid username/password' })
                } else {
                    const token = jwt.sign({
                        userId: userObj._id
                    }, 'hhewhjwekjfh');
                    response.json({ token })
    
                }
            }).catch(err => {
                console.log(err)
            })
    
        response.send('login Route');
    },
    register(request, response){
        console.log('Body is', request.body);
        const userObject = new User(
            request.body.firstName,
            request.body.lastName,
            request.body.email,
            request.body.password
           
        );
        const promise = userOperations.add(userObject);
        promise.then(data => {
            response.send('Added SuccessFully....');
        }).catch(err => {
            response.send('Error During Addition');
            console.log(err);
        })

        response.send('Register Route');
    },
    profile(request, response) {
        
        const bearerToken= request.headers.authorization;
        const token = bearerToken.slice(7);
        console.log(bearerToken,token);
    
        const decoded = jwt.verify(token, 'hhewhjwekjfh');
        console.log(decoded);
        userOperations.findById(decoded.userId).then(userObj=>{
           
            response.json(userObj)
        })
    

      
    }
}
module.exports = userController;
