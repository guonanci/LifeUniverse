/* https://juejin.cn/post/6937102296442470413?utm_source=gold_browser_extension */
Google Font，text-shadow 长阴影文字效果，氖nai光效果neon；background-clip、mix、mix-blend-mode

/* https://github.com/chokcoco/iCSS/issues/69 */
衬线字体serif、无衬线字体sans-serif。具体字体族名、通用字体族名。尽量使用系统默认字体

/* https://github.com/chokcoco/iCSS/issues/6 */

# 文字纵向拉伸，比如‘X’

```css
span {
    font-size: 15px;
    cursor: pointer;
    /* vertical-align: baseline; */
    padding: 0 1px 0 2px;
    transform: scale(1, 0.7);
    transform-origin: 0 15px;
    display: inline-block;
    height: 100%;
}
```
