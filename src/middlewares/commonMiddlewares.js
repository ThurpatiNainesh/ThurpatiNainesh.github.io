
const mid1 = async function(req, res, next) {
    let hdata=req.headers.isfreeappuser;
    if(typeof hdata==="undefined") {
    res.send("error person is not FreeAppUser ")   
    }
    next()
    }
const mid2 = async function(req, res, next) {
    let hdata=req.headers.isuser;
    let hdata1=req.headers.isproduct;
        if(hdata===True && hdata1===True){
        console.log("The request is valid ")   
        }
        else{
        console.log("The request is not valid")
        }
        next()
        };
const mid3 = async function(req, res, next) {
        if(isAppUser===True){
            console.log("The request is valide ")   
        }
        else{
            console.log("Check the balance of user")   
        }
        next()
        }

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3