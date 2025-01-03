Gang of Four: https://springframework.guru/gang-of-four-design-patterns/

可复用面向对象软件的基础
Elements of Reusable Object-Oriented Software
China Machine Press
www.TopSage.com
23 个设计模式

# 前言

_当我评估一个面向对象系统的质量时，所使用的方法之一就是要判断系统的设计者是否强调了对象间的公共协同关系_
所有结构良好的面向对象软件体系结构中都包含了许多模式。在系统开发阶段强调这种机制的优势在于，它能使所生成的系统体系结构更加精巧、简洁和易于理解，其程度远远超过了未使用模式的体系机构。
模式在构造复杂系统时的重要性早已在其他领域中被认可。特别的，最先将模式语音 pattern language 应用于城市建筑领域，他的思想和其他人的贡献已经根植于面向对象软件界。简而言之，软件领域中的设计模式为开发人员提供了一种使用专家设计经验的有效途径。
在本书中,Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides 原理、分类描述
本书作用

- 模式在建造复杂系统过程中所处的角色
- 为如何引用一组精心设计的模式提供了一个实用方法，以帮助实际开发者针对特定应用问题使用适当模式进行设计

Rational 软件公司首席科学家 Grady Booch。第一次阅读此书时不可能完全理解
提示和鼓励
束之高阁 反复参阅以获取设计灵感

1. 什么是设计模式，如何帮你设计面向对象的软件系统 包含一个设计案例研究，展示了如何将设计模式应用于实际工作
2. 实际设计模式的分类描述-本书主要部分 章节按照模式性质划分：creation 创建型，structural 结构型 behavioral 行为型。可以从头至尾地阅读每一个模式，也可以随机浏览其中任何一个模式。另外一种方式：研究其中一章，有助于理解原本密切关联的模式如何相互区分

模式描述中的交叉引用：提供寻找其他相关模式的逻辑路径，帮助你看清楚模式如何相互关联，一个模式怎样与其他模式组合、以及哪些模式能在一起工作
阅读模式分类描述的另一种方法是问题导向法

- Abstract Factory(3.1)
- Adapter(4.1)
- Composite(4.3)
- Decorator(4.4)
- Factory Method(3.3)
- Observer(5.7)
- Strategy(5.9)
- Template Method(5.10)

设计面向对象软件 设计可复用的面向对象软件：必须找到相关对象，以适当粒度将他们归类，再定义类的接口和继承层次，建立对象之间的基本关系，你的设计应该对手头问题有针对性，同时对将来的问题和需求也要有足够的通用性

你也希望避免重复设计或者尽可能减少重复设计。
面向对象系统中看到类和相互通信的对象 communicating object 的重复模式，这些模式解决特定的设计问题，使面向对象设计更灵活优雅，最终复用性更好。

复用性、灵活性好

帮助设计者将新设计建立在以往工作基础上，复用以往成功的设计方案

「用对象表示状态」，「修饰对象以便于你能容易得添加、删除属性」 一旦懂得模式，许多设计决策自然而然产生。设计经验的重要价值
面向对象软件的设计经验：每一个设计模式系统地命名、解释和评价了面向对象系统中一个重要的和重复出现的设计。目标是将设计经验以能够有效利用的形式记录下来。

避免设计损害了系统复用性。通过提供一个显示类和对象作用关系以及他们之间潜在联系的说明规范，设计模式能够提高已有系统的文档管理和系统维护的有效性。简而言之，设计模式可以帮助设计者更快更好地完成系统设计
统一格式、已分类编目的若干组设计模式
没有讨论并发、分布式、实时程序设计有关的模式，也没有收录面向特定应用领域的模式。
本书并不准备告诉你怎样构造用户界面、写设备驱动程序、使用面向对象数据库

# 美一个模式描述了一个在我们周围不断重复发烧的问题，以及解决方案的核心

一次又一次使用该方案而不必重复劳动
城市和建筑模式 对象和接口代替了墙壁和门窗

# 一个模式的四个基本要素

- name 助记名 他用一两个词俩描述模式的问题、解决方案和效果 增加了我们的设计词汇，允许我们在较高的抽象层次上进行设计、基于一个模式词汇表，我们自己以及同事之间就可以讨论模式并在编写文档时使用他们。**模式名可以帮助我们思考，便于我们与其他人交流设计思想和结果**。找到恰当的模式名是我们设计模式编目工作的难点之一
- problem 描述了应该在何时使用模式。他解释了**设计问题和问题存在的前因后果**，他可能描述了特定的设计问题，如**怎样用对象表示算法，也可能描述了导致不灵活设计的类或对象结构**。有时候，问题会包括使用模式必须满足的一系列先决条件。
- 解决方案 solution 描述了**设计的组成成分，他们之间的相互关系及各自的职责和协作方式** 所以模式就像模板，可应用于多种不同组合，所以解决方案并不描述一个特定二聚体的设计或实现，而是提供设计问题的抽象描述或怎样用一个具有一般意义的元素组合（类或对象组合）来解决这个问题
- 效果 consequences 描述了模式应用的效果及使用模式应权衡的问题。**尽管我们描述设计决策时，并不总提到模式效果，但他们对于评价设计选择和理解使用模式的代码及好处具有重要意义**。软件效果大多关注对时间和空间的衡量，他们也表述了语言和实现问题。因为复用是面向对象设计的要素之一，所以模式效果包括他对系统灵活性、扩充性、可移植性的影响，显式地列出这些效果对理解和评价这些模式有帮助。

出发点的不同会产生对什么是模式和什么不是模式的理解不同。一个人的模式对另一个人来说可能只是基本构造部件。本书中我们将在一定的抽象层次上讨论模式。《设计模式》并不描述链表和 hash 表那样的设计，尽管他们可以用类来封装，也可以复用；也不包括那些复杂的、特定领域内的对整个应用或子系统的设计。
**本书中的设计模式是对被用来在特定场景下解决一般设计问题的类和相互通信的对象的描述**

一个设计模式命名、抽象和确定了一个通用设计结构的主要方面，这些设计结构能被用来构造可复用的面向对象设计。设计模式确定了所包含的类、实例、他们的角色、协作方式以及职责分配。每一个设计模式都集中于一个特定的面向对象设计问题或设计要点，描述了什么时候使用它，在另一些设计约束条件下是否还能使用，以及使用效果如何取舍。既然我们最终要实现设计，设计模式还提供了 C+=和 Smalltalk 示例代码来阐明其实现

虽然设计模式描述的是面向对象设计，但他们都基于实际的解决方案，这些方案的实现语言是 Smalltalk 和 C++等主流面向对象编程语言，而不是过程式语言 Pascal、C、Ada 或更具动态特性的面向对象语言 CLOS、Dylan、Self。我们从实用角度出发选择了 Smalltalk 和 CPP
程序语言的选择非常重要，影响人们理解问题的出发点。我们的设计模式采用了 Smalltalk 和 C++层的语言特性，这个选择实际上决定了哪些机制可以方便地实现，而哪些不能。若我们采用过程式语言，可能就要包括诸如「继承」「封装」「多态」的设计模式，相应的，一些特殊的面向对象语言可以直接支持我们的某些模式。例如 CLOS 支持多方法 multi-method 概念，这就减少了 Visitor 模式的必要性。事实上，CPP 已有足够的差别来说明对某些模式一种语言比另一种语言表述起来更容易一些（5.4 节 Iterator 模式）

1.2 Smalltalk MVC 中的设计模式
Smalltalk-80 中，模型 Model 是应用对象、View 视图是它在屏幕上的表示、Controller 定义用户界面对用户输入的响应方式 三元组 MVC 被用来构建用户界面。「模式」这一术语的含义
不使用 MVC，用户界面设计往往将这些对象混在一起，而 MVC 则将它们分离以提高灵活性和复用性
MVC：建立一个「订购、通知」协议来分离视图和模型。视图必须保证他的显示正确的反映了模型的状态。一旦模型的数据发生变化，模型将通知有关的视图，每个
视图相应地得到刷新自己的机会。这种方法可以让你为一个模型提供不同的多个视图表现形式，也能够为一个模型创建新视图而无须重写模型

下图显示了一个模型和三个视图（为了简单起见我们省略控制器）,模型包含一些数据值，视图通过电子表格、柱状图、饼图这些不同的方式来展示这些数据，模型
数据发生变化时，模型就通知他的视图，而视图将与模型通信以访问这些数据值

表面上看，这个例子反映了将视图与模型分离的设计，然而这个设计还可用于解决更一般的问题：将对象分离，使得一个对象的改变能够影响另一些对象，二这个对象并不需要知道那些那些被影响的对象细节。这个更一般的设计被描述成 Observer 模式

MVC 的另一个特征是视图可以嵌套。例如按钮控制面板可以用一个嵌套了按钮的复杂视图来实现。
CompositeView 类来支持嵌套视图。CompositeView 类的对象行为上类似于 View 类对象，一个组合视图可用于任何视图可用的地方，但是他包含并管理嵌套视图

上例反映了可以将组合视图与其构件平等对待的设计，同样地，该设计也适用于更一般的问题：将一些对象划为一组，并将该组对象当做一个对象来使用。
这个设计被描述为 Composite 模式，该模式允许你创建一个类层次结构，一些子类定义了原子对象如 Btn，而其他类定义了组合对象 CompositeView

MVC 允许你在不改变视图外观的情况下改变视图对用户输入的的响应方式。例如，你可能希望改变视图对键盘的响应方式，或希望使用弹出菜单而不是原来的命令键
方式。MVC 将响应机制封装在 Controller 对象中。存在着一个 Controller 的类层次结构，是的可以方便地对原有 Controller 做适当改变而创建新 Controller

View 使用 Controller 子类的实例来实现一个特定的响应策略。要实现不同的响应策略只要用不同种类的 Controller 实例替换即可。甚至可以在运行时刻
通过改变 View 的 Controller 来改变 View 对用户输入的的响应方式。例如一个 View 可以被禁止接收任何输入，只需给他一个忽略输入事件的 Controller

View-Controller 关系是 Strategy 模式的一个例子。一个策略是一个表述算法的对象。当你想静态或动态地替换一个算法，或你有很多不同的算法，或算法
中包含你想封装的复杂数据结构，这时策略模式非常有用

MVC 还使用了其他设计模式：指定视图缺省控制器的 Factory Method3.3 和增加视图滚动的 Decorator4.4.但是 MVC 的主要关系还是由 Observer、Composite
和 Strategy 三个设计模式给出

# 描述设计模式

图形符号：将设计过程的结果简单记录为类和对象之间的关系。为了达到设计复用，我们必须同时记录设计产生的决定过程、选择过程和权衡过程。
我们将用统一的格式描述设计模式：（模板具有统一的信息描述结构，有助于你更容易学习、比较和使用设计模式）

- 模式名和分类
  简洁地描述了模式的本质。一个好名字非常重要，因为它将成为你的设计词汇表中的一部分。模式的分类反映了我们将在 1.5 节介绍的方案
- 意图
  设计模式做什么，基本原理和意图，解决的是什么样的特定设计问题
- 别名
- 动机
  - 说明一个设计问题以及如何用模式中的类、对象来解决该问题的特定情景。该情景会帮助你理解随后对模式更抽象的描述
- 适用性
  什么情况下可以使用设计模式 可用来改进哪些不良设计 你怎样识别这些情况
- 结构
  - 采用基于对象建模技术 OMT 表示法对模式中的类进行图形描述。我们也使用交互图来说明对象之间的请求序列和协作关系
- 参与者
  - 类、对象以及他们各自的职责
- 协作
  - 模式参与者怎样协作以实现他们各自职责
- 效果
  - 模式怎样支持他的目标 使用模式的效果和所需做的权衡取舍
- 实现
  - 实现模式时，需要知道的一些提示、技术要点及应避免的缺陷，以及是否存在某些特定于实现语言的问题
- 代码示例
- 已知应用
- 相关模式
- Abstract Factory(3.1)提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
- Adapter(4.1)将一个类接口转换成客户希望的另一个接口。Adapter 模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作
- Bridge（4.2）将抽象部分与它的实现部分分离，使它们都可以独立地变化
- Builder(3.2)将一个复杂对象的构建与他的表示分离，使得同样的构建过程可以创建不同的表示
- Chain of Responsibility(5.1):为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链
  - 传递该请求，直到有一个对象处理它
- Command(5.2)将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化：对请求排队或记录请求日志，以及支持可取消的操作
- Composite(4.3):将对象组合成树形结构以表示「部分-整体」的层次结构。使得客户对单个对象和复合对象的使用具有一致性
- Decorator（4.4）：动态地给一个对象添加一些额外的职责 就扩展功能而言，Decorator 模式比生成子类更加灵活
- Facade（4.5）：为子系统中的一组接口提供一个一致界面。Facade 模式定义了一个高层接口，这个接口使得这一子系统更加容易使用
- Factory Method(3.3)定义一个用于创建对象的接口，让子类决定将哪一个子类实例化 使一个类的实例化延迟到其子类
- Flyweight（4.6）运用共享技术有效的支持大量细粒度对象
- Interpreter（5.3）：给定一个语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子
- Iterator（5.4）提供一种方法顺序访问一个聚合对象中各个元素而不需要暴露该对象的内部表示
- Mediator（5.5）：用一个中介对象来封装一系列的对象交互 中介者使各对象不需要显示的相互引用，从而使其耦合松散，而且可以独立的改变他们之间的交互
- Memento（5.6）：记忆碎片 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态
- Observer（5.7）： 定义对象间的一种一对多依赖关系，以便当一个对象状态发生改变时，所有依赖于他的对象都得到通知并自动刷新
- Prototype(3.4)：用原型实例指定创建对象的种类，并且通过拷贝这个原型来创建新对象
- Proxy(4.7):为其他对象提供一个代理以控制对这个对象的访问
- Singleton(5.3):保证一个类仅有一个实例，并提供一个访问他的全局访问点
- State(5.8):允许一个对象在其内部状态改变时改变他的行为。对象看起来似乎修改了它所属的类。
- Strategy(5.9):定义一系列算法，把他们一个个封装起来，并且可相互替换。本模式使得算法的变化可独立于使用它的客户
- Template Method(5.10): 定义一个操作中的算法骨架，而将一些步骤延迟到子类中 使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤
- Visitor（5.11）：表示一个作用于某对象结构中的各元素操作。他使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作
- www.TopSage.com

# 组织编目

设计模式在粒度和抽象层次上各不相同。由于存在众多的设计模式，我们希望用一种方式将他们组织起来。这一节将对设计模式进行分类以便于我们对各族相关模式进行引用
分类有助于更快学习目录中的模式，且对发现新模式也有指导作用

# 目的（设计模式空间）

- 创建型
  - Factory Method（3.3，范围：类）
  - Abstract Factory（3.2 范围：对象）、Builder3.2、Prototype3.4，Singleton3.5
- 结构型
  - Adapter（类）4.1
  - Adapter（对象）4.1，Bridge4.2、Composite4.3、Decorator4.4、Facade4.5、Flyweight4.6、Proxy4.7
- 行为型

  - Interpreter5.3 Template Method5.10
    - Interpreter(解释器):给定一个语言，定义它的文法的一种表示，并定义一个解释器，这个解释器使用该表示来解释语句中的句子。 解释者、口译者
  - Chain of Responsibility5.1 Command5.2 Iterator5.4 Mediator5.5 Memento5.6 Observer5.7 State5.8 Strategy5.9 Visitor5.10
    我们根据两条准则对模式进行分类。第一是目的准则，即模式是用来完成什么工作的。模式依据其目的可分为创建型 Creational、结构型 Structural、行为型
    Behavioral。**创建型模式与对象的创建有关**；**结构型模式处理类或对象的集合**；**行为型模式对类或对象怎样交互和怎样分配职责进行描述**
    第二是范围准则，指定模式主要是用于类还是对象。类模式处理类和子类之间的关系，这些关系通过继承建立，是静态的，在编译时刻便确定下来。对象模式处理对象间的
    关系，这些关系在运行时刻可以变化，更具动态性。

    几乎所有模式都使用继承机制，所以「类模式」只指那些集中于处理类间关系的模式，而大部分模式都属于对象模式的范畴。

  创建型类模式将对象的部分创建工作延迟到子类，而创建型对象模式则将他延迟到另一个对象中

  结构型类模式使用继承机制来组合类，而结构型对象模式则描述了对象的组装方式。行为型类模式使用继承描述算法和控制流，而行为型对象模式则描述一组对象怎么
  协作完成单个对象所无法完成的任务。

  还有其他组织模式的方法，有些模式经常会被绑在一起使用。例如，Composite 常和 Iterator 和 Visitor 一起使用。有些模式可替代，例如 Prototype
  常用来替代 Abstract Factory;有些模式尽管使用意图不同，但产生的设计结果类似，例如 Composite 和 Decorator 结构图相似。

  还有一种方式是根据模式的「相关模式」部分所描述的他们怎样相互引用来组织设计模式

从多角度去思考模式有助于对他们的功能、差异、和应用场合的更深入了解

Facade=单个实例=》Singleton
Abstract Factory=单个实例=》Singleton
Abstract Factory=动态地配置工厂=》Prototype
Abstract Factory=用工厂方法实现=》Factory Method

Template Method=经常使用=》Factory Method
Template Method=定义算法步骤=》Strategy
Decorator《=改变外表改变内容=》Strategy
Strategy=共享策略=》Flyweight
State =共享状态=》Flyweight《=共享组合= Composite =给对象增加职责=> Decorator
=共享终结符=》 Flyweight
=共享终结符=》 Interpreter
Interpreter =定义语法=》Composite
Interpreter =增加操作=》Visitor
Composite =增加操作=》Visitor
Visitor =定义遍历=》Iteratorπ
Composite =枚举子女=Iterator
Composite =创建组合=》Builder
Iterator =保存迭代状态= Memento
Interpreter=增加操作=》Visitor
Visitor=定义遍历=》Iterator

Chain of Responsibility=定义链=》Composite
Command=使用组合命令=》Composite
Command=避免滞后=》Memento

Adapter Proxy Bridge

Observer=对复杂依赖关系的管理=》Mediator

# 1.6 怎样解决设计问题

多种方法：

1. 寻找合适的对象 面向对象程序由对象组成，对象包括数据和对数据进行操作的过程（方法、操作）。对象在收到客户请求（消息）后，执行相应操作
   客户请求是使对象执行操作的唯一方法，操作又是对象改变内部数据的唯一方法。由于这些限制，对象内部状态是被封装的，他不能被直接访问，他的表示对于我对象外部不可见。
   面向对象设计最困难的部分是将系统分解成对象集合。因为要考虑许多因素：封装、粒度、依赖关系、灵活性、性能、演化、复用等等，他们都影响着系统的分解，并且这些因素通常还是互相冲突的。
   设计方法学支持许多设计方法。可以写出一个问题描述，挑出名词和动词，进而创建相应的类和操作；或者你可以关注于系统的协作和职责关系;或者你可以对现实世界
   建模，再将分析时发现的对象转化至设计中。至于哪一种方法最好，并无定论。

设计的许多对象来源于现实世界的分析模型。但是设计结果所得到的类通常在现实世界中并不存在，有些是像数组之类的低层类，而另一些则层次较高。例如
Composite（4.3）模式引入了统一对待现实世界并不存在的对象的抽象方法。严格反应当前现实世界的模型并不能产生也反应将来世界的系统。设计中的抽象
对于产生灵活的设计是至关重要的。
设计模式帮你确定并不明显的抽象和描述这些抽象的对象。 例如描述过程或算法的对象现实中并不存在，但他们却是设计的关键部分。Strategy（5.9）描述了
怎样实现可互换的算法族。State（5.8）将实体的每一个状态描述为一个对象。这些对象在分析阶段，甚至在设计阶段的早期都并不存在，后来为使设计更灵活
、复用性更好才讲他们发掘出来 2. 决定对象的粒度 3. 大小和数目上变化极大。能表示下自硬件或上自整个应用的任何事物。 那么我们怎样决定一个对象应该是什么呢

1.  设计模式很好的讲述了这个问题。Facade（4.5）描述了怎样用对象表示完整的子系统，Flyweight（4.6）描述了如何支持大量最小粒度的对象。其他一些
2.  设计模式描述了将一个对象分解成许多小对象的特定方法。Abstract Factory(3.1)和 Builder（3.2）产生那些专门负责生产其他对象的对象。Visitor（5.10）和 Command（5.2）生成的对象专门负责实现对其他对象或对象组的请求
3.  指定对象接口
    对象声明的每一个操作指定操作名、作为参数的对象和返回值，这就是所谓的操作的型构 signature。对象操作所定义的所有操作型构的集合被称为该对象的接口（interface）。对象接口描述了该对象所能接受的全部请求的集合，任何匹配对象接口中型构的请求都可以发送给该对象
    类型 type 是用来表示特定接口的一个名字。如果一个对象接受「Window」接口所定义的所有操作请求，那么我们就说该对象具有「window」类型。一个对象
    可以有许多类型，并且不同对象可以共享同一个类型。对象接口的某部分可以用某个类型来刻画，而其他部分则可用其他类型刻画。而其他部分则可用其他类型
    刻画。两个类型相同的对象只需要共享他们的部分接口。接口可以包含其他接口作为子集。当一个类型接口包含另一个类型接口时，我们就说他是另一个类型的
    子类型（subtype），另一个类型称之为它的 supertype，我们常说子类型继承了它的超类型的接口

在面向对象系统中，接口是基本的组成部分。对象只有通过他们的接口才能与外部交流。如果不通过对象接口就无法知道对象的任何事情，也无法请求对象做任何事情。
对象接口与其功能实现是分离的，不同对象可以对请求做不同的实现，也就是说，两个具有相同接口的对象可以有完全不同的实现。
当给对象发送请求时，你可以写一个一般的程序，他期待着那些具有该特定接口的对象。进一步讲，动态绑定允许你在运行时刻彼此替换有相同接口的对象。这种可
替换性就称为多态 polymorphism，他是面向对象系统中的核心概念之一。多态允许客户对象仅要求其他对象支持特定接口，除此之外对其假设几近于无。多态简化了
客户的定义，使得对象间彼此独立，并可以在运行时刻动态改变他们相互的关系。
设计模式通过确定接口的主要组成成分及接口发送的数据类型，来帮助你定义接口。设计模式也许还会告诉你接口中不应包括哪些东西。Memento（5.6）是一个 很好
的例子，他描述了怎样封装和保存对象内部的状态，以便一段时间后对象能恢复到这一状态。他规定了 Memento 对象必须定义两个接口：一个允许客户保持和复制 Memento 和一个只有原对象才能使用的用来储存和提取 memento 中状态的特权接口。

设计模式也指定了接口之间的关系。特别地，他们经常要求一些类具有相似的接口；或他们对一些类的接口做了限制。例如，Decorator（4.4）和 Proxy（4.7）
要求 Decorator 和 Proxy 对象的接口与被修饰的对象和受委托的对象一致。而 Visitor（5.1）模式中，Visitor 接口必须发映出 visitor 能访问的对象的所有类。

4. 描述对象的实现

至此，我们很少提及到实际上怎么去定义一个对象。对象的实现是由他的类决定,类指定了对象的内部数据和表示，也定义了对象所能完成的操作。我们基于 OMT 表示法，将
类描述成一个矩形，其中的类名以黑体表示。操作在类名下面，以常规字体表示。类所定义的任何数据都在操作下面。类名与操作之间以及操作与数据之间用横线分割
返回类型与实例变量类型可选，因为我们并未假设一定要用具有静态类型的实现语言

## ClassName

Operation1()
Type Operation2()

- instanceVariable1
  Type instanceVariable2
  对象通过实例化来创建，此对象被称为该类的实例。当实例化类时，要给对象内部数据（实例变量组成）分配存储空间，并将操作与这些数据联系起来。对象的许多类似实例是由
  实例化同一个类来创建的。
  下面的虚箭头表示一个类实例化另一个类的对象，箭头指向被实例化的对象的类
  Instantiator Instantiatee
  新的类可以由已存在的类通过类继承来定义。子类 subclass 继承父类 parent class 时，子类包含了父类定义的所有数据和操作。子类的实例对象包含所有子类和父类定义的数据，且他们能完成子类和父类定义的所有操作。

抽象类 abstract class 主要目的是为他的子类定义公共接口。一个抽象类把它的部分或全部操作的实现延迟到子类中，所以一个抽象类不能被实例化。
在抽象类中定义却没有实现的操作是抽象操作，非抽象类是具体 concrete 类

子类能够改进和重新定义他们的父类操作：override 重定义父类定义的操作。接管 对象族 斜体

mixin class 多继承，不能实例化

# 类继承和接口继承的比较

对象的类 class，对象的类型 type
一个对象的类定义了对象是怎样实现的，同时也定义了对象的内部状态和操作的实现。但是对象类型只与它的接口有关，接口即对象能响应的请求集合。
一个对象可以有多个类型，不同类的对象可以有相同类型

对象的类和类型紧密相联。因为类定义了对象所能执行的操作，也定义了对象类型。当我们说一个对象是一个类实例时，即指该对象支持类所定义的接口。

CPP 和 Eiffel 语言的类既指定对象的类型又指定对象的实现。Smalltalk 程序不声明变量的类型，所以编译器不检查赋给变量的对象类型是否是该变量的类型的子类型。
发送消息时需要检察消息接收者是否实现了该消息，但不检查接收者是否是某个特定类的实例

类继承和接口继承（子类型化）的差别很重要。类继承根据一个对象的实现定义了另一个对象的实现。他是代码和表示的共享机制。然后接口继承（或子类型化）描述了
一个对象什么时候能被用来替代另一个对象。

因为许多语言并不显式地区分这两个概念，所以容易被混淆。在 C 加加中，继承既指接口的继承又指实现的继承，C 加加中接口继承的标准方法是共有继承一个含（纯）虚成员
函数的类。C++中纯接口继承接近于公有继承纯抽象类，纯实现继承或纯类继承接近于私有继承。Smalltalk 中的继承只指实现继承。

子类型 抽象类所定义的类型来操纵对象。

Chain of Resp(5.1)中的对象必须有一个公共类型，但是一般情况下他们不具有公共实现。 在 Composite4.3 中，构件定义了一个公共接口，但 Composite
通常定义一个公共实现。Command5.2、Observer5.7、State5.8、Strategy5.9 通常纯粹作为接口的抽象类来实现。

## 对接口编程，而不是对实现编程

类继承：通过复用父类功能而扩展应用功能的基本机制。它允许你根据旧对象快速定义新对象。它允许你从已存在的类中继承所需要的绝大部分功能，从而几乎无需任何代价就可以获得新实现。

然而，实现的复用只是成功的一半，继承所拥有的定义具有相同接口的对象族的能力也是很重要的（通常可以从抽象类继承）
为什么呢因为多态依赖于这种能力

**当继承类被恰当使用时，所有从抽象类导出的类将共享该抽象类的接口。**
这意味着子类仅仅添加或重定义操作，而没有隐藏父类的操作。

这时，所有子类都能响应抽象类接口中的请求，从而子类的类型都是抽象类的子类型

**只根据抽象类中定义的接口来操纵对象有以下两个好处：**

1. 客户无需知道他们使用对象的特定类型，只需对象有客户所期望的接口
2. 客户无需知道他们使用的对象是用什么类来实现的，他们只需知道定义接口的抽象类

**这将极大地减少子系统实现之间的相互依赖关系，也产生了可复用的面向对象设计的如下原则**：
**针对接口编程，而不是针对实现编程**
_不将变量声明为某个特定的具体类的实例对象，而是让它遵从抽象类所定义的接口_
_这是本书设计模式的一个常见主题_

当你不得不在系统的某个地方实例化具体的类（即指定一个特定的实现）时，创建型模式 Abstract Factory3.1，builder3.2，factory method3.3、Prototype3.4
和 singleton3.5 可以帮你.通过抽象对象的创建过程，这些模式提供不同方式以在实例化时建立接口和实现的透明链接。创建型模式确保你的系统是采用针对接口的方式书写的，而不是针对实现而书写的。

## 1.6.5

运用复用机制
灵活可复用的软件

白箱复用 white-box reuse。父类的内部细节对子类可见
对象组合 类继承 新的更复杂功能通过组装、组合对象来获得。对象组合要求被组合的对象具有良好定义的接口。这种复用风格称为黑箱复用

对象只以黑箱形式出现
类继承是在编译时刻静态定义的，且可直接使用，因为程序设计语言直接支持类继承。类继承可以较方便地
类继承的不足之处：因为在编译时刻就定义了，所以无法在运行时刻改变从父类继承的实现。更糟的是，父类通常定义了部分子类的具体展示。
因为继承对子类揭示了其父类的实现细节，所以继承常被认为「破坏了封装性」。子类中的实现与它的父类有如此紧密的依赖关系，以至于父类实现中的任何变化必然会
导致子类发生变化。
**当需要复用子类时，实现上的依赖就会产生一些问题。如果继承下来的实现不适合解决新问题，则父类必须重写或其他更适合的类替换。这种依赖关系限制了灵活性并最终限制了复用性。一个可用解决方法就是只继承抽象类，因为抽象类通常提供较少的实现。**

**对象组合是通过获得对其他对象的引用而在运行时刻动态定义的。**组合要求对象遵守彼此的接口约定，进而要求更仔细得定义接口，而这些接口并不妨碍你将一个对象和其他对象一起使用。这还会产生良好的结果：因为对象只能通过接口访问，所以我们并不破坏封装性：只要类型一致，运行时刻还可以用一个对象来替代另一个对象；
更进一步，因为对象的实现是基于接口写的，所以实现上存在较少的依赖关系

对象组合对系统设计还有另一个作用，即优先使用对象组合有助于你保持每个类被封装，并被集中在单个任务上。这样类和类继承层次会保持较小规模，并且不太可能增长为不可控制的庞然大物
另一方面，基于对象组合的设计会有更多对象，而有较少的类，且系统的行为将依赖于对象间的关系而不是被定义在某个类中

**这导出了我们的面向对象设计的第二个原则**：
**优先使用对象，而不是继承**

理想情况下，你不应为获得复用而去创建新构件，**应该能够只使用对象组合技术**

通过组装已有的构件就能获得你需要的功能。但是事实很少如此，因为可用构件的集合实际上并不足够丰富。使用继承的复用使得创建新构件要比组装旧构件来得容易。这样，**继承和对象组合常一起使用**

然而，我们的经验表明：设计者往往过度使用了继承这种复用技术。但依赖于对象组合技术的设计却有更好的复用性（或更简单）。你将会看到设计模式中一再使用对象组合技术。 2. 委托 3. delegation 是一种组合方法，它使组合具有与继承同样的复用能力。在委托方式下，有两个对象参与处理一个请求，接受请求的对象将操作委托给他的代理者 delegate
这种类似于子类将请求交给他的父类处理。使用继承时，被继承的操作总能引用接受请求的对象，C++中通过 this 成员变量，Smalltalk 中通过 self。委托方是为了得到同样的效果，接受请求的对象将自己传给被委托者（代理人），使被委托的操作可以引用接受请求的对象。
举例来说，我们可以在窗口类中保存一个矩形类的实例变量来代理矩形类的特定操作，这样窗口类可以复用矩形类的操作，而不必像继承时那样定义成矩形类的子类。也就是说，一个窗口拥有一个矩形，而不是一个窗口就是一个矩形。窗口现在必须显式的将请求转发给它的矩形实例。而不是像以前它必须继承矩形的操作。
下面的图显示了窗口类将它的 Area 操作委托给一个矩形实例。
箭头线表示一个类对另一个类实例的引用关系。引 yin 用名 是可选的，本例为 rectangle。委托的主要优点在于他便于运行时刻组合对象操作以及改变这些操作的组合方式。
假定矩形对象和圆对象有相同类型，我们只需简单的用圆对象替换矩形对象，则得到的窗口就是圆形的。
委托与那些通过对象组合以取得软件灵活性的技术一样，具有如下不足之处：动态的、高度参数化的软件比静态软件更难与理解。还有运行抵消问题，不过从长远看来人的低效才是更主要的。只有当委托使设计比较简单而不是更复杂时，他才是好的选择。要给出一个能确切告诉你什么时候可以使用委托的规则是很困难的。因为委托可以得到的效率是与上下文有关的，并且还依赖于你的经验。委托最适用于符合特定程式的情形，即标准模式的情形。
有一些模式使用了委托，如 State5.8，Strategy5.9，Visitor5.11. 在 Strategy 中，一个对象将请求委托给一个描述当前状态的 State 对象来处理。在 Strategy 中，一个对象将一个特定的请求委托给一个描述请求执行策略的对象，一个对象只会有一个状态，但他对不同的请求可以有许多策略。这两个模式的目的都是通过改变受托对象来改变委托对象的行为。在 Visitor 中，对象结构的每个元素上的操作总是被委托到 Visitor 对象。

其他模式则没有这么多地用到委托。Mediator5.5 引进了一个中介其他对象间通信的对象。有时，Mediator 对象只是简单地将请求转发给其他对象；有时，他沿着只想自己的引用来传递请求，使用真正意义的委托。Chain of Responsibility5.1 通过将请求沿着对象链传递来处理请求，有时，这个请求本身带有一个接受请求对象的引用，这时该模式就引用了委托。Bridge4.2 将实现与抽象分离开，如果抽象和一个特定实现非常匹配，那么这个实现可以代理抽象的操作。委托是对象组合的特例。他告诉你对象组合作为一个代码复用机制可以替代继承。

3. 继承和参数化类型的比较

另一种功能复用技术（并非严格的面向对象技术）是参数化类型，也就是类属 generic
(Ada,Eiffel)或模板（CPP）。他允许你在定义一个类型时并不指定该类型所用到的其他所有类型。未经指定的类型在使用时以参数形式提供。例如一个列表类能够以他所包含元素的类型来进行参数化。如果你想声明一个 Integer 列表，只需将 Integer 类型作为列参数化类型的参数值；声明一个 String 列表，只需提供 String 类型作为参数值。语言的实现将会为各种元素类型创建相应的列表类模板的定制版本

**参数化类型**给我们提供除了类继承和对象组合外的第三种方法来组合面向对象系统中的行为。许多设计可以使用这三种技术中的任何一种来实现.

**考虑对象聚合 aggregation 和相识 acquaintance**的差别以及他们在编译和运行时刻的表示是多么的不同。聚合意味着一个对象拥有另一个对象或对另一个对象负责。一般我们称一个对象包含另一个对象或者是另一个对象的一部分。聚合意味着聚合对象和其所有者具有相同的生命周期。
相识意味着一个对象仅仅知道另一个对象。「关联」或引用关系。相似的对象可能请求彼此的操作，但是他们不为对方负责。相识是一种比聚合要弱 ruo 的关系，他只标识了对象间松散的耦合关系。
下图中，普通箭头表示相识，尾部带有菱形的箭头线表示聚合
Aggregator 菱形=====聚合实例=====》 Aggregatee

# Page 27/267

为将依赖于对象间关系而不是被定义在某个类中。

# 发布订阅模式

其中，需要去判断两个函数是否相等：直接比较函数引用啊

var a=function(){}
var b=function(){}
console.log(a===b)
回复
mcck_hyj：如果比较函数引用的话，每个匿名方法都是不一样的,我想要的结果是，如果在同一个位置，同一行写的并且方法体一样就相同，否则都不同
回复 2019-02-23
代码宇宙：@mcck_hyj 伪需求，想想你为什么要这样比较，有没有办法绕过去
回复 2019-02-25
gaoryrt：@mcck_hyj 直接手动加一个属性不好么？

# https://www.runoob.com/design-pattern/design-pattern-tutorial.html

解决方案，相当长得一段时间的试验和错误。

那个 200 多个午休床我肯定是要买下的，不过我一般午休和傍晚休分别休息（20-30 分钟，10-20 分钟）

对于那些具有丰富的开发经验的开发人员，学习设计模式有助于了解在软件开发过程中所面临的问题的最佳解决方案；对于那些经验不足的开发人员，学习设计模式有助于通过一种简单快捷的方式来学习软件设计。

## intro
