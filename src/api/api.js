import * as chat from '@/mock/chat'

//创造临时数据
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}


var chatList = () => setpromise(chat.list);

export {
  chatList
}
