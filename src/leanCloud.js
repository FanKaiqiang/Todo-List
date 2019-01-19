import AV from 'leancloud-storage'

var APP_ID = 'pobPweP83M7Wt1hgTDn7kRPI-gzGzoHsz';
var APP_KEY = 't0YfmdrLBhYvd9T0Dc89b8P8';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}

export default AV

export function signUp(username, password, successFn, errorFn){//leancloud的用户注册API
   // 新建 AVUser 对象实例
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  // 设置邮箱
  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
}

