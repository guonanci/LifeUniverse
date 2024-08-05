// 24 hour HH:mm:ss
/^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/.test('22:00:00')
// (?:x) Matches 'x' but does not remember the match. The parentheses are called non-capturing parentheses, and let you
// define subExpressions for regular expression operators to work with. Consider the sample express /(?:foo){1,2}/. If
// the expression was `/foo{1,2}/`,  the `{1,2}` characters would apply only to the last 'o' in 'foo'. With the non-capt
// uring parentheses, the `{1,2}` applies to the entries word 'foo'. For more information,

/x(?=y)/.test('xy') // True Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead
'xy'.match(/x(?=y)/) //

// certNo
/(^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/

// domestic fixed-line telephone
/\d{3}-\d{8}|\d{4}-\d{7}/

// html tag
/<(.*)>.*<\/\1>|<(.*) \/>/
















