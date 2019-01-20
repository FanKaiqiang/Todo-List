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

export function signUp(username, password,email, successFn, errorFn){//leancloud的用户注册API
   // 新建 AVUser 对象实例
  var user = new AV.User()
  // 设置用户名
  user.setUsername(username)
  // 设置密码
  user.setPassword(password)
  // 设置邮箱
  user.setEmail(email);
  user.signUp().then(function (loginedUser) {//注册
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)//成功回调
  }, function (error) {
    errorFn.call(null, error)//失败回调
  })
}

export function signIn(username, password, successFn, errorFn){//leancloud的登录注册API
 AV.User.logIn(username, password).then(function (loginedUser) {//注册
   let user = getUserFromAVUser(loginedUser)
   successFn.call(null, user)//成功回调
 }, function (error) {
   errorFn.call(null, error)//失败回调
 })
}

export function getCurrentUser(){//获取当前缓存的用户信息
  let user = AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }
}

export function signOut(){//登出操作
  AV.User.logOut()
}

export function sendPasswordResetEmail(email, successFn, errorFn){
  AV.User.requestPasswordReset(email).then(function (success) {
    successFn.call(null,success) 
  }, function (error) {
    errorFn.call(null,error)
  })
}
