Tabs标签内的每一页content必须是div包裹起来的。

antd-mobile-v2:不要设置key，要不然有不显示tabContent的bug

# 如何检测到antd TabPanel内部子元素的加载完成

在 Ant Design 的 `Tabs` 组件中，通常无法直接监听 `TabPanel` 内部子元素的加载完成事件，因为 `TabPanel` 只是一个容器。你可以使用 `useEffect` 钩子来检测子组件的加载状态。以下是几种常用的检测方式：

### 方法 1：在子组件中使用 `useEffect` 钩子

如果 `TabPanel` 内部有异步数据加载的子组件，可以在子组件中使用 `useEffect` 钩子来监听数据的加载状态，然后将加载状态传递给父组件（即 TabPanel 或 Tabs），以便父组件知道子组件已加载完成。

```jsx
import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';

const { TabPane } = Tabs;

const ChildComponent = ({ onLoad }) => {
  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      onLoad(); // 通知父组件已加载完成
    }, 1000); // 假设加载时间为1秒

    return () => clearTimeout(timer);
  }, [onLoad]);

  return <div>Child Component Content</div>;
};

const MyTabs = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false); // 子组件加载完成时，设置为不加载状态
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        {loading ? <Spin /> : <ChildComponent onLoad={handleLoad} />}
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <div>Tab 2 Content</div>
      </TabPane>
    </Tabs>
  );
};

export default MyTabs;
```

### 方法 2：使用 `IntersectionObserver` 监听 TabPanel 内元素是否可见

如果你只需要知道 `TabPanel` 内的元素是否在视图中，可以使用 `IntersectionObserver`。这个方法会在元素首次出现在视图中时触发回调，这样可以在 Tab 内容可见时执行一些逻辑：

```jsx
import React, { useRef, useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';

const { TabPane } = Tabs;

const ChildComponent = ({ onVisible }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onVisible();
        }
      },
      { threshold: 1.0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onVisible]);

  return <div ref={ref}>Child Component Content</div>;
};

const MyTabs = () => {
  const [loading, setLoading] = useState(true);

  const handleVisible = () => {
    setLoading(false); // TabPanel 可见时设置为加载完成
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        {loading ? <Spin /> : <ChildComponent onVisible={handleVisible} />}
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <div>Tab 2 Content</div>
      </TabPane>
    </Tabs>
  );
};

export default MyTabs;
```

### 方法 3：使用 `Promise` 结合 `useEffect` 检测异步内容加载

在 `TabPanel` 内部加载异步内容时，可以将异步加载过程包装为 `Promise`，并在 `useEffect` 中设置加载完成的状态。

```jsx
import React, { useState, useEffect } from 'react';
import { Tabs, Spin } from 'antd';

const { TabPane } = Tabs;

const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Loaded Data"), 1000);
  });

const TabContent = ({ onDataLoad }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      onDataLoad(); // 通知父组件加载完成
    });
  }, [onDataLoad]);

  return <div>{data}</div>;
};

const MyTabs = () => {
  const [loading, setLoading] = useState(true);

  const handleDataLoad = () => {
    setLoading(false);
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        {loading ? <Spin /> : <TabContent onDataLoad={handleDataLoad} />}
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <div>Tab 2 Content</div>
      </TabPane>
    </Tabs>
  );
};

export default MyTabs;
```

这些方法适合在不同场景下检测 `TabPanel` 内部子元素的加载完成。
