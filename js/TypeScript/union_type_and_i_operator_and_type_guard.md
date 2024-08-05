Property 'top' does not exist on type '{ top: { bg: string; titleColor: string; subTitleColor: string; firstLayerMenuTxtColor: string; firstLayerMenuHighlightColor: string; }; left: { bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }; } | { ...; } | { ...; }'.
Property 'top' does not exist on type '{ titleBg: string; titleColor: string; subTitleColor: string; menuBg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }'.ts(2339)

```tsx
const topTitleColor =
  'top' in finalThemeSetting
    ? finalThemeSetting.top.titleColor
    : finalThemeSetting.titleColor
```

This is the standard in Javsacript operator. You can read more documentation here, but the short story is

The in operator returns true if the specified property is in the specified object. The syntax is:

propNameOrNumber in objectName
where propNameOrNumber is a string or numeric expression representing a property name or array index, and objectName is the name of an object.

In Typescript the in operator also acts as a type guard as described here

```tsx

interface A {
x: number;
}
interface B {
y: string;
}

let q: A | B = ...;
if ('x' in q) {
// q: A
} else {
// q: B
}
```
