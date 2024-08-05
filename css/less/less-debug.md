Failed to compile
./src/pages/portal/editPage/index.less?modules
Module build failed (from ./node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/@umijs/deps/compiled/less-loader/cjs.js):

@primary-color: #F49900;
^
Unrecognised input. Possibly missing something
in /Users/guonanci/Documents/magicbi_web/src/pages/portal/editPage/index.less?modules (line 34, column 24)

# Failed to compile

./src/components/SelectChartResourceTabPage/index.less?modules
Module build failed (from ./node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/@umijs/deps/compiled/css-loader/cjs.js):
Error: **Missing whitespace after :global**
at Array.map (<anonymous>)
at Array.map (<anonymous>)
This error occurred during the build time and cannot be dismissed.

```less
// wrong
.jumpFilterParamRow {
  :global {
    .anticon-delete {
      display: none;
    }
    &:hover {
      .anticon-delete {
        display: inline-block;
      }
    }
  }
}
// right
.jumpFilterParamRow {
  :global {
    .anticon-delete {
      display: none;
    }
    .jumpFilterParamRow:hover {
      .anticon-delete {
        display: inline-block;
      }
    }
  }
}
```
