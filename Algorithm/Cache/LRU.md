https://leetcode-cn.com/problems/lru-cache/solution/lru-ce-lue-xiang-jie-he-shi-xian-by-labuladong/
https://baike.baidu.com/item/%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8
Least recently used.
Least recently used.
*使用哈希作为底层结构的数据库*，当然少不了*缓存淘汰算法*

根据数据的历史访问记录来淘汰数据，**如果数据最近被访问过，那么将来被访问的几率也更高**

根据数据的历史访问记录来淘汰数据
1. 新数据插入到链表头部
2. 每当缓存命中（即缓存数据被访问），则将数据移到链表头部
3. 当链表满的时候，将链表尾部的数据丢弃

1. 新数据插入到链表头部
2. 每当缓存命中（即缓存数据被访问），则将数据移到链表头部
3. 当链表满的时候，将链表尾部的数据丢弃

https://leetcode-cn.com/problems/lru-cache-lcci/

# medium
‘最近最少使用’缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值（允许你插入和特定键对应的值），并在初始化时指定最大容量。当缓存填满时，它应该删除最近最少使用的项目。


设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

示例:

LRUCache cache = new LRUCache( 2 /_ 缓存容量 _/ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回 1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回 3
cache.get(4); // 返回 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
隐藏提示 1
首先明确问题。你到底想要什么功能？
隐藏提示 2
什么数据结构对查找最有用？维护元素顺序最有用的数据结构是什么？
隐藏提示 3
散列表和双向链表都很有用。你能把这两者结合起来吗？

文字题解
实现本题的两种操作，需要用到一个哈希表和一个双向链表（自己实现，而不是使用语言自带的、封装好的数据结构）。在 Python 中，有一种结合了哈希表与双向链表的数据结构 OrderDict，只需要短短的几行代码就可以完成本题。在 JAVA 中，有类似的 LinkedHashMap。这些做法都不符合面试官的要求：

```py3
class LRUCache(collections.OrderedDict):

  def __init__(self, capacity: int):
    super().__init__()
    self.capacity=capacity

    def get(self, k: int)-> int:
      if k not in self:
        return -1
      self.move_to_end(k)
      return self[k]

    def put(self, k: int, v: int)->None:
      if k in self:
        self.move_to_end(k)
      self[k]=v
      if len(self) > self.capacity:
        self.popitem(last=False)
```

```java
class LRUCache extends LinkedHashMap<Integer, Integer>{
  private int capacity;

  public LRUCache(int capacity) {
    super(capacity, 0.75F, true);
    this.capacity=capacity;
  }

  public int get(int k) { // key
    return super.getOrDefault(k, -1);
  }

  public void put(int k, int v) {
    super.put(k, v);
  }

  @Override
  protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
    return size() > capacity;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```

我们用一个哈希表和一个双向链表维护所长在缓存中的键值对

- 双链按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的
- 哈希表即为普通的哈希映射 HashMap，通过缓存数据的键映射到其在双向链表中的位置
  这样一来，我们首先使用哈希表进行定位，找出缓存项在双向链表中的位置，随后将其移动到双向链表的头部，即可在 O（1）时间内完成 get 或 put 操作。具体操作如下：
- get 操作，首先判断 k 是否存在：
  - 如果 k 不存在，则返回-1
  - 如果 k 存在，则 k 对应的节点是最近被使用的节点。通过哈希表定位到该节点在双向链表中的位置，并将其移动到双向链表的头部，最后返回该节点的值。
- 对于 put 操作，首先判断该 k 是否存在：
  - 如果 k 不能，使用 k 和 v 创建一个新的节点，在双向链表的头部添加该节点，并将 k 和该节点添加进哈希表中。然后判断双向链表的节点数是否超出容量，如果超出容量，则删除双向链表的尾部节点，并删除哈希表中对应的项
  - 如果 k 存在，则与 get 操作类似，先通过哈希表定位，再将对应的节点值更新为 v，并将节点移到双向链表的头部
    上述各项操作中，**访问哈希表，在双向链表头部添加节点，在双向链表尾部删除节点的时间复杂度都是 O（1）**。而将一个节点移动到双向链表头部，可以分成「删除该节点」和「在双链头部添加节点」两步操作，都可以在 O（1）时间内完成

在双链的实现中，使用一个 dummy head 和 dummy tail 标记界限，这样在添加节点和删除节点的时候就不需要检查相邻的节点是否存在。

```js
class LRUCache {
  constructor(capacity){
    this.cache=new Map()
    this.capacity=capacity
  }
  get(k){
    if(!this.cache.has(k))return -1
    const v = this.cache.get(k)
    // make sure it is latest
    this.cache.delete(k)
    this.cache.set(k, v)
    return v
  }
  put(k, v){
    // delete if it exists
    if (this.cache.has(k))this.cache.delete(k)
    // store it in cache
    this.cache.set(k, v)
    // make sure not to exceed the range after store it in cache
    if (this.cache.size>this.capacity){ // LRU: least recently used
      const first=this.cache.keys().next().value
      this.cache.delete(first)
    }
  }
}
class LRUCache {
  constructor(capacity){
    this.cache=new Map()
    this.capacity=capacity
  }
  get(k){


    if(!this.cache.has(k))return -1
    const v = this.cache.get(k)
    // make sure it is latest
    this.cache.delete(k)
    this.cache.set(k,v)
    return v
  }
  put(k,v){
    if(this.cache.has(k))this.cache.delete(k)//make sure it is latest
    this.cache.set(k,v)
    if(this.cache.size>this.capacity){
      // delete if it exists,Map结构可以在delete，set后，使得调用keys和next方法时，取到最老的值，而不是最新的值
      const farest=this.cache.keys().next().value
      this.cache.delete(first)
    }
  }
}
var LRUCache = class {

    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const cache = this.cache;
        if (cache.has(key)) {
            const tmp = cache.get(key)
            cache.delete(key);
            cache.set(key, tmp);
            return tmp;
        } else {
            return -1;
        }
    };

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const cache = this.cache;
        if (cache.has(key)) {
            cache.delete(key);
        } else if (cache.size >= this.capacity) {
            cache.delete(cache.keys().next().value);
        }
        cache.set(key, value);
    };
};

作者：muyids
链接：https://leetcode-cn.com/problems/lru-cache/solution/javascript-es6-map-jian-dan-shi-xian-by-muyids/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```
