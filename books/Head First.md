# 避免一些尴尬的耦合错误

# 学习为何朋友对工厂模式的认知可能有错

# 发掘模式大师的秘密

# 把事关紧要的模式装入脑海里

# 探究星巴兹咖啡如何以装饰者模式让自己的股价翻倍

# 瞧瞧 Jim 为何拒绝继承后改善了爱情生活

O'REILLY 中国电力出版社
比《设计模式》好读多了，内容也相当有趣。

- 1-11：Strategy,Observer,Decorator,Abstract,Factory,Factory Method, Singleton, Command,Adapter,Facade,Template Method,Iterator,Composite,State,Proxy
- 12:如何将两个以上的 DP（hh 我说的不是动态规划 Dynamic Programming，而是 Design Pattern 的缩写）结合起来成为新的 DP，比如 MVC。
- 13 进一步学习 DP
- 14 很快的浏览尚未介绍的 DP：Bridge，Builder，Chain of Responsibility, Flyweight，Interpreter，Mediator，Memento，Prototype，Visitor
- 1 还介绍了四个 OO 基本概念：抽象封装继承多态
- 1-9 也陆续介绍了 9 个 OO 原则
- 很多时候，设计时有两难的情况，这时候我们必须回归到 OO 原则，以方便判断取舍。可以这么说：OO 原则是我们的目标，而设计模式是我们的做法
- 本书的产品设计应用神经生物学、认知科学，以及学习理论，这使得这本书能够将这些知识深深地印在你的脑海里，不容易被遗忘。本书的方式采用引导式教学，不直接告诉你该怎么做，而是利用故事当做引子，带领读者思考并想办法解决问题。解决问题的过程中又会产生一些新问题，再继续思考，继续解决问题，这样可以加深体会。作者以大量生活化故事当背景，例如第一章是鸭子，2 气象站 3 咖啡店，书中搭配大量插图，几乎每一页都有图，所以阅读起来生动有趣，不会感到昏昏欲睡，作者还利用歪歪斜斜的手写字体，增加『现场感』。
- UML 的 Class Diagram（Static Structure Diagram），JAVA 编写。适用于任何 OO 语音，每一章都有数目不等的测验题。每章最后有一页要点整理。

```tsx
export interface CrossTreeTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {
  primaryC: CrossTableLeftMetaColumn
  leftTree: LeftCrossTreeNode[]
}
function email({a}={a:1}:{a:number}) {
  c
}
```

文字环绕图片风格、个人交谈式风格、让学习的人想的更深，引起好奇，让神经元活动起来，促进、要求并鼓励读者解决问题，得出结论产生新知识；

# 元认知

真的想学，想学的更快更深入，就应该注意怎样才能集中注意力，考虑自己是怎样思考的，了解自己的学习方法。
**技巧在于认为你在学习的新东西确实很重要，对你的生活有很大影响**。就像老虎出现在面前一样，如若不然，你将陷入旷日持久的拉锯战中。虽然你很想记住所学的新内容，但是大脑却会竭尽全力地把他们拒之门外。

- 慢一点，理解得越多需要记的就越少
- 勤练习，自己记笔记
- 阅读 There are no Dumb Questions 部分
- 上床睡觉之前不要再看其他书，或者至少不再看其他有难度的东西
- 多喝水，大脑才能有最佳表现
- 大声说出来，解释给别人听，学的更快，而且可能会有一些新认识
- 大脑是不是负荷太重（开始浮光掠影地看，或者刚看的东西就忘了）
- 要有点感觉，你的大脑需要知道这是很重要的东西
- 设计一些东西，尽量应用只是，获取实践经验（新项目或重构旧项目）

# 类 UML

composition - OO, not in UML.
一个对象和另一个对象组合在一起：Has-a 关系
重复
代码示例尽可能短小精悍
别指望这些代码很健壮，要知道这里的代码甚至是不完整的-毕竟我们的代码是辅助学习之用，不见得一定功能完整
package import
ArrayList 类属于 java.util package。如果 package 不属于 J2SE API.

对象适配器和类适配器
将枚举适配到迭代器
「最少知识」原则

# 8

封装了对象创建、方法调用、复杂接口、鸭子、披萨。。深入封装算法
模板方法模式
钩子
好莱坞原则

# Duck

superclass-methods:quack,swim
display - abstract method 每一种鸭子外观都不同 每个鸭子子类型 subtype 负责实现自己的 display 行为
MallarDuck RedheadDuck

诱饵鸭

接口
我可以把 fly（）从超累中取出来，方巾一个「Flyable 接口」中，这么一来，只有会飞的鸭子才实现此接口。同样的方式，也可以用来设计一个「Quackable 接口」，因为不是所有的鸭子都会叫
所以，他需要一个更清晰的方法，让某些（不是全部）鸭子类型可飞或可叫。
MallarDuck RedheadDuck RubberDuck DecoyDuck
display() display() display() display()
fly() fly() quack()
quack() quack()
飞行的动作可能还有多种变化
采用良好的 OO 软件设计原则

# Page41/677
