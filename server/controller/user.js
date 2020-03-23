import User from '../model/user_model'

export const getUserList = async() => {
    return new Promise((resolve,reject)=>{
        User.find().exec(async(err,result)=>{
            if(err){
                console.log('err',err)
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const createUser = async (newUser)=>{
    return new Promise((resolve,reject)=>{
        User.create({
            username:newUser.username,
            password:newUser.password,
            nickname:newUser.name,
            email:newUser.email,
            blog:newUser.blog,
            contacts:newUser.contacts,
            introduce:newUser.introduce
        },async(err,user)=>{
            if(err){
                reject(err)
                return
            }
            resolve(user)
        })
    })
}

export const register = async(newUser)=>{

}

export const login = async(user)=>{
    return new Promise((resolve,reject) =>{
        User.find({username:user.username,password:user.password},async(err,user) =>{
            if(err){
                reject(err)
                return
            }
            resolve(user)
        })
    })
}