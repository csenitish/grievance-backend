/**
 * Maintain create, search file
 * @author Nitish
 * @copyright Nitish
 * @version 1.0
 * @summary Comlain Create and search file
 */

const ComplainModel = require('../db/models/complainschema');
const complainOperations = {
    add(complainObject){
        const promise = ComplainModel.create(complainObject);
        return promise;
    },
    search(){

    },
    findByEnrollment(enrollmentNum){
        const regex = new RegExp(enrollmentNum, 'i');
        const promise = new Promise((resolve, reject)=>{
        ComplainModel.findOne({'enrollment':{$regex:regex}},(err,doc)=>{
            //here $regex is oprater
            if(err){
                reject(err);
            }
            else{
                resolve(doc);
            }
        });
        });
        return promise;
    },
    readAll(){
        const promise = new Promise((resolve, reject)=>{
            ComplainModel.find({},(err,docs)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(docs);
    
                }
        });
        
        });
        return promise;
    }

}
module.exports = complainOperations;