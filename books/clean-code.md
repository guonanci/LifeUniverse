clean-code.md
A Handbook of Agile Software Craftsmanship
Robert C. Martin
**软件质量，不但依赖于架构以及项目管理，而且与代码质量紧密相关。**敏捷开发流派、传统开发流派都适用

# 敏捷方法的缺点

它对小型开发项目没有用。

必要的设计和文档缺乏强度。

它需要一名专家项目成员在会议中作出重要决定。

与其他开发方法相比，敏捷开发方法的成本略高。

如果项目经理不清楚需求和他/她想要的结果，项目可能很快就会偏离轨道。

6 人赞同了该文章

踏入软件开发行列时间不算短了，也使用过很多项目管理软件和方法，但是在使用过程中多多少少都会遇到一些问题吧，同行们或多或少也会有相应的体验。近期试用了一下华为最新推出的项目管理工具-华为软件开发云，接触了敏捷开发，产生一些想法。以下是使用体验，仅供同行们参考。

# 一、敏捷开发技术的几个特点和优势

1．个体和交互胜过过程和工具

2．可以工作的软件胜过面面俱到的文档

3．客户合作胜过合同谈判

4．响应变化胜过遵循计划

# 二、敏捷开发技术的 12 个原则

1．我们最优先要做的是，通过尽早的、持续的交付有价值的软件来使客户满意。

2．即使到了开发的后期，也欢迎改变需求。

3．经常性地交付可以工作的软件，交付的间隔可以从几周到几个月，交付的时间间隔越短越好。

4．在整个项目开发期间，业务人员和开发人员必须天天都在一起工作。

5．围绕被激励起来的个人来构建项目。

6．在团队内部，最具有效果并且富有效率的传递信息的方法，就是面对面的交谈。

7．工作的软件是首要的进度度量标准。

8．敏捷过程提倡可持续的开发速度。

9．不断地关注优秀的技能和好的设计会增强敏捷能力。

10．简单使未完成的工作最大化。

11．最好的构架、需求和设计出自于自组织的团队。

12．每隔一定时间，团队会在如何才能更有效地工作方面进行反省，然后相应地对自己的行为进行调整。

三、敏捷开发技术的适用范围

1.项目团队的人数不能太多

2.项目经常发生变更

3.高风险的项目实施

4.开发人员可以参与决策

根据以上三点，大体可以总结出：

优势：

敏捷确实是项目进入实质开发迭代阶段，用户很快可以看到一个基线架构版的产品。敏捷注重市场快速反应能力，也即具体应对能力，客户前期满意度高。

劣势：

但敏捷注重人员的沟通，忽略文档的重要性，若项目人员流动大太，又给维护带来不少难度，特别项目存在新手比较多时，老员工比较累。

需要项目中存在经验较强的人，要不大项目中容易遇到瓶颈问题。

结合华为软件开发云，他们提供了两种项目创建方法：Scrum 和 Scrum 精简，可以结合自己的不同习惯，选择合适自己团队的方法，这点还是不错的。

同时，华为软件开发云，在文档和百科管理上，也增加了自己的特色，有效避免传统敏捷开发的劣势。大家不妨试用一下，后续有什么建议和想法，欢迎一起探讨。
代码质量与其整洁度成正比。干净的代码，质量可靠，也为后期维护、升级奠定了良好基础。一系列行之有效的整洁代码操作实践。一条条规则（启示）。来自现实项目的正反两面范例。程序员、技术经理。从命名到重构的多个编程方面，虽为一家之言，然诚有可资借鉴的价值。

# 序

乐嚼 Ga-Jol 是在丹麦最受欢迎的糖果品种之一，它浓郁的甘草味道，完美得弥补了此地潮湿且时常寒冷的天气。哲言慧语。
**以小见大**，一些价值殊胜的小主题
事之超绝而稀有者，称为殊胜。 如吾人常赞叹极乐净土因缘殊胜，因阿弥陀佛发四十八大愿普度众生，凡有一念之善者皆可往生净土，莲花化生，实乃稀有之事。 殊，有超越的意思。 胜，有超越的意思。 两个超越叠加，说明非常非常好，好得无法描述的好了。
殊胜就是稀有而超绝的意思。在佛门中，殊胜一词被常常用来赞叹法会的庄严、因缘的难缝、法门的玄妙等。例如，净土法门可以令凡夫众生带业往生一生不退

TDD 话题 鲍博和我认识到。思考和规划。

M104

# 第 1 章 整洁代码

从顶向下、从底往上、从里而外。而且我们还能说出好代码和糟糕代码之间的差异。有人也许会认为，关于代码的书有点儿落后于时代-代码不再是问题；我们应该关注模型和需求。确实有人说过我们正在临近代码终结点。很快代码就会自动产生出来，不需要再人工编写。程序员完全没用了，因为商务人士可以从规约直接生成程序。 代码程序了需求的细节，在某些层面上，这些细节无法被忽略或抽象，必须明确之。将需求明确到机器可以执行的细节程度，就是编程要做的事。而这种规约就是代码
**我希望语言的抽象程度继续提升，也期望 DSL 的数量继续增加。那会是好事一桩，但那终结不了代码。实际上，在较高层次上用 DSL 领域特定语言撰写的规约也将是代码。他也得严谨、精确、规范和详细，好让机器理解和执行**
那帮以为代码终将消失的伙计，就像是巴望着发现一种无规范数学的数学家们一般

1. 要有代码 Leblanc 法则：稍后等于永不 Later equals never。

2. 糟糕的代码
3. 混乱的代价 华丽新设计、态度、谜题、整洁代码的艺术、什么是整洁代码
   1. 小规模抽象、减少重复代码、提高表达力、提早构建简单抽象、只做一件事、表达力 Ward Cunningham，Wiki 发明者，eXtreme Programming 创始人之一，Smalltalk 语言和面向对象的思想领袖。所有在意代码者的教父。
4. 思想流派
   1. 整洁变量名、函数、类
5. 我们是作者
6. 前传与原则

# 2 有意义的命名

1. 介绍
   1. 变量、函数、参数、类、封包； jar、war、ear 文件
2. 名副其实

   1.

   ```tsx
   // 他为什么会存在,他做什么事，应该怎么用。如果名称需要注释来补充，那就不算名副其实。我们应该选择指明了计量对象、计量单位的名称
   int d // 消逝的时间，以日计
   int elapsedTimeInDays,daysSinceCreation,daysSinceModification,fileAgeInDays
   ```

   选择体现本意的名称能让人更容易理解和修改代码

   ```java
   class Solution {
     public List<int[]> getThem() {
       List<int[]> list1 = new ArrayList<int[]>();
       for (int[] x : theList)
         if(x[0] == 4)
           list1.add(x);
       return list1;
     }
   }
   ```

   为什么难以说明上列代码要做什么事？里面没有复杂的表达式。空格和缩进中规中矩。只用到 3 个变量和 2 个常量。甚至没有涉及任何其他类或多态方法，只是（或者看起来是）一个数组的列表而已
   **问题不在于代码简洁度，而在于代码模糊度**：即上下文在代码中未被明确体现的程度。上列代码要求我了解类似以下问题的答案：theList 中是什么类型的东西；theList 零下标条目的意义是什么；值 4 的意义是什么；我怎么使用返回的列表；
   问题的答案没体现在代码段中，可那就是他们该在的地方。比方说，我们在开发一种扫雷游戏，我们发现，盘面是名为 theList 的单元格列表，那就将其名称改为 gameBoard

   ```java
   class Solution {
     public List<int[]> getFlaggedCells() {
       List<int[]> flaggedCells = new ArrayList<int[]>();
       for (int[] cell: gameBoard)
         if (cell[STS_V] == FLAGGED)
           flaggedCells.add(cell);
       return flaggedCells
     }
   }
   ```

   注意，代码简洁性并未被触及。运算符和常量的数量全然保持不变，嵌套数量也全然保持不变，但代码变得明确多了。还可以更进一步，不用 int 数组表示单元格，而是另写一个类。该类高阔以个名副其实的函数 isFlagged，从而掩盖住那个魔术数（表示已标记的 4）。于是得到函数的新版本：

   ```java
   class Solution {
     public List<Cell> getFlaggedCells() {
       List<Cell> flaggedCells = new ArrayList<Cell>();
       for (Cell cell: gameBoard)
         if (cell.isFlagged())
           flaggedCells.add(cell);
       return flaggedCells
     }
   }
   ```

3. 避免误导 hp,aix,sco-UNIX platform const 别用 accountList 来指一组账号，除非他真的是 List 类型。**所以用 accountGroup 或 bunchOfAccounts，甚至 accounts 都会好一些**
   即便你是在三角计算程序，hp 看起来是个不错的缩写（hypotenuse 直角三角形的弦）.如果包容账号的容器并非真是个 List，就会引起错误的判断。（如后文提到的，即便容器就是个 List，最好也别在名称中写出容器类型名） 以同样的方式拼写出同样的概念才是信息，拼写前后不一致就是误导。

```java
class Solution {
  public static void copyChars(char a1[], char a2[]) {
    for (int i = 0; i < a1.length; i++) {
      a2[i] = a1[i];
    }
  }
}
// 如果参数名称改为src和destination（target）。
```

废话：Product 类还有一个 ProductInfo、ProductData 就像 a、an、the 一样，是意义含混的废话。但是只要能体现出有意义的区分，用 a 和 the 做前缀就没错。a 用在域内变量，the 用于函数参数。Variable 永远不应该出现在变量名中，Table 永远不应当出现在表名中，NameStr 会比 Name 好嘛。难道 Name 会是一个浮点数不成。如果是这样，就触犯了关于误导的规则。客户历史支付情况的类。moneyAmount 与 money、customerInfo 与 customer、accountData 与 account、theMessage 与 message 没区别。傻乎乎的自造词，而非恰当的英语词 4. 做有意义的区分 5. 使用读得出来的名称 6. genymdhms modymdhms pszqint（generationTimestamp，modificationTimestamp，recordId） 7. 使用可搜索的名称 单字母名称和数字常量，找`MAX_CLASSES_PER_STUDENT`很容易但是数字 7 找起来很麻烦。可能是某些文件名或者其他常量定义的部分。如果该常量是个长数字，又被人错改过，就会逃过搜索，造成错误。 WORK_DAYS_PER_WEEK 5. realDaysPerIdealDay=4, sum, int j = 0; j < NUMBER_OF_TASKS; j++ realTaskDays taskEstimate[j]\* realDaysP.. realTaskWeeks = (realDays / WORK_DAYS_PER_WEEK) sum += realTaskWeeks;

编码已经太多，不要再自找麻烦。把类型或作用域编进名称里面，徒然增加了解码的负担。代码读的越多，眼中就越没有前缀（m_dsc），最终前缀变成了不入法眼的肥料，变作了旧代码的标志物 8. 避免使用编码 匈牙利语标记法、成员前缀、接口和实现

1. ShapeFactoryImp 好于 IShapeFactory
2. 避免思维映射 不应该让读者在脑中把你的名称翻译成他们熟知的名称。这种问题经常出现在选择是使用问题领域术语还是解决方案领域术语时。管用单字母名称做循环计数器。（j、j、k，千万别用 l-- 容易被看做 1）聪明人有时会借脑筋急转弯炫耀其聪明。r 代表不包含主机名和图式 scheme 的小写字母版 url。专业程序员了解**明确是王道**善用其能，编写其他人能理解的代码。
3. 类名、对象名 名词（短语）Customer、WikiPage、Account、AddressParser，避免 Manager、Processor、Data、Info 不应当是动词。
   方法名 动词（短语），postPayment、deletePage、save 属性访问次、修改器、断言应该根据其值命名，依照 javabean 标准加上 get、set、is 前缀

```java
class Solution {
  public void search(paramWithItsType) {
    String name = employee.getName();
    customer.setName("mike");
    if (payment.isPosted())...
    // 重载构造器时，使用描述了参数的静态工厂方法名
    Complex fulcrumPoint = Complex.FromRealNumber(23.0);
    // better than, and 可以考虑将相应的构造器设置为private，强制使用这种命名手段
    Complex fulcrumPoint = new Complex(23.0);
  }
}
```

1. 别扮可爱 whack（kill）、eatMyShorts（abort）、HolyHandGrenade（圣手手雷(手榴弹）、删除条目 DeleteItems）
2. 每个抽象概念对应一个词 一以贯之，fetch、retrieve 收回、找回、get 多个类中的同种方法命名 controller/manager/driver DeviceManager/Protocol-Controller controllers 让人觉得这两个对象是不同类型的，也分属不同类
3. 别用双关语
4. 使用解决方案领域名称 只有程序猿才会读你的代码。Computer Science，CS 术语、算法名、模式名、数学术语吧 不该让协作者老是跑去问客户每个名称的含义。对于熟悉访问者 VISITOR 模式的程序员来说，AccountVisitor 富有意义 JobQueue 程序员要做太多技术性工作，取个技术性名称，通常是最靠谱做法。
5. 使用源自所涉问题领域的名称
6. 添加有意义的语境 很少有名称能自我说明-多数都不能。反之，你需要用有良好命名的类、函数、名称空间来放置名称，给读者提供语境。如果没这么做，给名称添加前缀就是最后一招了 firstName、lastName、houseNumber、city、state、zipcode 构成一个地址 前缀 addr 更好的方案是创建名为 Address 的类 即便是编译器也会知道这些变量隶属于某个更大的概念。 函数名给出了部分语境；算法提供了剩下部分；遍览函数后，你会知道 num、verb、pluraModifier 这 3 个变量是「测估」信息的一部分。
    PostalAddress/MAC/URI(web address) 良好的描述技巧和共有文化背景 技术、商业、管理问题，还不如说是一种教学问题 让自己集中精力 词句篇章，至少像是表和数据结构（词句并非总是呈现数据的最佳手段） 多数时候我们并不记忆类名和方法名 代码可读性有所提升、重构工具来解决问题（维护代码）

# 3 函数

编程的早期岁月，系统由程序和子程序组成，Fortran 和 PL/1 的年代，系统由程序和子程序、函数组成。如今只有函数存活下来。所有程序中的第一组代码

1. 短小

   1. FitNesse（一种开源测试工具） 很难找到长函数，代码复杂，大量字符串，怪异而不显见的数据类型和 API。有太多事发生，太多不同层级的抽象。奇怪的字符串和函数调用，混以双重嵌套、用标识来控制的 if 语句等等，不一而足。 做几个简单的方法抽离、重命名、一点点重构。
      HtmlUtil.java

   ```java
    public static String renderPageWithSetupsAndTeardowns(
      PageData pageData, boolean isSuite
    ) throws Exception {
      boolean isTestPage = pageData.hasAttribute("Test");
      if(isTestPage) {
        WikiPage testPage = pageData.getWikiPage();
        StringBuffer newPageContent = new StringBuffer();
        includeSetupPages(testPage, newPageContent, isSuite);
        includeTeardownPages(testPage, newPageContent, isSuite);
        pageData.setContent(newPageContent.toString());
      }
      return pageData.getHtml();
    }
    public static String renderPageWithSetupsAndTeardowns(
      PageData pageData, boolean isSuite) throws Exception {
      if(isTestPage(pageData))
        includeSetupAndTeardownPages(pageData, isSuite);
      return pageData.getHtml();
    }
   ```

   除非你正在研究 FitNesse 否则就理解不了所有细节。不过你大概能明白，该函数包含把一些设置和拆解页放入一个测试页面，再渲染为 HTML 的操作。如果你熟悉 JUnit，或许会想到，该函数归属于某个基于 Web 的测试框架。而且，这当然没错。从代码清单 3-2 中获得信息很容易，而代码清单 3-1 则晦涩难明 给函数赋予什么样的属性呢好让读者一看就明白函数是属于什么样的程序。

   3000 行、100-300 行、20-30 行 上世纪 80 年代我们常说不要长于一屏
   保持函数短小，if/else/while 代码块只有 1 行函数调用语句。块内调用的函数较具说明性名称，从而增加了文档上的价值。
   代码清单 3-1 想做好几件事：创建缓冲区、获取页面、搜索继承下来的页面、渲染路径、添加神秘字符串 缩进层级不该多于 1、2 层；

2. 只做一件事 代码清单 3-3 只做了一件事，其实也很容易看做三件事：判断是否为测试页面；如果是，则容纳进设置和分拆步骤；无论是否为测试页都渲染成 HTML；（3 个步骤都在该函数名下的同一抽象层）；可以用简洁的 TO 起头段落来描述该函数（LOGO 语言中的 TO 关键字，与 Ruby 和 Python 中 def 关键字的用法一致，每个函数都以 TO 起头，这对函数设计产生了有趣的影响）： TO RenderPageWithSetupsAndTeardowns, we check to see whether the page is a test page and if so, we include the setups and teardowns. In either case we render the page in HTML. 如果函数只是做了该函数名下同一抽象层上的步骤，则函数还是只做了一件事。编写函数毕竟是为了把大一些的概念（换言之，函数的名称）拆分为另一抽象层上的一系列步骤。清单 3-1 明显包括了处于多个不同抽象层级的步骤。即便是 3-2 也有俩个抽象层，这已被我们将其缩短的能力所证明。很难再将 3-3 做有意义的缩短。可以将 if 语句拆出来做一个名为 includeSetupAndTeardownsIfTestPage 的函数，但那只是重新诠释代码，**并未改变抽象层级**。要判断函数是否不止做了一件事，还有一个方法：看能否再拆出一个函数，该函数不仅只是重新诠释。。。。函数中的区段 代码清单 4-7 generatePrimes 被切分为 declarations/initializations/sieve 等区段；只做一件事的函数无法被合理地区分为多个区段。
3. 每个函数一个抽象层级 3-1getHtml：较高抽象层的概念，String pagePathName=PathParser.render(pagePath)中间，.append("\n")相当低的抽象层的概念；函数中混杂不同抽象层级，往往让人迷惑。读者可能无法判断某个表达式是基础概念还是细节。更恶劣的是，就像破损的窗户，一旦细节与基础概念混杂，更多的细节就会在函数中纠结起来。 **自顶向下读代码**阅读顺序。每个函数后面都跟着位于下一抽象层级的函数 查看函数列表
4. switch 语句 天生要做 N 件事，可以确保每个 switch 都埋藏在较低抽象层级。而且永远不重复（多态）

   ```java
   public Money calculatePay(Employee e)
   throws InvalidEmployeeTyp {
     switch (e.typ) {
       case COMMISSIONED:
         return calculateCommissionedPay(e);
       case HOURLY:
         return calculateHourlyPay(e);
       case SALARIED:
         return calculateSalariedPay(e);
       default:
         throw new InvalidEmployeeTyp(e.typ);
     }
   }
   ```

   好几个问题：1 它太长，当出现新雇员类型时，还会变的更长；2 其次，他明显做了不止一件事；3 他违反了单一权责原则 SRP Single Responsibility Principle，因为有好几个修改它的理由；4 它违反了开闭开放闭合原则 OCP Open Closed Principle；每当添加新类型时，就必须修改之。不过，该函数最麻烦的可能是到处皆有类似结构的函数。 **解决方案是将 switch 语句埋到抽象工厂底下，不让任何人看到。**该工厂使用 switch 语句为 Employee 的派生物创建适当的实体，而不同的函数，如 calPay，isPayday，deliverPay 等等，则捷由 Employee 接口多态地接受派遣。
   对于 switch 语句，我的规矩是如果只出现一次，用于创建多态对象，而且隐藏在某个继承关系中，在系统其他部分看不到，就还能容忍。当然也要就事论事，有时我也会部分或者全部违反这条规矩。
   Employee 与工厂

   ```java
   public abstract class Employee {
     public abstract boolean isPayday();
     public abstract Money calPay();
     public abstract void deliverPay(money pay);
   }
   // --------
   public interface EmployeeFactory {
     public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeTyp;
   }
   // --------
   public class EmployeeFactoryImpl implements EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeTyp {
      switch (r.typ) {
        case COMMISSIONED:
          return new CommissionedEmployee(r);
        case HOURLY:
          return new SalariedEmploy(r);
        default:
          throw new InvalidEmployeeTyp(r.typ);
      }
    }
   }

   ```

5. 使用描述性名称 代码清单 3-7 中，我把示例函数的名称从 testableHtml 改为 SetupTeardownIncluder.render 这个名称好得多，因为它较好的描述了函数做的事。我也给每个私有方法取个同样具有描述性的名称，如 isTestable 或者 includeSetupAndTeardownPages。好名称的价值 较好地描述了函数做的事。我也给每个私有方法 沃德原则：「如果每个例程都让你感到深合己意，那就是整洁代码」。函数越短小，功能越集中，就越便于取个好名字。别害怕长名称。长而具有描述性的名称，要比短而令人费解的名称好。长而具有描述性的名称，要比描述性的长注释好。使用某种命名约定，让函数名称中的多个单词容易阅读，然后使用这些单词给函数取个能说清其功用的名称。 Eclipse、IntelliJ 等现代 IDE 中改名称易如反掌。 最有描述性的那一个。 理清你关于模块的设计思路，帮你改进。追索好名称，往往导致对代码的改善重构。includeSetupAndTeardownPages、includeSetupPages、includeSuiteSetupPage、includeSetupPage。。includeTeardownPages、includeSuiteTeardownPages、includeTeardownPage
6. 函数参数 一元函数的普遍形式、标识参数、二元函数、三元函数、参数对象、参数列表、动词与关键字 最理想的参数数量是 0，其次 1，2，应尽量避免 3.有足够特殊的理由才能用 3 个以上。 参数不易对付。带有太多概念性。所以我在代码规范中几乎不加参数。以 StringBuffer 为例，我们可能不把它
7. 无副作用
8. 分隔指令与询问 public boolean set(String attr, String val); 设置某个指定属性，如果成功就返回 TRUE，如果不存在就返回 FALSE。if (set('username', 'unclebob')) set 是动词还是形容词。问 username 属性值是否之前已经设置为 uncle？或者在问 username 属性值是否成功设置为 unclebob 本意是动词，但是 if 语句的上下文中，像是形容词。读起来像是说『如果 username 属性值之前已经被设置为 unclebob』，而不是「设置 username」属性值为 unclebob，看看是否可行 将 set 函数重命名为 setAndCheckIfExists，但这对提高 if 语句的可读性不大 if(attrExists('username')) setAttr('username', 'uncleb')
9. 使用异常替代返回错误码 抽离 Try、Catch 代码块；错误处理就是一件事、Error.java 依赖磁铁 测试 利用一些机制把二元函数转换成一元函数。 writeField 方法写成 outputStream 的成员之一，从而能这样用：outputStream.writeField(name)。或者，也可以把 outputStream 写成当前类的成员变量，从而无需再传递他。 有时候俩参数正好，笛卡尔点 Point P=new Point(0, 0); 单个值的有序组成部分。 writeField(name) better than writeField(outputStream, name) output-Stream name 既非自然组合，也不是自然排序。 assertEquals(expected, actual) 只是一种需要学习的约定罢了。 排序、琢磨、忽略。assertEquals(msg, expected, actual) 浮点值的等值是相对而言。 其中一些参数应该封装为类。

   ````java
   Circle makeCircle(double x, double y, double radius);
   参数的大部分需求已经消失。 report.appendFooter(); 避免使用输出参数。如果函数必须要修改某种状态，就修改所属对象的状态吧。 从指令式函数返回错误码轻微违反了指令与询问分隔的规则。他鼓励了在 if 语句判断中把指令当做表达式使用。 if(delPage(page) == E_OK) 这不会引起动词、形容词混淆，但却导致更深层次的嵌套结构。当返回错误码时，就是在要求调用者立刻处理错误。
   禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完 eslint: 'no-warning-comments': 1,
   ```java
    if (delPage(page) == E_OK) {
      if (registry.deleteReference(page.name) == E_OK) {
        if (configKeys.deleteKey(page.name.makeKey())) == E_OK) {
          logger.log('page deleted');
        } else {
          logger.log('delReference from registry failed')
        }
      } else {
        logger.log('del failed');
        return E_ERROR
      }
    }

    try {
      delPage(page);
    } catch (Exception e)
   ````

   错误处理代码就能从主路镜代码分离出来 抽离 try、catch 代码块。 丑陋不堪，搞乱了代码结构，把错误处理与正常流程混为一谈。 把主体部分抽离出来，另外形成函数。delete 函数只与错误处理有关。

   ```java
   public void del(Page page) {
     try {
       delPageAndAllReferences(page)
     }
     catch (Exception e) {
       logger.log(e.getMsg());
     }
   }
   private void deletePageAndAllReferences(Page page) throws Exception {
     delPage(page)
     registry.delReference(page)
     cfgKeys.delK(page.name.makeK())
   }
   private void logEr(Exception e) {
     logger.log(e.getMsg());
   }
   ```

   try 就该是这个函数的第一个单词，而且在 catch/finally 代码块后面也不该有其他内容。
   返回错误码通常暗示某处有个类或是枚举，定义了所有错误码。

```java
public enum Error {
  OK,
  INVALID,
  NO_SUCH,
  LOCKED,
  OUT_OF_RESOURCES,
  WAITING_FOR_EVENT;
}
```

依赖磁铁 dependency magnet 依赖磁铁。其他许多类都得导入和使用它。当 Error 枚举修改时，所有这些其他的类都需要重新编译和部署。这对 Error 类造成了负面压力。程序员不愿增加新的错误代码，因为这样他们就得重新构建和部署所有东西。 复用旧的错误码，而不添加新的。 使用异常替代错误码，新异常就可以从异常派生出来，无需重新编译或重新部署。 10. 别重复自己 有个算法 可读性因为重复的消除而得到了提升。再读一遍那段代码， 当算法改变时，需要修改 4 次放过错误的可能性。 重复可能是软件中一切邪恶的根源。许多原则与实践规则都是为控制与消除重复而创建。 数据库重复 Codd 面向对象编程是如何将代码集中到基类，从而避免了冗余。面向方面编程 Aspect Oriented，Component Oriented 多少也都是消除重复的一种策略。看来，自子程序发明以来，软件开发领域的所有创新都是在 11. 结构化编程 Edsger Dijkstra 结构化编程规则。每个函数、函数中的每个代码块都应该有一个入口、一个出口。遵循这些规则，意味着在每个函数中只该有一个 return 语句，循环中不能有 break 或 continue 语句，而且永永远远不能有任何 goto 语句。 我们赞成结构化编程的目标和规范。但对于小函数，这些规则助益不大。只有在大函数中，这些规则才会有明显的好处。 所以只要函数保持短小，偶尔出现的 return、break、continue 语句没有坏处，甚至比单入单出更具有表达力。goto 只在大函数中才有道理，所以应该尽量避免使用。 12. 如何写出这样的函数 写代码和写别的东西很像。写论文或者文章时，先想什么就写什么，然后再打磨它，初稿也许粗陋无序，你就斟酌推敲，直至达到你心目中的样子。我写函数时，一开始都冗长而复杂。有太多缩进和嵌套循环。有过长的参数列表。名称是随意取的，也会有重复的代码。不过我会配上一套单元测试，覆盖每行丑陋的代码。 打磨这些代码，分解函数、修改名称、消除重复。我缩短和重新安置方法。有时我还分拆类。同时保持测试通过。 最后，遵循本章列出的规则，我组装好这些函数。 我并不从一开始就按照规则写函数，我想没人做得到。 每个系统都是使用某种特定语言搭建，而这种语言是程序员设计来描述那个系统的。函数是语言的动词类是名词（带有方法和继承等抽象特性、面向对象特性的事物名） 这并非是 编程艺术是且一直就是语言设计的艺术。 这并非是退回到那种认为需求文档中的名词和动词就是系统中类和函数的最初设想的可怕的旧观念。其实这是个历史更久的真理。 大师级程序员把系统当做故事来讲，而不是当做程序来写。他们使用选定编程语言提供的工具构建一种更为丰富且更具表达力的语言，用来讲那个故事。那种领域特定语言的一个部分，就是描述在系统中发生的各种行为的函数层级。 在一种狡猾的递归操作中，这些行为使用它们定义的与领域紧密相关的语言讲述自己那个小故事。 13. 小结 函数就会短小，有个好名字，而且被很好的归置。不过永远别忘记 真正的目标在于讲述系统的故事，而你编写的函数必须干净利落地拼装到一起，形成一种精确清晰的语言，。 14. SetupTeardownIncluder 程序 15. 文献

# 4 注释

良好的注释、乱七八糟的注释扰乱一个模块。陈旧、提供错误信息的注释更有破坏性。若编程语言足够有表达力，或者我们长于用这些语言来表达意图，就不那么需要注释--也许根本不需要。注释的恰当用法是弥补我们在用代码表达意图时遭遇的失败。注释总是一种失败。

1. 注释不能美化糟糕的代码
2. 用代码来阐述
3. 好注释
   1. 法律信息、提供信息的注释、对意图的解释、阐释、警示、TODO 注释、放大、公共 API 中的 Javadoc
4. 坏注释 喃喃自语、多余的、误导性、循规式、日志式、废话、可怕的废话、能用函数或变量时就别用注释、位置标记、括号后面的注释、归属与署名、注释掉的代码、HTML 注释、非本地信息、信息过多、不明显的联系、函数头、非公共代码中的 Javadoc、范例

# 5 格式

我写代码有个缺点，几乎不写空白行，这特别不好。以后写代码必须加上所有必要的空白行。
**Page111/404**

1. 目的
2. 垂直格式 向报纸学习、概念间垂直方向上的间隔、垂直方向上的靠近、垂直距离、垂直顺序
3. 横向格式 水平方向上的区隔与靠近、水平对齐、缩进、空范围
4. 团队规则
5. 鲍勃大叔的格式规则

# 6 对象和数据结构

1. 数据抽象
2. 数据、对象的反对称性
3. 德（得）墨忒耳律 火车失事、混杂、隐藏结构
4. 数据传送对象

# 7 错误处理

1. 使用异常而非返回码
2. 先写 Try-Catch-Finally 语句
3. 使用不可控异常
4. 给出异常发生的环境说明
5. 依调用者需要定义异常类
6. 定义常规流程
7. 别返回 Null
8. 别传递 Null 值

# 9 边界

1. 使用第三方代码
2. 浏览和学习边界
3. 学习 log4j
4. 学习型测试的好处不只是免费
5. 使用尚不存在的代码
6. 整洁的边界

# 10 单元测试

1. TDD 三定律
2. 保持测试整洁
3. 整洁的测试 面向特定领域的测试语言、双重标准
4. 每个测试一个断言
5. F.I.R.S.T

# 10 类

1. 类的组织
2. 类应该短小 单一权责原则、内聚、保持内聚性就会得到许多短小的类
3. 为了修改而组织

# 11 系统

1. 如何建造一个城市
2. 将系统的构造与使用分开 分解 main、工厂、依赖注入
3. 扩容
4. JAVA 代理
5. 纯 JAVA AOP 框架
6. AspectJ 的方面
7. 测试驱动系统架构
8. 优化决策
9. 明智使用添加了可论证价值的标准
10. 系统需要领域特定语言

# 12 迭进

1. 通过跌进设计达到整洁目的
2. 简单设计规则 1：运行所有测试
3. 简单设计规则 2：重构
4. 不可重复
5. 表达力
6. 尽可能少的类和方法

# 13 并发编程

1. 为什么要并发
2. 挑战
3. 并发防御原则
   1. 单一权责原则
   2. 推论：限制数据作用域
   3. 推论：使用数据复本
   4. 推论：线程应尽可能地独立
4. 了解 JAVA 库
5. 了解执行模型
   1. 生产者-消费者模型
   2. 读者-作者模型
   3. 宴席哲学家
6. 警惕同步方法之间的依赖
7. 保持同步区域微小
8. 很难编写正确的关闭代码
9. 测试线程代码 将伪失败看做可能的线程问题、先使非线程代码可工作、编写可插拔的线程、编写可调整的线程、运行多于处理器数量的线程、在不同平台上运行、装置试错代码、硬编码、自动化

# 14 逐步改进

1. Args 的实现
2. Args：草稿 所以我暂停了、渐进
3. 字符串参数

# 15JUnit 内幕

1. JUnit 框架

# 16 重构 SerialDate

1. 首先，让他能工作
2. 让他做对

# 17 味道与启发

1. 注释
2. 环境
3. 函数
4. 一般性问题
5. Java
6. 名称
7. 测试

# 附录 A 并发编程 II

1. 客户端/服务端的例子 服务器、添加线程代码、观察服务器端
2. 执行的可能路径 路径数量、深入挖掘
3. 了解类库 Executor 框架、非锁定的解决方案、非线程安全类
4. 方法之间的依赖可能破坏并发代码 容忍错误、基于客户代码的锁定、基于服务端的锁定
5. 提升吞吐量 单线程条件下的吞吐量、多线程条件下的吞吐量
6. 死锁 互斥、上锁及等待、无抢先机制、循环等待、不互斥、不上锁及等待、满足抢先机制、不做循环等待
7. 测试多线程代码
8. 测试线程代码的工具支持
9. 小结
10. 教程：完整代码范例 客户端/服务器非线程代码、使用线程的客户端/服务器代码

# 附录 B org.jfree.date.SerialDate
