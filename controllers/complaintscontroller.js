const complainOperations = require('../services/complainoperations');
const Complain = require('../dto/complain');
const logger = require('../utils/logger')(__filename);
const complaintsController = {
    addComplain(request, response){
        //console.log('Body is',request.body);
        logger.debug('Body is '+JSON.stringify(request.body));
        const complainObject = new Complain(request.body.subject, request.body.name, request.body.enrollment, request.body.mobile, request.body.emailid, request.body.programme, request.body.comments);
        const promise = complainOperations.add(complainObject);
        promise.then(data=>{
            response.send('Complain Added successfully');
        }).catch(err=>{
            response.send('Error During adding complain');
            console.log(err);
        })
        
    },
    getComplainByEnrollment(request, response){
        let enrollment = request.params.enrollment;
        console.log('Enrollment Number is ',enrollment);
        const promise = complainOperations.findByEnrollment(enrollment);
        promise.then(result=>{
            response.status(200).json({"compains":result});
        }).catch(err=>{
            response.status(500).json({'message':'Error in Get Complain'+JSON.stringify(err)});
        })
    },
    getComplains(request, response){
        const promise = complainOperations.readAll();
        promise.then(result=>{
            response.status(200).json({"compains":result});
        }).catch(err=>{
            response.status(500).json({'message':'Error in Get Complain'+JSON.stringify(err)});
        })
    }
}
module.exports = complaintsController;
