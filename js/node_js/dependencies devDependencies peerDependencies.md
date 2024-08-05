https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies




1241
down vote
accepted
Summary of important behavior differences:

dependencies are installed on both:
npm install from a directory that contains package.json
npm install $package on any other directory
devDependencies are:
also installed on npm install on a directory that contains package.json, unless you pass the --production flag (go upvote Gayan Charith's answer).
not installed on npm install "$package" on any other directory, unless you give it the --dev option.
are not installed transitively.
peerDependencies:
before 3.0: are always installed if missing, and raise an error if multiple incompatible versions of the dependency would be used by different dependencies.
expected starting on 3.0 (untested): give a warning if missing on npm install, and you have to solve the dependency yourself manually. When running, if the dependency is missing, you get an error (mentioned by @nextgentech)




Summary of important behavior differences:

dependencies are installed on both:
npm install from a directory that contains package.json
npm install $package on any other directory
devDependencies are:
also installed on npm install on a directory that contains package.json, unless you pass the --production flag (go upvote Gayan Charith's answer).
not installed on npm install "$package" on any other directory, unless you give it the --dev option.
are not installed transitively.
peerDependencies:
before 3.0: are always installed if missing, and raise an error if multiple incompatible versions of the dependency would be used by different dependencies.
expected starting on 3.0 (untested): give a warning if missing on npm install, and you have to solve the dependency yourself manually. When running, if the dependency is missing, you get an error (mentioned by @nextgentech)
Transitivity (mentioned by Ben Hutchison):
dependencies are installed transitively: if A requires B, and B requires C, then C gets installed, otherwise B could not work, and neither would A.
devDependencies are not installed transitively. E.g. we don't need to test B to test A, so B's testing dependencies can be left out.
Related options not discussed here:

bundledDependencies which is discussed on the following question: Advantages of bundledDependencies over normal dependencies in NPM
optionalDependencies (mentioned by Aidan Feldman)
devDependencies

dependencies are required to run, devDependencies only to develop, e.g.: unit tests, Coffeescript to Javascript transpilation, minification, ...

If you are going to develop a package, you download it (e.g. via git clone), go to its root which contains package.json, and run:

npm install
Since you have the actual source, it is clear that you want to develop it, so by default both dependencies (since you must of course run to develop) and devDependency dependencies are also installed.

If however you are only an end user who just wants to install a package to use it, you will do from any directory:

npm install "$package"
In that case, you normally don't want the development dependencies, so you just get what is needed to use the package: dependencies.

If you really want to install development packages in that case, you can set the dev config option to true, possibly from the command line as:

npm install "$package" --dev
The option is false by default since this is a much less common case.

peerDependencies

(tested before 3.0)

Source: https://nodejs.org/en/blog/npm/peer-dependencies/ -http://blog.nodejs.org/2013/02/07/peer-dependencies/

With regular dependencies, you can have multiple versions of the dependency: it's simply installed inside the node_modules of the dependency.

E.g. if dependency1 and dependency2 both depend on dependency3 at different versions the project tree will look like:

root/node_modules/
               |
               +- dependency1/node_modules/
               |                          |
               |                          +- dependency3 v1.0/
               |
               |
               +- dependency2/node_modules/
                                          |
                                          +- dependency3 v2.0/



                                          Plugins however are packages that normally don't require the other package, which is called the host in this context. Instead:

                                          plugins are required by the host
                                          plugins offer a standard interface that the host expects to find
                                          only the host will be called directly by the user, so there must be a single version of it.
                                          E.g. if dependency1 and dependency2 peer depend on dependency3, the project tree will look like:

                                          root/node_modules/
                                                           |
                                                           +- dependency1/
                                                           |
                                                           +- dependency2/
                                                           |
                                                           +- dependency3 v1.0/
                                          This happens even though you never mention dependency3 in your package.json file.

                                          I think this is an instance of the Inversion of Control design pattern.

                                          A prototypical example of peer dependencies is Grunt, the host, and its plugins.

                                          For example, on a Grunt plugin like https://github.com/gruntjs/grunt-contrib-uglify, you will see that:

                                          grunt is a peerDependency
                                          the only require('grunt') is under tests/: it's not actually used by the program.
                                          Then, when the user will use a plugin, he will implicitly require the plugin from the Gruntfile by adding a grunt.loadNpmTasks('grunt-contrib-uglify') line, but it's grunt that the user will call directly.

                                          This would not work then if each plugin required a different Grunt version.



npm link ??



Node
Node经常用于前端构建、微服务、中台等场景

我曾用Node做过一些抽奖类的活动，项目架构是 express + mongoDb + redis


开发后台项目的总体感受
1）和后端的同事沟通起来更顺畅了，之前他们老是说这张表、那张表、redis什么的，现在也能理解了，消除了一些彼此的隔阂
2）更全面的去理解业务，了解整套流程，比如前后端是如何配合的、数据如何传递、后台是如何处理，甚至在需求评审时，可以提出自己的方案或建议
下面，我浅谈一下对Node理解


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


Node的特点：事件驱动、非阻塞I/O、高并发
Node高并发的原理
Nodejs之所以单线程可以处理高并发的原因，得益于内部的事件循环机制和底层线程池实现
遇到异步任务，node将所有的阻塞操作都交给了内部的线程池去实现。本质上的异步操作还是由线程池完成的，主线程本身只负责不断的往返调度，从而实现异步非阻塞I/O，这便是node单线程和事件驱动的精髓之处
整体流程
1）每个Node进程只有一个主线程在执行程序代码
2）当用户的网络请求、数据库操作、读取文件等其它的异步操作时，node都会把它放到Event Queue（"事件队列"）之中，此时并不会立即执行它，代码也不会被阻塞，继续往下走，直到主线程代码执行完毕
3）主线程代码执行完毕完成后，然后通过事件循环机制，依次取出对应的事件，从线程池中分配一个对应的线程去执行，当有事件执行完毕后，会通知主线程，主线程执行回调拿到对应的结果


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


