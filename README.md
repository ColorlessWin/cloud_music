# cloud_music 

## 项目介绍
这是一个仿网易云音乐PC端的网页应用，基于 Vue + Element UI 构建，网页主体被设计为类似Windows桌面下打开一个窗口app一样，应用的主体就是一个窗口，可以通过拖动右下角来改变窗口大小，尽管作为一个web应用它被设计成这样可能有点奇怪，但这并不是不可行的，或许以后还能衍生出web桌面，类似与云桌面的感觉。
> 好像是个挺不错的想法，或许以后可是试着搭建一个这样的web桌面，提供一个基础平台管理每个窗口的生命周期，再基于这个平台开发web应用, 将自己的web应用都放上去。

#### 项目后端
项目后端来自 [网易云音乐 NodeJS 版 API](https://github.com/Binaryify/NeteaseCloudMusicApi) 以及该项目的完整接口[文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
```
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
```

#### 项目预览
项目目前还有部分页面没有完成，不过主要页面都已完成，并将持续更新
项目部署于我的 [网易云音乐(仿)](http://121.41.231.220/colorless/cloud_music)
> 由于服务器为境内服务器，而域名解析到境内主机又需要备案，
> 又因为我刚好因为没有居住证的原因过不了备案，所以只能用ip直接访问了

## 运行
这部分将介绍如何使这个项目正常运行
#### 准备后端

##### 将 [网易云音乐 NodeJS 版 API](https://github.com/Binaryify/NeteaseCloudMusicApi) clone到本地或服务器，完成初始化工作
```
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
$ npm install
```
##### 修改服务器端口
服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: windows

```
$ set PORT=4000
```
Mac/Linux 下

```
$ PORT=4000
```

##### 启动
```
$ cd NeteaseCloudMusicApi
$ node app.js
```
#### 准备前端（本项目）

##### 将本项目clone到本地或服务器, 完成初始化工作
```
$ git clone https://github.com/ColorlessWin/cloud_music.git
$ npm install
```
##### 修改服务器地址与端口
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
##### 运行或构建
```
$ npm run serve
$ npm run build
```
> 本项目包含一个自己写的webpack插件，他的功能是在build完成后自动将构建好的文件上传至服务器，不过因为`.env.local`文件配置的原因它只有在我的电脑上构建时才能正确的找到服务器并上传文件，所以它在你的电脑上build时会报错，但这并不会影响到项目的构建  

> 仅仅只是在本地运行的话，所有配置保持默认就好了

## 快速上手
这部分将向你介绍项目中的一个核心组件`<Rendering/>`，项目中的大量页面中都使用到了这个组件，了解这个组件的工作方式是了解本项目大部分源码的重要途径。  
> `<Rendering/>`组件是一个负责渲染项目中所有其可以被抽象为`Array<Object>`格式的数据，该项目中有着大量的这样的数据，比如歌曲列表、歌手列表、专辑列表、评论列表等等一切符合`Array<Object>`格式的数据。

> 并且`<Rendering/>`组件还会接管这些数据的加载，分页处理等等，你要做的事情很简单 只需要实现一个`filling`方法并通过props传递给`<Rendering/>`组件
#### 开始
我们将通过项目中的一个简单的页面来介绍这个组件。  
这是一个MV分类页面，通过切换不同的分类标签，页面将向你展示相对应的MV列表，底部还有一个简单的分页功能  

![mvs_page](http://121.41.231.220/statics/docs/mvs_page.jpg)  

底部的分页  

![mvs_footer](http://121.41.231.220/statics/docs/mvs_footer.jpg)

我们再看看这个页面源码部分的大致结构
> 这里折叠掉了一些暂时不需要关注的内容
```vue
<template>
    <span>地区：</span>
    <simple-radio :options="areaLabel" v-model="area"/>   <br>
    
    <span>类型：</span>
    <simple-radio :options="typeLabel" v-model="type"/>   <br>
    
    <span>排序：</span>
    <simple-radio :options="orderLabel" v-model="order"/> <br>
    
    <rendering
      class="mvs"
      :component="require('@/components/content/matrices/CommonVideoMatrices').default"
      :adapter="adapter"
      :show-creator="true"
    
      :total="total"
      :filling="filling"
      :unique="area + type + order"
    />
</template>

<script>
  import ...
  export default {
    name: "Mv",
    components: {LArea, Rendering, SimpleRadio},

    data() {
      return {
        total: -1,
        area: '全部',
        type: '全部',
        order: '上升最快',
        areaLabel: ['全部', '内地', '港台', '欧美', '日本'],
        typeLabel: ['全部', '官方版', '原声', '现场版', '网易出品'],
        orderLabel:['上升最快', '最热', '最新'],

        adapter: {...}
      }
    },

    methods: {
      filling(offset, limit, first_load) {...}
    }
  }
</script>
```
可以看到页面中的template部分还是比较简洁的，首先是3个 `<simple-radio/>`组件它们的功能很简单，
通过`data`中定义的三个Label数组渲染出对应的标签，并在标签被点击后通过`v-model`更新相应的被绑定的属性, 然后是一个`<rendering/>` 组件，上面绑定了许多prop
#### `<rendering/>`组件细节
看起来`<rendering/>`有很多prop啊，其实不然，`<rendering/>`只有2个prop, 其他的prop都会被传递给其内部的`<component/>`和`<pagination/>`
> 这里删掉了一些不需要关注的内容
```vue
<template>
  <div>
    <component
      :is="component"
      v-bind="Object.assign(props, $attrs)"
      v-on="$listeners"
    />

    <pagination
      v-model="props.datas"
      v-on="$listeners"
      v-bind="$attrs"
      :filling="filling"
    />
  </div>
</template>

<script>
  import Pagination from "@/components/common/Pagination";
  export default {
    name: "Rendering",
    components: {Pagination},
    props: {
      component: { type: [Object, Function], required: true},
      filling:   { type: Function, required: true},
    },
    data() {
      return {
        props: {
          datas: [],
        }
      }
    }
  }
</script>
```
`<pagination/>`是一个分页组件，它负责渲染一个分页组件提供互交的同时也负责管理数据的加载处理  
`<component/>` 则负责加载你通过`component`这个prop传递进来的组件，在这个MV的页面中我通过
`require([path]).default`的方式动态的将一个`CommonVideoMatrices`组件传递给了`component`
而且可以看到我通过`v-on="$listeners"`将`CommonVideoMatrices`内部的事件代理了出去，这意味着你可以直接在
`<rendering/>`上监听到`CommonVideoMatrices`内部`$emit`的事件 
> `CommonVideoMatrices`是负责渲染一个实际的MV展示列表，他是在这个页面中真正负责展示数据的，
>其内部接受一个`datas`的prop，(`datas`应该始终是一个`Array<Object>`格式的数据) 并通过`datas`来渲染页面   
> 项目中有着不少与 `CommonVideoMatrices`设计类似的组件他们都通过一个`datas`的prop渲染各自的数据, `<rendering/>`内也**只能**传入一个包含`datas`prop的组件
> 这些组件分别位于 `src/cmoponents/content/tracks`和`src/component/content/matrices`下  
##### `<Pagination/>`会在页面上渲染一个分页组件用于提供互交
![pagination](http://121.41.231.220/statics/docs/pagination.jpg)

> 只有在你提供了 `total`这个prop的时候才会渲染这个分页组件，否则不渲染，但仍可以管理数据的加载

#### 数据的加载
上面介绍了 `<Rendering/>`组件的内部结构与部分细节, 至少我们知道了通过`component`这个prop我们可以传递一个包含`datas`prop的组件进去 `<Rendering/>`会帮我们渲染这个组件,
可是谁来给这个组件的 `datas`prop传递数据呢，通过什么方式呢?  
这就要提到 `<Rendering/>`组件内的另一个prop`filling`了

##### Prop: filling 
与其他prop不同，`filling`你需要传递一个**function**给他, 这个**function**将被用于数据的加载, 在需要时它会被自动调用，并且要求其返回一个Promise。  
我们可以看看MV页面中是怎么实现这个**function**的  
```javascript
methods: {
  filling(offset, limit, first_load) {
    return new Promise(resolve => {
      mvs(this.area, this.type, this.order, offset, limit)
        .then(result => {
          if (first_load) this.total = result['count']
          resolve(result['data'])
        })
    })
  }
}
```
> 这个function会被当做参数传递给 `<rendering/>` 而其内部又会传递给`<pagination/>` 并由它决定什么时候调用  
> `mvs(area, type, order, offset, limit)`是一个后端mv数据的接口，前面三个参数用于决定返回什么类型的mv,
>  `offset`，`limit`则是分页用的参数 

当`<pagination/>`渲染在页面上的分页组件被点击时内部就会调用filling这个方法并传递一些参数过来，这些参数被 `mvs`接口用作分页的参数，
在接口数据成功返回时通过resolve的方式传递给 `<pagination/>`内部，并会将这一次的数据缓存起来，同时通过`<Rendering/>`将数据传递给`CommonVideoMatrices`
这样就能通过这些数据正常渲染了
> 页面在第一次加载时filling也会被调用

##### 响应式加载
可以看到我们这个页面还需要在用户选择了其他标签或分类后，重新加载新的数据， 你可能会想到通过监听 `<simple-radio/>`的点击事件然后通过某种方式通知`<pagination/>`调用filling方法更新数据?  
不用！！ 我们有更简单的方式实现这个功能
```html
<rendering
  ...
  :unique="area + type + order"
/>
```
> `unique`最终会被传递给`<pagination/>`   
> `area`,`type`,`order` 它们都分别通过`v-model` 绑定在三个不同的`<simple-radio/>`上
>
我只需要在 `<rendering/>`组件上添加一个`unique`的prop并给它传递一个用于响应数据更新的值，当传递给`unique`的值改变时filling就会被调用，
这会非常有用我们经常会遇到这种场景，比如当歌单的id被改变时, 重新加载新的歌单数据，这时我们只需要将id传递给 `unique`并实现一个filling方法，当id改变时就会自动加载新的歌单数据了。  
**至此我们的页面就能正常工作了**

> 其实还有一个叫`adapter`的东西是用来解决后端在不同的地方返回相同类型的数据但数据结构却不太一样的问题的，但我这里就不介绍了

### 结语
这是一个面向新手的项目，希望能给一些刚接触前端/Vue又找不到什么项目实践的同学一些灵感和参考  
项目中的很多地方都是这样实现的，相信你在看完这部分内容后能对本项目的部分源码有一个比较清晰的了解  
