https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

```css
.boxShadowWithTwoDirections {
  box-shadow: -0.4em 0.4em 0.4em lightgray, 0.4em 0.4em 0.4em lightgray;
}
```

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

if a border-radius is specified on the element with a box shadow, **the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows(the first specified shadow is on top)**
The box-shadow property enables you to cast a drop shadow from the frame of almost any element.

generator:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator

```css
box-shadow: none;
box-shadow: 60px -16px teal;
box-shadow: inset 60px -16px teal;
/* offset-x offset-y blur-radius color */
box-shadow: 60px -16px 5px teal;
/* offset-x offset-y blur-radius spread-radius color */
box-shadow: 60px -16px 5px 5px teal;
```

Specify a single box-shadow using:

- Two,three or four <length> values.
  - If only two values are given

<blur-radius>
This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp). The specification does not include an exact algorithm for how the blur radius should be calculated, however, it does elaborate as follows:
…for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow’s edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.
<spread-radius>
This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
<color>
See <color> values for possible keywords and notations.
If not specified, it defaults to <color_value#currentcolor_keyword>.

设置 margin 会让 shadow 显示出来（有时候 shadow 会隐藏起来）
