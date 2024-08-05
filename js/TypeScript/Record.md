https://stackoverflow.com/questions/51936369/what-is-the-record-type-in-typescript
https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype

```tsx

const dftThemes:Record<Theme,ThemeSetting>
const dftThemes:Record<Partial<Theme>,ThemeSetting>
Property 'CUSTOM' is missing in type '{ WHITE: { LEFT_TOP: { top: { bg: string; titleColor: string; subTitleColor: string; firstLayerMenuTxtColor: string; firstLayerMenuHighlightColor: string; }; left: { bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }; }; LEFT: { ...; }; TOP: { ...; }; }; BLACK: { ...; }; }' but required in type 'Record<Theme, ThemeSetting>'.ts(2741)
```
