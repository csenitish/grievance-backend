const error404 = (request, response)=>{
    const path = require('path');
    const parent = path.normalize(__dirname+'/..');
    const fullpath = path.join(parent,'/public/error.html');
    response.status(404).sendFile(fullpath);
}
module.exports = error404;