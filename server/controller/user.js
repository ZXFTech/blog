import User from '../model/user_model'

const checkEmail = (email) => {
    return false
}

export const getUserList = async() => {
    return new Promise((resolve,reject)=>{
        User.find().exec(async(err,result)=>{
            if(err){
                console.log('err',err)
                reject(err)
            }
            resolve(result)
        })
    })
}

export const createUser = async (newUser)=>{
    return new Promise((resolve,reject)=>{
        const username = newUser.username
        const password = newUser.password
        const email = newUser.email

        if(!username){
            reject('用户名不能为空')
        }
        if(!password){
            reject('密码不能为空')
        } 
        if(!checkEmail(email)) {
            reject('邮箱格式不正确')
        }

        User.findOne({username:username},async(err,result) => {
            console.log('username',username)
            if(err){
                reject(err)
            }
            console.log(result)
            if(result !== null){
                reject('用户名已存在')
            }
            User.create({ ...newUser },async(err,user)=>{
                if(err){
                    reject(err)
                }
                resolve(user)
            })
        })
    })
}

export const register = async(newUser)=>{

}

export const login = async(user)=>{
    return new Promise((resolve,reject) =>{
        const username = user.username
        const password = user.password

        User.findOne({username:username}).exec(async(err,result)=>{
            if(err){
                reject(err)
            }
            if(result === null){
                reject('用户名不存在')
            }
            if(result.password !== password){
                reject('密码不正确')
            }
            resolve(result)
        })
    })
}