identify；began 开始了 begin；formerly adv 以前，原来;guard,assert&asset,handlebar 车把；

- 征服欲，兴趣，时间紧迫感（这是男性的本能，作为优秀的程序猿，要有这两项基本素质，写代码一定要有目标感和时间紧迫感）

# 好的命名习惯可以增加敲代码的兴趣

- 一个好的命名习惯有利于你快速阅读代码，有利于一步步写出好思路，如果细细思考如何优化，可以往时间和空间复杂度更小的最优解思路方向靠齐。
- 另外，**好的命名即注释**，可以减少不必要的注释。
  > 以[两数之和算法题](https://leetcode-cn.com/problems/two-sum/)为例

# mapping

- 为了减少 mapping 代码，最好以最终 mapping 去向的值当做 value 的归一化取值（比如说用 JS 来决定 CSS 时，'backgroundColor'要最终被当做 styleAttr，所以也可以当做代码流中的 value。

# const

- 常量的字母要全部大写，用\_分隔：SOME_CONSTANT

## names

add to workspace-setting.json
https://blog.csdn.net/sinat_34707539/article/details/52172997
https://blog.csdn.net/MAOMAOXIAOHUO/article/details/88423424
https://blog.csdn.net/carpinter/article/details/6975740
addr address,env environment,prn print,adm administrator,err error,proc process/procedure,app application,ex/ext extend,prop
property,arg argument,exec execute,psw password,asm assemble,flg flag,ptr pointer,asyn asynchronization,frm frame,pub public,
avg average,func/fn function, rc rect,bk back,grp group ref reference,bmp bitmap,horz horizontal,reg register,btn button,idx
/ndx index,req request, buf bugger,img image,res resource,calc calculate,impl implement,ret return,char character,inc increase,
rgn region,chg change,info information,**scr screen**,**clk click**,init initialize/initialization,sec second,clr color,ins insert,seg segment,cmd command,inst instance,sel select,cmp compare,int/intr interrupt,src source,col column,len length,std standard,
coord coordinates,lib library,stg storage, cpy copy,lnk link,stm stream,ctl/ctrl control,log logical,str string,cur current,
lst list,sub subtract,cyl cylinder,max maximum,sum summation,db database,mem memory,svr server,dbg debug,mgr/man manage/manager,
sync synchronization,dbl double,mid middle,sys system,dec decrease,min minimum,tbl table,def default,msg message,temp/tmp temporary,
del delete,mul multiply,tran/trans transition/transparent,dest/dst destination,num number,tst test,dev device,obj object,txt text,
dict dictionary,ofs offset,unk unknown,diff different,org origin/original,upd update,dir directory,param parameter,upg upgrade,
disp display,pic picture,pic picture,util utility,div divide,pkg package, var variable,dlg dialog,pnt/pt point,ver version,
doc document,pos position,vert vertical,drv driver,pre/prev previous,vir virus,**dyna** dynamic,prg program,**wnd window**,
cus(custom 风俗、自定义的,customize 自定义 vt；customer 顾客),index 指标，indicator 指示符指针迹象，cust(customer),comp(component),ev(event),er(error),v(value),record(r),itm(item),len(length),col(column),cols,row,onOk,btm(bottom),conditionFormat 条件格式；grand 高的；cnt count；l len length;st state;typ type;c ch char;i index;DOM;arg argument;ID not id;flexible,ctx context；acc accumulator；
stk stack;光标 cursor；
PeopleSoft 标准：scandalous 可耻的，诽谤性的；
The following standard word abbreviations should be used in naming records, fields, and SQRs:

abrv abbreviate abbreviation,academic acad,acpt accept acceptance accepted,access accs,accident acdnt,acmp accomplish
accomplishment accomplishments,acct account acctg accounting,ap accounts payable+advanced placement,ar accounts receivable,
acrd accredited,acrl accrual,accum accmulated,achv achieve achievement,acq acquisition,act act active activity american college test,
actn action,actl actual,add added/add,addl additional,addr address,narrative 叙事的 data which describes a person,place or
thing's location，adhc Ad hoc,adjd adjudicate adjudicated Adjudication,agi Adjusted Gross Income,adj adjustment,adm administered
administrated administration,adms admissible admission,admt admittance admitted,ap advanced placement/account payable,advc
advice,affl affiliation,after aft,age age,agency agcy,agent agnt,aid aid,alien aln,all all,alloc allocate allocation,alpha
alph,alter alternate alt,alumni alumnus almn,am am ante meridiem,American college test/act/active/activity act,amount amt
analysis anls,annual annl,anonymous anon,answer ans,apartment apt,appeal/appealed apel,applicant app,application appl,
appointment appt,approval/approve aprv,array aray,ascending asc,assign/assigned/assignment asgn,association assc,assumption asmp,
attention attn,attr attribute,adt audit,auth authority/authorize,avl available/availability,avg average,average cumulative grade acg,
award/awarded awrd,bal balance,bnk bank,bas base,btch batch,ben benefits,bill bill/ing,brth birth,brd board,brk break,
bud budget/budgetable,bld build/ing,bus business,bu business unit,calc calculate,cal calendar,cmpn campaign,cmps campus,can cancel,
cap capacity,crd card,car career,cse case,csh cash,ctlg catalog,catg category,ctr center,cert certificate/certification,
chg change/d,chap chapter,crg charge,chk check,ctzn citizen/ship,cty city,clas class,clr clear/ed,clep college-level
examination program 大学水平考试制度（学院入口考试），close clo,club clb,code cd :data which represent encoded values(translate or
code table),collect clct,college colg,column clmn,combine comb,command cmd,comment cmt:an explanatory,illustrative or critical note,remark or observation.committee cmmttee,company co,complete cmpl,component cmpt:when the meaning is part,use abbreviation prt,
dev develop,block blk,memory mem,alloc allocate,util utility,fd file descriptor,conditional cond,confirm/ation conf,constant cst/cnst:data which is unchanging or invariable,contact ctct,continue cont,contract cntr,control cntl,conversation convr,conversion cnv,
correspondence crsp,count/counter cnt:A number of people or things that have been 'counted', such as inventory cycle count,
country ctry,county cnty,course crse,coverage covrg,create cre,credential crdl,credit cr/crdt:Using 'CR' for field names
relating to financial data,Use 'CRDT' for field names relating to academic work,cref,cross crs,cross list xlst,cross reference
xref,cumulative cum,currency curr,current cur,cursor crsr,customer cust,daily dly,data, data processing dp,date dt:a calendar day,
month, and year(including century),date-time stamp dttm,day dd/dy: a day of the week(sunday,monday,etc.)
dead,debit dr,decimal dec,deduct/deduction ded,default dflt,definition defn,degree deg,delete del,deliver/y dlvr,demo dmo,deps
dental dntl,department dept,department of motor vehicles dmv,dependency dep,deposit dpst,description dsc,design dsgn,destination dest,detail detl,develop dev,digit dgt,display disp,divisison div,document doc,donor donr,down dn,drive drv,drop drp,due,duplicate dup,early erly,earned income credit eit,educate edu,effect eff,english engl,enrichment enrch,enrollment enrl,enter entr,
error err/er,establishment estb,evaluation eval,jevent evnt,exam exm,exception excp,exclude excl,execute exec,expect expc,
expense/export/express exp,experimental expm,expiration/expire expr,extend/extended/extension ext,external extr,facility
fclt,faculty fac,family fmly,Family education rights and privacy act ferpa,fast fst,father fath,federal fed,federal labor and security act flsa,fee,feet/full time ft,fica,field/fields fld,file,final fnl,financial fin,financial aid fa,fine,first frst,
fiscal fisc,fiscal year fy,fix,flag flg/sw:data which functions as a flag or indicator.flexible spending account fsa,floor flr,
for,foreign fgn,foreign key fk,form frm,format fmt,former formr,free,free on board fob,freeze/frozen frz,frequency freq,
fresh/freshman frsh,from fr,fullfill/ed fulf,full time ft,function/al fcn,fund,future fut,general genl,general education degree ged,general ledger gl,geography geog,gift gft,global glbl,government govt,grade gde/grd:a value assigned to reflect performance or position on a scale,grade point average gpa,graducte grad,grant/ed grnt,gross gros,group grp,guarantee guar,guaranteed student loan gsl,guest gst,handicap hand,head,header hdr,health hlth,held/hold hld,help hlp,hierarchy hier,high h,high school hs,high
school services,higher education hed,highway hway,hire,history hst,home hm,honor honr,honor society hsc,hospital hosp,hour,hourly hrly,hours hrs,house/housing hse,how,human resources hr,human resource system hrs,identification id,image img,immune imun,impact impc,implementation impl,import imp,bless you 保佑你，import/export imp exp,inch in,include incl,income incm,increase/increment incr,index indx,indicator id,individual indv,information info,initial/initialize init,injury inj,inoculation inoc,input inpt,inquiry inq,insert inrt,institution inst,instruction istr,instructional need analysis system inas,insurance ins,inter-unit iu,interest int,interface intfc,internal intr,international intl,interval invl,interview/er intv,issue iss,item itm,journal jrnl,junior jr,label lbl,labor lbr,laboratory lab,language lng,last/list lst,latitude lat,leave lv,lecture 演讲 lctr,ledger 总账,legal,lender 出借人 贷方， letter ltr，level lvl，liaison，library lib，liberal education 文科 lbd，license lic，license plate number lic_plte_nbr,limit lim,line/loan ln,link/ed lnk,liquid liq,list/last lst,literal ltrl,locate loc,lock lk,locker lkr,log on logon,long term care ltc,longitude lon,maint,major mjr,make mk,manager mgr,match/matching mtch,maximum max,medical/medicinal med,meet/meeting mt,member mbr,membership mshp,memo mmo,memoricl memr,merchant merch,merit mert,message msg,meter mtr,minute mnt/A duration of time expressed in minutes,
method meth,middle mid,mode mde,miscellaneous misc,modifier mod,money mony,month-to-date mtd,more,mother moth,multiple mult,name nm/nme,national natl,navigation nav,next nxt,no credit nocr,nominal nom,non-personal services,not applicable na,number/numeric nbr:numeric data which identifier a person,place or thing,occurs occ,offer offr,office offc,officer ofcr,official ofcl,line ln,online onln,
open opn,operator opr,option opt,organation org,orientation ornt,origin orig,other othr,over ovr,overhead oh,override ovrd,overtime ot,owner ownr,packaged pack, paper ppr,parameter parm,parent par,parity prty,park prk,part prt,part time pt,participation prtp,percent pct,period pd,perkins loan,person pers,personal identification pin,phone phn,place plce,plate plte,point pnt,policy plcy,position posn,postal pstl,potential ptn,predicted pred,preference/preffered pref,prefix prfx,premium prem,president pres,price prc,primary prim,primary key pk,principal prin,preint prn,prior，previous 先前的 prev；Principal Investigator 主要研究者 pi，problem/probation prob,procedure/process proc,profession/professional prfs,proficiency prfc,profile prof,program prog,project proj,promissory,promotion prom,proposal,prospect prsp,province prvn,purchase pur,purge prg,purpose purp,quarter qtr,question qstn,range rng,rate rt,reason rsn,recall rcl,receipt rcpt,receive/d recv,receiver rcvr,recharge rchg,recognition recg,recommend rcmd,reconciliation recon,record rec,recreate recr,recruit rcrt,reduce red,refer ref,redund rfnd,regional rgnl, registrar reg,reject rjct,relate rlat,release rlse,religion relg,remaining rmng,reminder rmdr,renewal rnwl,repeat rept,replace repl,reply rply,report rpt,request req,requirements rqmt,reserve rsrv,residence rsdt,resource rsrc,response resp,research res,restart rst,result rslt,return rtn,retire ret,revenue rev,review rvw,revision revs,revoke revk,roll rl,roll up,rlup,room rm,route rout,run control runctl,salary sal,salutation 称呼 问候 sltn, same sm，scale scal,schedule sched,scholar schlr,scholar chlr,scholastic schl,score scr,screen scrn,search srch,second scnd,section sctn,secure sec,segment seg,select sel,send snd,senior sr,sent snt,sequence seq,serial serl,service serv,session sessn,sharing shr,sheet shet,shelter shlt,shift shft,short shrt,sign sgn,simulated sim,size sz,skill skl,skip skp,social soc,social security number ssn,soft sft,solid slid,sophomore soph,sort srt,source src,special spcl,specific spec,sponsor spon,sports sprt,stack stck,staff stf,stage stg,stamp stmp,standard std,start strt,state st,stament stmt,static stc,statistics stat,status sts,step stp,stock stk,street str,string strg,structure strc,student stu,study stdy,subject subj,support sup,supplement sulp,survey srvy,suspense susp,switch flg/sw,system sys,table tbl,taken tkn,target trgt,taught tght,tax tx,temperature temp,template tmpl,temporary tmp,term trm,terminal trml,terminate trmt,test tst,text txt,ticket tkt,time tm,time keeping tmkp,time-stamp ts,title titl,today tdy,total tot,track trk,traditional trad,training trn,trasfer xfer,translate xlt,travel trvl,transmit xmit,tuition tuit,type typ,undergraduate ugrd,unemployment unempl,unit of measure uom,universal unvrsl,university univ,unpaid unpd,unsecure unsec,update updt,upper upr,user usr,valid vld,variable var,vehicle veh,vendor vend,verbal vrbl,verify verf,veteran vet,vice president vp,violation vio,visit vst,voucher vchr,waived wved,week/work/worked/workers wk,width wid,with w:normally used as part of compound word(i.e., Withdrawl abbreviated as 'WDRL'). withdrawal wdrl,women wmn,worksheet wkst,write wrt,year yr,year-to-date ytd,zone zn,extent ext,
disabled adj&disable v；

## workspace dictionary

antd, ahooks,

## spell

add unknown word to user/workspace dir

```js
const twoSum = function (numbers, sum) {
  const numbersToAdd = {}
  const { length: len } = numbers
  for (let i = 0; i < len; i++) {
    const num1 = numbers[i]
    const num2Idx = numbersToAdd[sum - num1]
    if (num2Idx === undefined) {
      // 这一分支至少进入1次
      numbersToAdd[num1] = i
    } else {
      // 进入这一分支时，函数执行完毕
      return [num2Idx, i]
    }
  }
}
// 当然也可以采用map
```

# 变量命名

> 见名知义的命名，才能方便长期维护与重构。

## 要有明显的意义

```js
// bad
const yyyymmddStr = moment().format('YYYY/MM/DD')
// good
currentDate
```

## 前后词汇保持一致

```js
// good
getUserInfo()
getClientData()
getCustomerRecord()
// bad
getUser()
```

> 比方说在接口定义、module 内，container 内，page 内，与同一块业务领域相关的词汇尽量保持一致（一般来讲，前端命名参照后端接口，因为后端代码不能随意改动）

## 方便搜变量

因为**我们读的代码比写的代码多**，比方说*起一些上口的常量名，而不是不给命名*

```js
// good
// Declare them as capitalized named constants
const MILLISECONDS_IN_A_DAY = 60 * 60 * 24 * 1000 // 86400000
setTimeout(() => {
  blastOff()
}, MILLISECONDS_IN_A_DAY)
// bad
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000)
```

## function params should be listed by importance

## Don't use flags as function parameters

Avoid Side Effects (part 2)
In JavaScript, some values are unchangeable (immutable) and some are changeable (mutable). Objects and arrays are two kinds of mutable values so it's important to handle them carefully when they're passed as parameters to a function. A JavaScript function can change an object's properties or alter the contents of an array which could easily cause bugs elsewhere.

Bad:

const addItemToCart = (cart, item) => {
cart.push({ item, date: Date.now() });
};
Good:

const addItemToCart = (cart, item) => {
return [...cart, { item, date: Date.now() }];
};

Don't write to global functions
Polluting globals is a bad practice in JavaScript because you could clash with another library and the user of your API would be none-the-wiser until they get an exception in production. Let's think about an example: what if you wanted to extend JavaScript's native Array method to have a diff method that could show the difference between two arrays? You could write your new function to the Array.prototype, but it could clash with another library that tried to do the same thing. What if that other library was just using diff to find the difference between the first and last elements of an array? This is why it would be much better to just use ES2015/ES6 classes and simply extend the Array global.

Bad:

Array.prototype.diff = function diff(comparisonArray) {
const hash = new Set(comparisonArray);
return this.filter(elem => !hash.has(elem));
};
Good:

class SuperArray extends Array {
diff(comparisonArray) {
const hash = new Set(comparisonArray);
return this.filter(elem => !hash.has(elem));
}
}
Encapsulate conditionals
Bad:

if (fsm.state === "fetching" && isEmpty(listNode)) {
// ...
}
Good:

function shouldShowSpinner(fsm, listNode) {
return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
// ...
}
⬆ back to top

Avoid negative conditionals
Bad:

function isDOMNodeNotPresent(node) {
// ...
}

if (!isDOMNodeNotPresent(node)) {
// ...
}
Good:

function isDOMNodePresent(node) {
// ...
}

if (isDOMNodePresent(node)) {
// ...
}

Avoid conditionals
This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything without an if statement?" The answer is that you can use **polymorphism**ˌpälēˈmôrfizəm 多态 to achieve the same task in many cases. The second question is usually, "well that's great but why would I want to do that?" The answer is a previous clean code concept we learned: a function should only do one thing. When you have classes and functions that have if statements, you are telling your user that your function does more than one thing. Remember, just do one thing.

Bad:

class Airplane {
// ...
getCruisingAltitude() {
switch (this.type) {
case "777":
return this.getMaxAltitude() - this.getPassengerCount();
case "Air Force One":
return this.getMaxAltitude();
case "Cessna":
return this.getMaxAltitude() - this.getFuelExpenditure();
}
}
}
Good:

class Airplane {
// ...
}

class Boeing777 extends Airplane {
// ...
getCruisingAltitude() {
return this.getMaxAltitude() - this.getPassengerCount();
}
}

class AirForceOne extends Airplane {
// ...
getCruisingAltitude() {
return this.getMaxAltitude();
}
}

class Cessna extends Airplane {
// ...
getCruisingAltitude() {
return this.getMaxAltitude() - this.getFuelExpenditure();
}
}

Avoid type-checking (part 1)
JavaScript is untyped, which means your functions can take any type of argument. Sometimes you are bitten by this freedom and it becomes tempting to do type-checking in your functions. There are many ways to avoid having to do this. The first thing to consider is consistent APIs.

Bad:

function travelToTexas(vehicle) {
if (vehicle instanceof Bicycle) {
vehicle.pedal(this.currentLocation, new Location("texas")); // 蹬
} else if (vehicle instanceof Car) {
vehicle.drive(this.currentLocation, new Location("texas"));
}
}
Good:

function travelToTexas(vehicle) {
vehicle.move(this.currentLocation, new Location("texas"));
}

Avoid type-checking (part 2)
If you are working with basic primitive values like strings and integers, and you can't use polymorphism but you still feel the need to type-check, you should consider using TypeScript. It is an excellent alternative to normal JavaScript, as it provides you with static typing on top of standard JavaScript syntax. The problem with manually type-checking normal JavaScript is that doing it well requires so much extra verbiage that the faux "type-safety" you get doesn't make up for the lost readability. Keep your JavaScript clean, write good tests, and have good code reviews. Otherwise, do all of that but with TypeScript (which, like I said, is a great alternative!).

Bad:

function combine(val1, val2) {
if (
(typeof val1 === "number" && typeof val2 === "number") ||
(typeof val1 === "string" && typeof val2 === "string")
) {
return val1 + val2;
}

throw new Error("Must be of type String or Number");
}
Good:

function combine(val1, val2) {
return val1 + val2;
}

Don't over-optimize
Modern browsers do a lot of optimization under-the-hood at runtime. A lot of times, if you are optimizing then you are just wasting your time. There are good resources for seeing where optimization is lacking. Target those in the meantime, until they are fixed if they can be.

Bad:

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
// ...
}
Good:

for (let i = 0; i < list.length; i++) {
// ...
}

## Remove dead code

Dead code is just as bad as duplicate code. There's no reason to keep it in your codebase. If it's not being called, get rid of it! It will still be safe in your version history if you still need it.

# Objects and Data Structures

Use getters and setters
Using getters and setters to access data on objects could be better than simply looking for a property on an object. "Why?" you might ask. Well, here's an unorganized list of reasons why:

When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
Makes adding validation simple when doing a set.
Encapsulates the internal representation.
Easy to add logging and error handling when getting and setting.
You can lazy load your object's properties, let's say getting it from a server.
Bad:

function makeBankAccount() {
// ...

return {
balance: 0
// ...
};
}

const account = makeBankAccount();
account.balance = 100;
Good:

function makeBankAccount() {
// this one is private
let balance = 0;

// a "getter", made public via the returned object below
function getBalance() {
return balance;
}

// a "setter", made public via the returned object below
function setBalance(amount) {
// ... validate before updating the balance
balance = amount;
}

return {
// ...
getBalance,
setBalance
};
}

const account = makeBankAccount();
account.setBalance(100);

Make objects have private members
This can be accomplished through closures (for ES5 and below).

Bad:

const Employee = function(name) {
this.name = name;
};

Employee.prototype.getName = function getName() {
return this.name;
};

const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined
Good:

function makeEmployee(name) {
return {
getName() {
return name;
}
};
}

const employee = makeEmployee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe

## Prefer ES2015/ES6 classes over ES5 plain functions

It's very difficult to get readable class inheritance, construction, and method definitions for classical ES5 classes. If you need inheritance (and be aware that you might not), then prefer ES2015/ES6 classes. However, prefer small functions over classes until you find yourself needing larger and more complex objects.

```js
const Animal = function (age) {
  if (!(this instanceof Animal))
    throw new Error('Instantiate Animal with `new`')
  this.age = age
}
Animal.prototype.move = function move() {}
// 哺乳动物 毛皮
const Mammal = function (age, furColor) {
  if (!(this instanceof Mammal))
    throw new Error('Instantiate Mammal with `new`')
  Animal.call(this, age)
  this.furColor = furColor
}
Mammal.prototype = Object.create(Animal.prototype)
Mammal.prototype.constructor = Mammal
mammal.prototype.liveBirth = function liveBirth() {}

const Human = function (age, furColor, langSpoken) {
  if (!(this instanceof Human)) throw new Error('Instantiate Human with `new`')

  Mammal.call(this, age, furColor)
  this.langSpoken = langSpoken
}

Human.prototype = Object.create(Mammal.prototype)
Human.prototype.constructor = Human
Human.prototype.speak = function speak() {}

class Animal {
  constructor(age) {
    this.age = age
  }
  move() {}
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age)
  }
}
class Human extends Mammal {
  constructor(age, furColor, langSpoken) {
    super(age, furColor)
    this.langSpoken = langSpoken
  }
  speak() {}
}
```

## Use method chaining

> This pattern is very useful in JavaScript and you see it in many libraries such as jQuery and Lodash. It allows your code to be expressive, and less verbose 冗长的.For that reason, I say, use method chaining and take a look at how clean your code will be. In your class functions, simply return this at the end of every function, and you can chain further class methods onto it.

```js
// Bad
class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }
  setMake(make) {
    this.make = make
  }
  setModel(model) {
    this.model = model
  }
  setColor(color) {
    this.color = color
  }
  save() {
    console.log(this.make, this.model, this.color)
  }
}
const car = new Card('Ford', 'F-150', 'red')
car.setColor('pink')
car.save()

// good
class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }
  setMake(make) {
    this.make = make
    // Note: Returning this for chaining
    return this
  }
  setModel(model) {
    this.model = model
    return this
  }
  setColor(color) {
    this.color = color
    return this
  }
  save() {
    console.log(this.make, this.model, this.color)
    return this
  }
}
const car = new Car('Ford', 'F-150', 'red').setColor('pink').save()
```

## Prefer composition over inheritance

iconic 标志性的；computer science book 'Design Patterns: Elements of Reusable Object Oriented Software' was first published. The four authors of the book: Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, have since been dubbed 'The Gang of Four'. In technology circles, you'll often see this nicknamed shorted to GoF. Even though the GoF Design Patterns book

> At stated famously in [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns) by the Gang of Four, you should prefer composition over inheritance where you can. The are lots of good reasons to use inheritance and lots of good reasons to use composition. The main point for this maxim is that if your mind instinctively 本能地 goes for inheritance, try to think if composition could model your problem better. In some cases it can.

You might be wondering then, 'when should I use inheritance?' It depends on your problem at hand, but this is a decent list of when inheritance makes more sense than composition:

1. You inheritance represents an 'is-a' relationship and not a 'has-a' relationship (Human -> Animal vs. User->UserDetails)
2. You can reuse code from the base classes （Humans can move like all animals)
3. You want to make global changes to derived 衍生的 classes by changing a base class.(Change the caloric 热的 expenditure 开支 热量支出 of all animals when they move)

```js
class Employee {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}
// Bad because Employees 'have' tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super()
    this.ssn = ssn
    this.salary = salary
  }
}

class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn // Social Security number consists of nine digits divided into three parts, with each part usually. separated by a hyphen: XXX(area number) - XX(Group number) - XXXX(Serial number)
    this.salary = salary
  }
}
class Employee {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary)
  }
}
```

# SOLID

## Single Responsibility Principle(SRP)

As stated in Clean Code, "There should be more than one reason for a class to change". It's tempting to jampack a class with a lot of functionality, like when you can only take one suitcase 手提箱 on your flight. The issue with this is that your class won't be conceptually cohesive 团结的 and it will give it many reasons to change. Minimizing the amount of times you need to change a class is important. It's important because if too much functionality is in one class you and modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your codebase.

```js
class UsrSettings {
  constructor(usr) {
    this.usr = usr
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
  verifyCredentials() {
    // ...
  }
}

class UsrAuth {
  constructor(usr) {
    this.usr = usr
  }

  verifyCredentials() {}
}
class UsrSettings {
  constructor(usr) {
    this.usr = usr
    this.auth = new UsrAuth(usr)
  }
  changeSettings(settings) {
    if (!this.auth.verifyCredentials()) return
    // ...
  }
}
```

## Open/Closed Principle(OCP)

- https://www.cnblogs.com/gaochundong/p/open_closed_principle.html
  > As stated by Bertrand Meyer, 'sw(software) entities(classes,modules,functions,etc) should be open for extension, but closed for modification.' What does that mean though? This principle basically stated that you should allow users to add new functionalities without changing existing code.

```js
// bad
class AjaxAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'ajaxAdapter'
  }
}
class NodeAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'nodeAdapter'
  }
}
class HttpRequester {
  const(adapter) {
    this.adapter = adapter
  }
  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(ur).then((res) => {
        // transform response and return
      })
    } else if (this.adapter.name === 'nodeAdapter') {
      return makeHttpCall(url).then((res) => {})
    }
  }
}
function makeAjaxCall(url) {
  // request and return promise
}
function makeHttpCall(url) {}

// good
class AjaxAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'ajaxAdapter'
  }

  request(url) {
    // request and return promise
  }
}
class NodeAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'nodeAdapter'
  }

  request(url) {
    // request and return promise
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter
  }

  fetch(url) {
    return this.adapter.request(url).then((res) => {
      // transform res and return
    })
  }
}
```

## Liskov Substitution Principle(LSP)

- http://c.biancheng.net/view/1324.html
  > This is a scary term for a very simple concept. It's formally defined as 'If S is a subtype of T, then objects of type T may be replaced with objects of type S(i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program(correctness, task performed, etc.)." That's an even scarier definition.
  > The best explanation for this is if you have a parent class and a child class, then the base class and the child class can be used interchangeably 可交换地 without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, square is a rectangle, but if you model it using the 'is-a' relationship cia inheritance, you quickly get into trouble.

```js
// bad
class Rectangle {
  constructor() {
    this.width = 0
    this.height = 0
  }
  setColor(color) {
    // ...
  }
  render(area) {}
  setWidth(width) {
    this.width = width
  }
  setHeight(height) {
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}
class Square extends Rectangle {
  setWidth(width) {
    this.width = width
    this.height = width
  }
  setHeight(height) {
    this.width = height
    this.height = height
  }
}
function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4)
    rectangle.setHeight(5)
    const area = rectangle.getArea() // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area)
  })
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()]
renderLargeRectangles(rectangles)

class Shape {
  setColor(color) {}
  render(area) {}
}
class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}
class Square extends Shape {
  constructor(len) {
    super()
    this.length = len
  }
  getArea() {
    return this.length * this.length
  }
}
function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea()
    shape.render(area)
  })
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)]
renderLargeShapes(shapes)
```

## Interface Segregation 公开 Principle(ISP)

> JavaScript doesn't have interfaces so this principle doesnt apply as strictly as others. However, its important and relevant even with JavaScript's lack of type system.
> ISP states that 'Clients should not be forced to depend upon interfaces that they do not use.' Interfaces are implicit contracts in JavaScript because of duck typing.
> A good example to look at that demonstrates this principle in JavaScript is for classes that require large settings objects. No requiring clients to setup huge amounts of options is beneficial, because mose of the time they wont need all of the settings. Making them optional helps prevent having a 'fat interface'.

```js
class DOMTraverser {
  constructor(settings) {
    this.settings = settings
    this.setup()
  }
  setup() {
    this.rootNode = this.settings.rootNode
    this.settings.animationModule.setup()
  }
  traverse() {}
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {}, // Most of the time, we wont need to animate when traversing.
})

class DOMTraverser {
  constructor(settings) {
    this.settings = settings
    this.options = settings.options
    this.setup()
  }
  setup() {
    this.rootNode = this.settings.rootNode
    this.setupOptions()
  }
  setupOptions() {
    if (this.options.animationModule) {
    }
  }
  traverse() {}
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {},
  },
})
```

## Dependency Inversion P(DIP)

This principle states two essential things:

1. High-level modules should not depend on low-level modules. Both should depend on abstractions
2. Abstractions should not depend upon details. Details should depend on abstractions.
   > This can be hard to understand at first, but if you've worked with AngularJS, you've seen an implementation of this principle in the form of Dependency Injection(DI). While they are not identical concepts, DIP keeps high-level modules from knowing the details of its low-level modules and setting them up. It can accomplish this through DI. A huge benefit of this is that it reduces the coupling between modules. Coupling is a very bad development pattern because it makes your code hard to refactor.
   > As stated previously, JavaScript doesn't have interfaces so the abstractions that are depended upon are implicit 含蓄的（explicit 显式的） contracts. That is to say, the methods and properties that an object/class exposes to another object/class. In the example below, the implicit contract is that any Request module for an InventoryTracker will have a requestItems method.

```js
// bad
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP']
  }
  requestItem(item) {}
}
class InventoryTracker {
  constructor(items) {
    this.items = items

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have requestItems depend on a request method: `request`
    this.requester = new InventoryRequester()
  }
  requestItems() {
    this.items.forEach((itm) => {
      this.requester.requestItm(itm)
    })
  }
}
const inventoryTracker = new InventoryTracker(['apples', 'bananas'])
inventoryTracker.requestItems()

// good
class InventoryTracker {
  constructor(items, requester) {
    this.items = items
    this.requester = requester
  }
  requestItems() {
    this.items.forEach((itm) => {
      this.requester.requestItm(itm)
    })
  }
}
class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP']
  }
  requestItm(itm) {}
}
class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS']
  }
  requestItm(itm) {}
}
// By constructing our dependencies externally and injecting them, we can easily
// substitute out request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(
  ['apples', 'bananas'],
  new InventoryRequesterV2()
)
inventoryTracker.requestItems()
```

# Testing

> Testing is more important than shipping. If you have no tests or an inadequate amount, then every time you ship code you wont be sure that you didn't break anything. Deciding on what constitutes an adequate amount is up to your team, but having 100% coverage(all statements and braches) is how you achieve very high confidence and developer peace of mind. This means that in addition to having a great testing framework, you also need to use a good coverage tool.
> There's no excuse to not write tests. There are plenty of good JS test frameworks, so find one that your team prefers. When you find one that works for your team, then aim to always write tests for every new feature module you introduce. If you preferred method is Test Driven Development(TDD), that is great, but the main point is to just make sure you are reaching your coverage goals before launching any feature, or refactoring an existing one.

```js
// Bad:
import assert from 'assert'
describe('MomentJS', () => {
  it('handles date boundaries', () => {
    let date

    date = new MomentJS('1/1/2015')
    date.addDays(30)
    assert.equal('1/31/2015', date)

    date = new MomentJS('2/1/2016')
    date.addDays(28)
    assert.equal('02/29/2016', date)

    date = new MomentJS('2/1/2015')
    date.addDays(28)
    assert.equal('03/01/2015', date)
  })
})

// Good:
import assert from 'assert'

describe('MomentJS', () => {
  it('handles 30-day months', () => {
    const date = new MomentJS('1/1/2015')
    date.addDays(30)
    assert.equal('1/31/2015', date)
  })

  it('handles leap year', () => {
    const date = new MomentJS('2/1/2016')
    date.addDays(28)
    assert.equal('02/29/2015', date)
  })

  it('handles non-leap year', () => {
    const date = new MomentJS('2/1/2015')
    date.addDays(28)
    assert.equal('3/1/2015', date)
  })
})
```

# Concurrency

## Use Promises, not callbacks

> callbacks aren't clean, and they cause excessive amounts of nesting. With ES2015, Promises are a built-in global type. Use them!

```js
import { get } from 'request'
import { writeFile } from 'fs'
get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin',(reqEr,rs,body)=>{
  if(reqEr){
    console.err(reqEr)

  }else{
    writeFile('article.html',body,writeEr=>{
      if(writeEr){
        console.err(writeEr)

      }else{
        console.log('File written')

      }
    })
  }
})

// Good:
import { get } from 'request-promise'
import { writeFile } from 'fs-extra'
get('http://en').then(body=> writeFile('article.html',body))).then(()=>console.log('File written')).catch(err=>console.error(err))
```

## Async/Await are even cleaner than Promises

> Promises are a very clean alternative to callbacks, but ES2017 brings async and await which offer an even cleaner solution. All you need is a function that is prefixed in an `async` keyword, and then you can write your logic imperatively without a `then` chain of functions.

```js
async function getCleanCodeArticle() {
  try {
    const body = await get('https://en...')
    await writeFile('article.html', body)
    console.log('File written')
  } catch (er) {
    console.err(er)
  }
}
```

# Error handling

> Thrown errors are a good thing! They mean the runtime has successfully identified when sth in your program has gone wrong and its letting you know by stopping function execution on the current stack, killing the process(in Node), and notifying you in the console with a stack trace.

## Don't ignore caught errors

> Doing nothing with a caught error doesn't give you ability to ever fix or react to said error. Logging the er to the console(`console.log`) isn't much better as often times it can get lost in a sea of things printed to the console. If you wrap any bit of code in a `try/catch` it means you think an er may occur there and therefore you should have a plan, or create a code path, for when it occurs.

```js
try {
  functionThatMightThrow()
} catch (er) {
  // One option (more noisy than console.log)
  console.err(er)
  // Another option:
  notifyUserOfEr(er)
  // Another option:
  reportErToService(er)
  // OR do all three!
}
```

## Don't ignore rejected promises

> For the same reason you shouldn't ignore caught errors from `try/catch`.

# Formatting

```js
const fixedCols = differenceBy(dims, cusDims, 'name')
  ;(cusDims.length ? cusDims : dims).forEach((v
```

> Formatting is subjective. Like many rules herein, there is no hard and fast rule that you must follow. The main point is DO NOT ARGUE over formatting.

Function callers and callees should be close
If a function calls another, keep those functions vertically close in the source file. Ideally, keep the caller right above the callee. We tend to read code from top-to-bottom, like a newspaper. Because of this, make your code read that way.

Bad:

class PerformanceReview {
constructor(employee) {
this.employee = employee;
}

lookupPeers() {
return db.lookup(this.employee, "peers");
}

lookupManager() {
return db.lookup(this.employee, "manager");
}

getPeerReviews() {
const peers = this.lookupPeers();
// ...
}

perfReview() {
this.getPeerReviews();
this.getManagerReview();
this.getSelfReview();
}

getManagerReview() {
const manager = this.lookupManager();
}

getSelfReview() {
// ...
}
}

const review = new PerformanceReview(employee);
review.perfReview();
Good:

class PerformanceReview {
constructor(employee) {
this.employee = employee;
}

perfReview() {
this.getPeerReviews();
this.getManagerReview();
this.getSelfReview();
}

getPeerReviews() {
const peers = this.lookupPeers();
// ...
}

lookupPeers() {
return db.lookup(this.employee, "peers");
}

getManagerReview() {
const manager = this.lookupManager();
}

lookupManager() {
return db.lookup(this.employee, "manager");
}

getSelfReview() {
// ...
}
}

const review = new PerformanceReview(employee);
review.perfReview();

# Comments

当对前端代码把握不准的话，还是多写点注释，有助于后期维护、优化、重构。
为了减少代码行数，注释一般在第一行末尾
Only comment things that have business logic complexity.
Comments are an apology, not a requirement. Good code mostly documents itself.

Bad:

function hashIt(data) {
// The hash
let hash = 0;

// Length of string
const length = data.length;

// Loop through every character in data
for (let i = 0; i < length; i++) {
// Get character code.
const char = data.charCodeAt(i);
// Make the hash
hash = (hash << 5) - hash + char;
// Convert to 32-bit integer
hash &= hash;
}
}
Good:

function hashIt(data) {
let hash = 0;
const length = data.length;

for (let i = 0; i < length; i++) {
const char = data.charCodeAt(i);
hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;

}
}

## Don't leave commented out code in your codebase

Version control exists for a reason. Leave old code in your history.

Bad:

doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();
Good:

doStuff();

## Don't have journal comments

Remember, use version control! There's no need for dead code, commented code, and especially journal comments. Use git log to get history!

Bad:

/\*\*

- 2016-12-20: Removed monads, didn't understand them (RM)
- 2016-10-01: Improved using special monads (JP)
- 2016-02-03: Removed type-checking (LI)
- 2015-03-14: Added combine with type-checking (JR)
  \*/
  function combine(a, b) {
  return a + b;
  }
  Good:

function combine(a, b) {
return a + b;
}

## Avoid positional markers

They usually just add noise. Let the functions and variable names along with the proper indentation and formatting give the visual structure to your code.

Bad:

////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
menu: "foo",
nav: "bar"
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
// ...
};
Good:

$scope.model = {
menu: "foo",
nav: "bar"
};

const actions = function() {
// ...
};

# 参考资料

[clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)

# efficiency

https://mp.weixin.qq.com/s?__biz=MzA5ODM5MDU3MA==&mid=2650863237&idx=1&sn=8cd32e1f1d814c77decfa3146aa33e44&chksm=8b6611c0bc1198d66e24ac652cd1a4743fd83f4fdaae8076884038dd5f34929a420a3c6993dd&scene=21#wechat_redirect

- coding 当中要适当地画图，画关系图，然后一步步攻破之间要适当地提自我示以强化最优解相关记忆（点头）

visible(replace visibility)

我的大脑是 4 核，可以同时写 4 份代码，这样别人就打扰不到我，

# 写代码思路要清晰要稳

有问题，有 bug，不要怕，顺着好思路用力干就是了
再也不用 idx.md（\*\*）来命名主文件----为了减少 IDE（编辑器）的视力消耗能量，应该减少 tab 总宽度，命名直接和目录相同即可。

pane 面包 panel 控制面板，mismatch 不匹配，

# state&&status

作者：阁刚广志
链接：https://www.zhihu.com/question/21994784/answer/258830928
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

总结一下大家的观点：两者差不太多，state 用起来可能更方便一些更通用一点；要区分的话，state 表示一个确定的状态集中的某个状态（比如水的三态），status 表示一种笼统的情形（比如你的生活状态、工作状态），不存在确定的状态集。state 所指的状态，一般都是有限的、可列举的你体重属于偏瘦、正常还是偏胖，那就是 statereadyState -- 就那么四五种值 onreadystatechange -- 那么四五种值之间发生变化往往就是一个实体固有的稳定的状态如（隐藏、显示），（是、否），（可用、不可用）可数的，表达不会轻易变化的状态如 ReadyState, Fail 这类比较常用，各种状态都可以用它，但是它更着重于一种心理状态或者物理状态说物态变化用 state 再恰当不过如果说一个物质的四种状态，可以说“solid state”，但如果你说“solid status”，第一，这两个词的组合不像是描述物态，更像是在说“确定的状况（solid 产生歧义‘确定的/确凿的’）”；第二，这个说法即使不被误解，也需要事先约定一组物态变化顺序，比如把这个物质从固态开始加热然后电离，可能先后经历固态、液态、气态、等离子态这四个阶段。类似先定义枚举，然后引用的方式 status 则是不可确定的状态你体重多少公斤，属于 statusstatusText -- 描述性的文字，可以任意 window.status -- 描述性的文字，可以任意偏向于运行时状态不可数的，随过程不断变化的状态如 OrderedStatus, ShippingStatus,ReceiptedStatus 用在人的身上一般是其身份和地位，作“状态，情形”讲时，多指政治和商业两者差不多看各类文档里面 status 和 state 是混用的，主要是喜好和习惯问题书面上可能有区分，程序里还好我以前习惯用 status 后来发现我见过的大部分都习惯用 state。而且好像 state 又好写，又好读，所以我也开始用 state 了；lower-case、capital 小写的、大写的；letter、alphabet 字母；

知乎的答案有的可以拷贝，有的不能（提示：申请转载超链接）

写代码一定要搞懂原理，才能写出好代码（头部位置要稍微变动一下，才能促进思考）

attach 附,detach 分离

editing(not editting).

变量命名可以组合到 7 个单词的长度

src/constants.less, src/constants.ts;not constant.less.slash 斜杠；

早上到公司后，听完一会儿（不到 1 分半的歌之后），就可以立马进入到写代码的状态，然后就是一定要让自己保持住这种高效状态最长时间（比如说 1 个小时，再去放松眼睛、放松大脑、多喝水）

一个人想要的如果很多，那他可能什么也的不多，如果一段时间只做 1 件事情，那么他调用各种资源，为的就是把这件事情做完美做好做完，那么他只要保持住好的状态，同时一直保持住你的迷之自信，那么最终很有可能是能做成功的（而且是以最快速度）

每天让自己表情稍微严肃些（自然的严肃），可以让自己更专注（不要因为表情而降低一丁点效率，我们要追求更高的效率）

除非万不得已才用 txtColor，否则就用 color（和 bg 这个单词区分开）

唉，目前我的脑子还是比较笨的。比如说要实现一个排序函数（数字，大小写字母，中文，暂时还没有去测试特殊符号）的表格列前端 js 排序函数（数组 sort 回调），我写到了第 6 个版本的效果：数字、字母、中文。只有不断精进算法、数据结构、设计模式。写 function、设计模式、代码架构设计时的最佳实践（解决方案）--大部分考经验和交流（思想碰撞），少部分靠灵感;visible 还是能够完全替换 visibility 的（卧槽，一下少些 3 个字母）;涉及到复数形式的话，很多缩写都失效。

午休只休息 10 分钟，其余时间都用来写代码、听歌、写代码、听歌、看盘开仓平仓、。买苹果吃苹果买芝麻饼吃芝麻饼。买友臣手撕棒吃友臣手撕棒。

命名真的很重要，我一看到你写的垃圾命名，我很有可能立马就失去了兴趣。

我觉得吧，代码肯定不是 copy 出来的，可以从其他模块代码中借鉴出符合该模块需求的代码逻辑。但是不要 copy 代码，而要手动写出最佳代码，组织并形成最符合本模块的代码逻辑（任何代码都是可以被优化的，所以绝对不要照搬别人代码，变量命名倒是可以模仿着来）

我以后写代码，再也不用缩写了（任何缩写都不用，为了最大化可读性，所以每个单词我都会用对，用的恰到好处;当然特别长的单词一般都有很恰当的 alternatives）

渐进式代码设计、渐进式求解
