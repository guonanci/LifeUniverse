idx.md

import { uniqBy } from '@umijs/deps/compiled/lodash' 然后会报错 Object(...)

可以全局在 chrome-console 或者代码中（会报下方的 umijs 错）引入`_`(include any breakpoint).great！！

# debug

## TypeError: \_umijs_deps_compiled_lodash**WEBPACK*IMPORTED_MODULE_25***default.a.uniqWith is not a function

onSelectJumpFilterParam
./src/components/SelectChartResourceTabPage/index.tsx:158
155 | name: targetField!.name,
156 | }
157 | }

> 158 | if (

      | ^  159 |   _.uniqWith(entries, (a, b) => a[0] === b[0] && _.isEqual(a[1], b[1])).length !==

160 | entries.length
161 | ) {
View compiled
onChange
./src/components/SelectChartResourceTabPage/index.tsx:289
286 | }}
287 | className='w100p'
288 | value={paramField?.code}

> 289 | onChange={(v) => onSelectJumpFilterParam(v, 'fieldCode', i)}

      | ^  290 | placeholder='请选择关联字段'>

291 | {fields.map(({ code: fieldCode, name: fieldName }) => (
292 | <Select.Option
