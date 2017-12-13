1.页面跳转
2.界面设计
3.优雅的JS写法

1.注册监听事件
const ipc = electron.ipcMain
ipc.on('load_url', (event, url) => {
if (mainWindow) {
console.log(url)
mainWindow.loadURL(url)
}
})
2. 通过来发送事件（指令）这里是跳转
const ipc = require('electron').ipcRenderer
ipc.send('load_url', fileUrl);
