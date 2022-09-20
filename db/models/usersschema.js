// /**
//  * Maintain User Schema
//  * @author Nitish
//  * @copyright Nitish
//  * @version 1.0
//  * @summary User Schema File
//  */

//  const connection = require('../connect');
//  const {Schema} = require('mongoose');
//  const UserSchema = new Schema({
//      name:{type:Schema.Types.String, required:true, unique:false, min:3, max:25},
//      enrollment:{type:Schema.Types.String, required:true, min:9, max:10},
//      mobile:{type:Schema.Types.String, required:true},
//      programme:{type:Schema.Types.String, required:true},
//      comments:{type:Schema.Types.String, required:true},
     
//     // email:{type:Schema.Types.String, required:true},
//      logintime:{type:Schema.Types.Date,default:new Date()},
//      locked:{type:Schema.Types.String, default:'N'},
//      failattempts:{type:Schema.Types.Number, default:0},
//      //roleid:{type:Schema.Types.ObjectId, ref:ROLE} // join (one to one)


//  },{timestamps:true});
//  const UserModel = connection.model('users',UserSchema);
//  module.exports = UserModel;