const express = require('express') //다운받았던 express 모듈 가져오기
const app = express() //function 이용해 새로운 express 앱 만들기
const port = 5000 // 5000번 port를 백서버로
const mongoose =  require('mongoose')


app.get('/', (req, res) => { //루트 디렉토리에 helloworld 출력하게하는
  res.send('Hello World!')
})

app.listen(port, () => { //port 5000번에 실행해줌
  console.log(`Example app listening at http://localhost:${port}`)
})


mongoose.connect('mongodb+srv://jungahn:gramgram@cluster0.fkpdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //에러방지
}).then(() => console.log('MongoDB Connected...')) //잘 연결됐는지 확인용
  .catch(err => console.log(err))
