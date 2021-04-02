const mongoose = require('mongoose'); //mongoose 가져오기
const userSchema = mongoose.Schema({ //mongoose 이용해 schema 작성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //빈칸제거해줌
        unique: 1 //똑같은 이름 쓰지 못하게-PK같은..
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자 이용자 분리 
        type: Number,
        default: 0
    },
    image: String,
    token: { //token이용해 유효성 관리
        type: String
    },
    tokenExp: { //token 유효기간
        type: Number
    }
})

//schema를 모델로 감싸주기
const User = mongoose.model('User', userSchema)

//모델을 다른 곳에서도 사용할 수 있게
module.exports = {User}