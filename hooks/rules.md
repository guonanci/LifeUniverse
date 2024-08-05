```js
hooks中的坑，以及为什么？
不要在循环，条件或嵌套函数中调用Hook，必须始终在React函数的顶层使用Hook。这是因为React需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果。

使用useState时候，使用push，pop，splice等直接更改数组对象的坑，demo中使用push直接更改数组无法获取到新值，应该采用析构方式，但是在class里面不会有这个问题。(这个的原因是push，pop，splice是直接修改原数组，react会认为state并没有发生变化，无法更新)  这里的坑很多的，经常出现的就是每次修改数组的时候：

const [firstData, setFirstData]: any = useState([]);
const handleFirstAdd = () => {
  // let temp = firstData
  // 不要这么写，直接修改原数组相当于没有更新
  let temp = [...firstData];  // 必须这么写，多层数组也要这么写
  temp.push({    value: "",  });
  setFirstData(temp);};
  function Indicatorfilter() {
    let [num, setNums] = useState([0, 1, 2, 3]);
    const test = () => {
      // 这里坑是直接采用push去更新num，setNums(num)是无法更新num的，必须使用num = [...num ,1]
      num.push(1);    // num = [...num ,1]
      setNums(num);
    };
    return (
      <div className="filter">
      <div onClick={test}>测试</div>
      <div>{num.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      </div>    </div>  );}class Indicatorfilter extends React.Component<any, any> {  constructor(props: any) {    super(props);    this.state = {      nums: [1, 2, 3],    };    this.test = this.test.bind(this);  }  test() {    // class采用同样的方式是没有问题的    this.state.nums.push(1);    this.setState({      nums: this.state.nums,    });  }  render() {    let { nums } = this.state;    return (      <div>        <div onClick={this.test}>测试</div>        <div>          {nums.map((item: any, index: number) => (            <div key={index}>{item}</div>          ))}        </div>      </div>    );  }}
useState设置状态的时候，只有第一次生效，后期需要更新状态，必须通过useEffect

TableDeail是一个公共组件，在调用它的父组件里面，我们通过set改变columns的值，以为传递给TableDeail的columns是最新的值，所以tabColumn每次也是最新的值，但是实际tabColumn是最开始的值，不会随着columns的更新而更新

const TableDeail = ({    columns,}:TableData) => {    const [tabColumn, setTabColumn] = useState(columns) }
正确的做法是通过useEffect改变这个值

const TableDeail = ({    columns,}:TableData) => {    const [tabColumn, setTabColumn] =
```
