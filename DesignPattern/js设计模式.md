*设计模式是从许多优秀的软件系统中，总结出的成功的、能够实现可维护性、复用的设计方案，使用这些方案可避免些重复性工作*。

# 单例

*一个类只能构造出唯一实例，比如弹框*

```js
class Single{
  constructor(name){
    this.name=name
  }
  static getInstance(name){
    if(!this.instance){
      // this指向的是single构造函数
      this.instance = new Single(name)
    }
    return this.instance
  }
}
let single1 = Single.getInstance("name1");
let single2 = Single.getInstance("name2");
console.log(single1 === single2);  // true，name：name1




```

# 策略

*根据不同参数命中不同的策略，如表单验证*

```js
// 策略对象
const strategies = {
  // 验证是否为空
  isNoEmpty: function(value, errorMsg) {
    if (value.trim() === "") {
      return errorMsg;
    }
  },
  // 验证最小长度
  minLength: function(value, length, errorMsg) {
    if (value.trim().length < length) {
      return errorMsg;
    }
  },
  // 验证最大长度
  maxLength: function(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },
  // 验证手机号
  isMobile: function(value, errorMsg) {
    if (
      !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
        value
      )
    ) {
      return errorMsg;
    }
  }
};

// 验证类
class Validator {
  constructor() {
    this.cache = []; // 存储要验证的方法validateFunctions
    this.errList = []; // 存储最终的验证结果tips
  }
  add(value, rules) {
    for (let i = 0, rule; (rule = rules[i++]); ) {
      let strategyAry = rule.strategy.split(":");
      let errorMsg = rule.errorMsg;
      this.cache.push(() => {
        let strategy = strategyAry.shift();
        strategyAry.unshift(value);
        strategyAry.push(errorMsg);
        // 执行策略对象中的不同验证规则
        let error = strategies[strategy](...strategyAry);
        if (error) {
          this.errList.push(error);
        }
      });
    }
  }
  start() {
    for (let i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
      validatorFunc();
    }
    return this.errList;
  }
}

let validataFunc = function(info) {
  let validator = new Validator();
  validator.add(info.userName, [
    {
      strategy: "isNoEmpty",
      errorMsg: "用户名不可为空"
    },
    {
      strategy: "minLength:2",
      errorMsg: "用户名长度不能小于2位"
    }
  ]);
  validator.add(info.password, [
    {
      strategy: "minLength:6",
      errorMsg: "密码长度不能小于6位"
    }
  ]);
  validator.add(info.phoneNumber, [
    {
      strategy: "isMobile",
      errorMsg: "请输入正确的手机号码格式"
    }
  ]);
  return validator.start();
};

// 需要验证表单的对象
let userInfo = {
  userName: "王",
  password: "1234",
  phoneNumber: "666"
};
let errorMsg = validateFunc(userInfo);
console.log(errorMsg); // ['用户名长度不能小于2位', '密码长度不能小于6位', '请输入正确的手机号码格式']
```

# 代理模式

*代理对象和本体对象具有相同接口，如图片预加载*

```js
// 代理模式
let relImage = (function() {
  let imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc(src) {
      imgNode.src = src;
    }
  };
})();
let proxyImage = (function() {
  let img = new Image();
  // 实际要加载的图片 加载成功后 替换调占位图
  img.onload = function() {
    relImage.setSrc(img.src);
  };
  return {
    setSrc(src) {
      img.src = src;
      // 设置占位图
      relImage.setSrc(
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      );
    }
  };
})();

// 设置实际要加载的图片
proxyImage.setSrc(
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
);

```

# decorator装饰者

*在不改变对象自身的基础上，动态的给某个对象添加一些额外的职责，比如在函数执行前后添加新的方法*

```js
function fuc() {
  console.log(2);
}
Function.prototype.before = function(beFn) {
  let self = this;
  return function() {
    beFn.apply(this, arguments); // 先执行插入到前面的方法，类似于二叉树的前序遍历
    return self.apply(this, arguments); // 后执行当前的方法
  };
};
Function.prototype.after = function(afFn) {
  let self = this;
  return function() {
    self.apply(this, arguments); // 先执行当前的方法
    return afFn.apply(this, arguments); // 后执行插入到后面的方法
  };
};

function fuc1() {
  console.log(1);
}
function fuc3() {
  console.log(3);
}
function fuc4() {
  console.log(4);
}

fuc = fuc.before(fuc1).before(fuc4).after(fuc3);
fuc();

// 最终打印结果：4 1 2 3
```

# 组合

*组合模式在对象间形成树形结构，组合模式中基本对象和组合对象被一致对待，无须关心对象有多少层, 调用时只需在根部调用*

```js
class Combine {
  constructor() {
    this.list = [];
  }
  add(fn) {
    this.list.push(fn);
    return this; // 链式调用
  }
  execute() {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].execute();
    }
  }
}
let comb1 = new Combine();
comb1
  .add({
    execute() {
      console.log(1);
    }
  })
  .add({
    execute() {
      console.log(2);
    }
  });

let comb2 = new Combine();
comb2
  .add({
    execute() {
      console.log(3);
    }
  })
  .add({
    execute() {
      console.log(4);
    }
  });

let comb3 = new Combine();
comb3
  .add({
    execute() {
      console.log(5);
    }
  })
  .add({
    execute() {
      console.log(6);
    }
  });
comb2.add(comb3);

let comb4 = new Combine();
comb4.add(comb1).add(comb2);
comb4.excute();

// 最终打印结果：1 2 3 4 5 6
```

# 工厂

*工厂模式是用来创建对象的最常用设计模式，不暴露创建对象的具体逻辑，而是将逻辑封装在一个函数中，该函数被视为一个工厂，比如jQuery的window.$*

```js
class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
class VehicleFactory {
  static create(type) {
    switch (type) {
      case "car":
        return new Vehicle("汽车", "白色");
        break;
      case "bicycle":
        return new Vehicle("自行车", "黑色");
        break;
      default:
        console.log("没有该类型");
    }
  }
}
let p1 = VehicleFactory.create("car");
let p2 = VehicleFactory.create("bicycle");
console.log(p1, p1 instanceof Vehicle); // {name: '汽车', color: '白色'} true
console.log(p2, p2 instanceof Vehicle); // {name: '自行车', color: '黑色'} true
```

# 访问者

在不改变该对象的前提下访问其结构中元素的新方法

*Babel插件*

```js
// 元素类
class Student {
  constructor(name, chinese, math, english) {
    this.name = name;
    this.chinese = chinese;
    this.math = math;
    this.english = english;
  }

  accept(visitor) {
    visitor.visit(this);
  }
}

// 访问者类
class ChineseTeacher {
  visit(student) {
    console.log(`语文${student.chinese}`);
  }
}

class MathTeacher {
  visit(student) {
    console.log(`数学${student.math}`);
  }
}

class EnglishTeacher {
  visit(student) {
    console.log(`英语${student.english}`);
  }
}

// 实例化元素类
const student = new Student("张三", 90, 80, 60);
// 实例化访问者类
const chineseTeacher = new ChineseTeacher();
const mathTeacher = new MathTeacher();
const englishTeacher = new EnglishTeacher();
// 接受访问
student.accept(chineseTeacher); // 语文90
student.accept(mathTeacher); // 数学80
student.accept(englishTeacher); // 英语60
```

# 发布订阅

订阅者订阅相关主题，发布者通过发布主题事件的方式，通知订阅该主题的对象

*EventBus*

```js
手写发布订阅
// 发布订阅模式
class EventBus {
  constructor() {
    this.task = {};
  }
  on(type, fn) {
    // on 注册事件
    if (!this.task[type]) this.task[type] = [];
    this.task[type].push(fn);
  }
  emit(type, ...args) {
    // emit 发送事件
    if (this.task[type]) {
      this.task[type].forEach(fn => {
        fn.apply(this, args); // 注意this指向
      });
    }
  }
  off(type, fn) {
    // 删除事件
    if (this.task[type]) {
      this.task[type] = this.task[type].filter(item => item !== fn);
    }
  }
  once(type, fn) {
    // 只执行一次
    function f(...args) {
      fn(...args);
      this.off(type, f);
    }
    this.on(type, f);
  }
}

// 测试
let event = new EventBus();
event.on("change", (...args) => {
  console.log(args);
});
// 只执行一次
event.once("change", (...args) => {
  console.log(args);
});
event.emit("change", 1, 2);
event.emit("change", 2, 3);

```

# 观察者

*一个对象有一些列依赖于它的观察者watcher，对象变化时，会通知观察者更新*

*vue双向绑定*

```js
let data = {
  name: "ming",
  age: 18
};
Object.keys(data).forEach(key => {
  let value = data[key];
  Object.defineProperty(data, key, {
    get() {
      console.log("get", value);
      return value;
    },
    set(newValue) {
      console.log("更新");
      value = newValue;
    }
  });
});
data.name = "佩奇";
console.log(data.name);

// 依次打印： 更新 → get 佩奇 → 佩奇
```

## 观察者与发布订阅模式的区别

观察者模式：一个对象有一系列依赖于它的观察者（watcher），对象变化时，会通知观察者更新

*发布订阅模式：订阅者订阅相关主题，发布者通过发布主题事件的方式，通知订阅该主题的对象，发布订阅模式中可以基于不同主题，去执行不同的自定义事件*

<https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F472719016>
<https://juejin.cn/post/6844903607452581896>
