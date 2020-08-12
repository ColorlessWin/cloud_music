#cloud_music
##项目介绍
这是一个仿网易云音乐PC端的网页应用，基于 Vue + Element UI 构建，网页主体被设计为类似Windows桌面下打开一个窗口app一样，应用的主体就是一个窗口，可以通过拖动右下角来改变窗口大小，尽管作为一个web应用它被设计成这样可能有点奇怪，但这并不是不可行的，或许以后还能衍生出web桌面，类似与云桌面的感觉。
> 好像是个挺不错的想法，或许以后可是试着搭建一个这样的web桌面，提供一个基础平台管理每个窗口的生命周期，再基于这个平台开发web应用, 将自己的web应用都放上去。

####项目后端
项目后端来自 [网易云音乐 NodeJS 版 API](https://github.com/Binaryify/NeteaseCloudMusicApi) 以及该项目的完整接口[文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
```
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
```

####项目预览
项目目前还有部分页面没有完成，不过主要页面都已完成，并将持续更新
项目部署于我的 [网易云音乐(仿)](http://121.41.231.220/colorless/cloud_music)
> 由于服务器为境内服务器，而域名解析到境内主机又需要备案，
> 又因为我刚好因为没有居住证的原因过不了备案，所以只能用ip直接访问了

##运行
如果你想修改源码，构建一个自己的版本的话(我很乐意你这么做)， 这部分将介绍如何使这个项目正常运行
####准备后端
***
#####将 [网易云音乐 NodeJS 版 API](https://github.com/Binaryify/NeteaseCloudMusicApi) clone到本地或服务器，完成初始化工作
```
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
$ npm install
```
#####修改服务器端口
服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: windows

```
$ set PORT=4000
```
Mac/Linux 下

```
$ PORT=4000
```

#####启动
```
$ cd NeteaseCloudMusicApi
$ node app.js
```
####准备前端（本项目）
***
#####将本项目clone到本地或服务器, 完成初始化工作
```
$ git clone https://github.com/ColorlessWin/cloud_music.git
$ npm install
```
#####修改服务器地址与端口
项目默认服务器地址为`http://localhost` 端口为`3000`, 如果需要修改则在本项目的根目录下新建一个`.env.local`文件，写下如下键值对即可
```
VUE_APP_HOST=/*这里填你的服务器地址（需要加http或https前缀）*/
VUE_APP_PORT=/*这里填你的服务器端口*/
/**
 * 示例
 * VUE_APP_HOST=https://www.baidu.com
 * VUE_APP_PORT=80
 */
```
#####运行或构建
```
$ npm run serve
$ npm run build
```
> 本项目包含一个自己写的webpack插件，他的功能是在build完成后自动将构建好的文件上传至服务器，不过因为`.env.local`文件配置的原因它只有在我的电脑上构建时才能正确的找到服务器并上传文件，所以它在你的电脑上build时会报错，但这并不会影响到项目的构建 

***
> 仅仅只是在本地运行的话，所有配置保持默认就好了
