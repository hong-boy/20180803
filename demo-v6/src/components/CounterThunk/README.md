# redux-thunk
- 为什么要用？
> 当我们需要处理异步操作时，可以考虑使用redux-thunk插件来扩展原生的dispatch方法。原生的dispatch方法只支持plain object作为参数，redux-thunk中间件能让dispatch的参数支持函数；可以更方便我们处理异步请求。  
当然，业务简单的情况下没有必要使用此中间件，可以自行解决。 

- redux-thunk的特点
> 不能像redux-saga那样对具体的某个action动作进行监听