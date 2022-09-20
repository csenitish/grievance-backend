/**
 * Maintain Complain Schema
 * @author Nitish
 * @copyright Nitish
 * @version 1.0
 * @summary Complain Schema File
 */

const connection = require('../connect');
const {Schema} = require('mongoose');
const ComplainSchema = new Schema({
    subject:{type:Schema.Types.String, required:true},
    name:{type:Schema.Types.String, required:true, unique:false, min:3, max:25},
    enrollment:{type:Schema.Types.String, required:true, min:9, max:10},
    mobile:{type:Schema.Types.String, required:true},
    emailid:{type:Schema.Types.String, required:true ,unique:true,},
    programme:{type:Schema.Types.String, required:true},
    comments:{type:Schema.Types.String, required:true}
    
    //author:{type:Schema.Types.ObjectId, ref:'users'},
    
},{timestamps:true});
const ComplainModel = connection.model('complains',ComplainSchema);
module.exports = ComplainModel;