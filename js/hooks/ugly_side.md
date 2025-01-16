# https://medium.com/swlh/the-ugly-side-of-hooks-584f0f8136b6

## hooks/design_pattern.md-Bloated API

than the old one. Simple things like getting the previous props and st, are becoming good interview material. Can you write a hook for getting the prev props, without the help of google?

A big library like React must be very careful with adding such huge changes in the API, and the motivation here was not even close to being justified 合乎情理的。

## Lack of declarativity

In my opinion, Funclasses tend to get much messier 更肮脏的 than classes. For example, It's harder to find the entry point of the cmpt - with classes you just search for the `render` fn, but with Funclasses it can be hard to spot(v 看见、注意到) the main ret statement. Also, its harder to follow the diff useEffect statements and understand the flow of the cmpt, as opposed to the regular life-cycle methods that give you some good hints for where you need to look for your code. If I am searching for some kind of initialization logic, I will jump(cmd + shift + o in VSCode) to `componentDidMount`. If I am looking for some kind of updating mechanism, I will probably jump to `componentDidUpdate` and so on. With Funclasses I find it much harder to orient 确定方位 inside big components.

## Coupling everything to React

People start to use specific React libraries for doing simple things that are mostly made of pure logic, and could easily be un-coupled from React. Take a look at `this` Tracking location look, imported from a library called `react-use`:
https://github.com/streamich/react-use/blob/master/docs/useLocation.md
useLocation: React sensor hook that tracks browser's location.
For internet Explorer you need to install a polyfill.

```js
import { useLocation } from 'react-use'
const Demo = () => {
  const st = useLocation()

  return <div>{JSON.stringify(st, null, 2)}</div>
}
```

But isnt it better to just use vanilla 香子兰 香草 香草味的 lib? sth like this:

```js
import { tracker } from 'someVanillaTracker'
const Demo = () => {
  const [location, setLocation] = useState({})

  useEffect(() => {
    tracker.onChange(setLocation())
  }, [])

  return <div>{JSON.stringify(st)}</div>
}
```

Is it more verbose? Yep, the first solution is definitely shorter. But the second solution is keeping the JS world un-coupled from React, and adding few more lines of code is a sml price to pay for such an important thing. Custom hooks have opened a door for endless possibilities of coupling pure logic to React's state, and those libraries are spreading like wildfire 野火 烈火.
**It just feels wrong**
You know that feeling that sth isn't right? This is how I feel about Funclasses. Sometimes I can put my finger on the exact problem, **but sometimes it's just a general feeling that we are on the wrong track**. When you discover a good concept, you can see how things are working together nicely. But when you are struggling with the wrong concept, it turns out that you need to add more and more specific stuff and rules in order to make things work. With hooks, there are more and more weird things that pop out, more 'useful' hooks that help you do some trivial 不重要的无聊的 stuff, and more things to learn. If we need so many utils for our day to day work, just for hiding away some weird complications 并发症, this is a huge sign that we are on the wrong track.

Few years ago, when I switched from Angular 1.5 to React, I was amazed by how simple the API of React was, and how thin the docs are. Angular used to have huge docs. It would have taken you days to cover everything-the digest mechanism, the diff compilation 编译 phases, transclude,binding,templates and more.This alone was a huge indication for me that sth is just wrong. React on the other hand, immediately felt right. It was clean and concise, you could go over the whole docs in a matter of hours and you were good to go. While trying hooks for the first time, and for the second time, and for all the following times, I've found myself obligated 责无旁贷的，有义务的 to go back to docs again and again.

## An important note

After reading some of the comments, I found out that many people think I am a class advocator 提倡者. Well, its far from being true.

Classes have many disadvantages, but Funclasses are just worst. As I have already stated at the beginning of the post - _class is a concept, not a syntax_. Remember that awful 可怕的 极坏的 极讨厌的 难受的 使人敬畏的 非常的 prototype syntax that was achieving the same goal of classes, but in the most awkward way? So that's what I feel about Funclasses. You dont have to love classes in order to hate the old prototype syntax, and you dont have to love classes in order to hate Funclasses:)

It's not a fight between OOP and Functional programming, because Funclasses aren't related to functional programming by any means, and strictly speaking, writing an app with React, no matter if you use Classes or not, is not exactly OOP.

## Conclusion

I hate being the party pooper 铲屎官（party pooper 扫大家兴的人）, but I really think that Funclasses could be the 2nd worst thing that happened to the React community(first place is still taken by Redux). It added another useless debate to an already fragile 易碎的 eco-system, it's not clear now if Funclasses are the recommended way to go or is it just another feat and a matter of personal taste.

I hope that the React community will wake up and ask for a parity 平价的 between the features of Funclasses and classes. We can have a better Context API in classes, and we can have sth like useEffect for classes, and even useState. React should give us the choice to continue using classes if we want to, and not forcefully killing it by adding more features for Funclasses only, leaving classes behind.

BTW, back in the end of 2017, I have published a post with the title'The ugly side of Redux', and today even Dan Abramov, the creator of Redux, already admits that Redux was a huge mistake:

I pity 同情 the poor 可怜的 junior 资历较浅的 dev who was forced to use Redux because mgmt（management） read that Dan Abramov said it was the right way to handle state, but it makes no sense to them and they were let go for not being productive enough

That's literally the reason I'm going to Hell

Is it all just the history repeating itself? time will tell

Anyways, me and my teammates decided to stick with classes for now, and a Mobx-based solution as a state management tool. I think that there is a big diff in the popularity of hooks among solo developers and those who work in a team - the bad nature of hooks is way more visible in a big codebase, where you need to handle other's people code. Personally I

I am going to start working on an RFC that will suggest a simple, clean, built-in state-mgmt solution for React, that will solve the problem of sharing stateful logic once and for all, hopefully with a less awkward way than Funclasses.

**Upd**: I have published the RFC, so if you liked this post, and you wish for a better built-in st mgmt solution in React, please give it a thumb up and help me bring it into focus:
https://github.com/reactjs/rfcs/pull/179

Is it all just the
Classic OOP apologist spewing non-sense(胡说、废话、荒谬的想法、胡闹、无意义的话 nonsense). Hooks are great.
Let me guess, you are probably thinking that Funclasses are functional programming:)
I honestly think hooks are a step forward and not a step back. I think the justifications 正当理由、合理解释、证明为正当；辩护； are completely valid and funclasses are not functional programming. I just think they are way cleaner than classes.
Hooks are difficult to use. At my com we've spent way too much time on them I'd love to have a 'functional' functional solution, but in my experience, hooks are a mess, Newbies can write old class-based React easily, but that's not the case...

# https://blog.logrocket.com/react-hooks-the-good-the-bad-and-the-ugly

React hooks: The good, the bad, and the ugly
Hooks burst onto the scene with the release of React lofty 崇高的巍峨的
The dust has settled 尘埃落定 succeed 成功、继承、继任、兴旺。
pitch（n 运动场地、程度、音高；推销行话；倾斜度；沥青；投球；街头摆摊处；颠簸；螺距；v 投掷；投；触地；击高球；重跌；颠簸；

Paul Cowan
Contract software developer.
React Hooks: The good, the bad, and the ugly
June 23, 2021 3 min read

React Hooks: The Good, the Bad, and the Ugly
Hooks burst onto the scene with the release of React 16.8 with the lofty goal of changing the way we write React components. The dust has settled, and Hooks are widespread. Have Hooks succeeded?

The initial marketing pitched Hooks as a way of getting rid of class components. The main problem with class components is that composability is difficult. Resharing the logic contained in the lifecycle events componentDidMount and friends led to patterns such as higher-order components and renderProps that are awkward patterns with edge cases. The best thing about Hooks is their ability to isolate cross-cutting concerns and be composable.

The good
What Hooks do well is encapsulate state and share logic. Library packages such as react-router and react-redux have simpler and cleaner APIs thanks to Hooks.

Below is some example code using the old-school connect API.

import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStore, User } from '../types';
import { actions } from '../actions/constants';
import { usersSelector } from '../selectors/users';

const mapStateToProps = (state: AppStore) => ({
users: usersSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => {
return {
addItem: (user: User) => dispatch({ type: actions.ADD_USER, payload: user })
}
}

const UsersContainer: React.FC<{users: User[], addItem: (user: User) => void}> = (props) => {
return (
<>
<h1>HOC connect</h1>
<div>
{
users.map((user) => {
return (
<User user={user} key={user.id} dispatchToStore={props.addItem} />
)
})
}
</div>
</>
)
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
Code like this is bloated and repetitive. Typing mapStateToProps and mapDispatchToProps was annoying.

Below is the same code refactored to use Hooks:

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, User } from '../types';
import { actions } from '../actions/constants';

export const UsersContainer: React.FC = () => {
const dispatch = useDispatch();
const users: User[] = useSelector((state: AppStore) => state.users);

return (
<>
<h1>Hooks</h1>
{
users.map((user) => {
return (
<User user={user} key={user.id} dispatchToStore={dispatch} />
)
})
}
</>
)
};
The difference is night-and-day. Hooks provide a cleaner and simpler API. Hooks also eliminate the need to wrap everything in a component, which is another huge win.

The bad
The dependency array
The useEffect Hook takes a function argument and a dependency array for the second argument.

import React, { useEffect, useState } from 'react';

export function Home() {
const args = ['a'];
const [value, setValue] = useState(['b']);

useEffect(() => {
setValue(['c']);
}, [args]);

console.log('value', value);
}
The code above will cause the useEffect Hook to spin infinitely because of this seemingly innocent assignment:

const args = ['a'];

On each new render, React will keep a copy of the dependency array from the previous render. React will compare the current dependency array with the previous one. Each element is compared using the Object.is method to determine whether useEffect should run again with the new values. Objects are compared by reference and not by value. The variable args will be a new object on each re-render and have a different address in memory than the last.

verdict 判决
compelling 引人注目的，令人信服的，非常强烈的，不可抗拒的。incumbents 在位者；no-brainer 无需用脑的事，容易做的决定，愚蠢的人（或行为）；

The pros 赞成者赞成的意见 of Hooks outweigh 比。。。重（在重量上），比。。。重要，比。。。有价值） the cons 反对者

Manually managing the dependency graph and memoizing in all the right places is probably the source of most of the problems, and this could do with a rethink. Generator functions might be a better fit here with their beautiful, unique ability to suspend and resume（中断后重新开始，继续，重新回到，恢复席位、地位、职位） execution.

Closures are the home of gotchas and pitfalls. A stale 不新鲜的 closure can reference variables that are not up to date.

A knowledge of closures is a barrier to entry when using Hooks, and you must come armed with that knowledge for debugging.

Full visibility into production React apps
Debugging React applications can be difficult, especially when users experience issues that are hard to reproduce. If you’re interested in monitoring and tracking Redux state, automatically surfacing JavaScript errors, and tracking slow network requests and component load time, try LogRocket. LogRocket Dashboard Free Trial Banner
LogRocket is like a DVR for web apps, recording literally everything that happens on your React app. Instead of guessing why problems happen, you can aggregate and report on what state your application was in when an issue occurred. LogRocket also monitors your app's performance, reporting with metrics like client CPU load, client memory usage, and more.

The LogRocket Redux middleware package adds an extra layer of visibility into your user sessions. LogRocket logs all actions and state from your Redux stores.

Modernize how you debug your React apps — start monitoring for free.
