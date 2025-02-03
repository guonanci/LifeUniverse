<https://jsplumbtoolkit.com/demonstrations/flowchart-builder>

<https://github.com/jsplumb-demonstrations/flowchart-builder/blob/6.x/react/src/FlowchartComponent.jsx>

```js
<div style={{width:"100%",height:"100%",display:"flex"}}>
                <div className="jtk-demo-canvas">
<SurfaceProvider>
  <SurfaceComponent shapeLibrary={shapeLib} renderOptions={ren} toolKit={t} viewOptions={v} ref={r} >

  <ControlsComp />
  <ExportControlsC/>
  <MiniviewCom/>
  </SurfaceCom>
<div className="jtk-demo-rhs">
                            <ShapeLibraryPaletteComponent className="node-palette" dataGenerator={dataGenerator} initialSet={FLOWCHART_SHAPES.id}/>
                            <Inspector edgeMappings={edgeMappings()}/>
                        </div>
</SurfaceProvider>
</div></div>
```

Pan Mode/Select Mode/Zoom To Fit/Undo last action/Redo last action/Clear dataset?

Export:SVG/PNG/JPG

palette调色板

lasso
n.
套索
vt.
用套索套捕；拉拢
n.
（Lasso）人名；（西、意）拉索

plumb:
vt.
装水管；使垂直；探测，探索
vi.
当管子工
n.
垂直；铅锤；（Plumb）（英）普拉姆（人名）
adv.
恰恰，正；垂直地；彻底地
adj.
垂直的

subroutine子例程；

# flowchart.js

st=>start: Starst|past:><http://www.google.com[blank>]
e=>end: End:><http://www.google.com>
op1=>operation: My Operation|past:$myFunction
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:><http://www.google.com>
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request
para=>parallel: parallel tasks

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->para
c2(true)->io->e
c2(false)->e

para(path1, bottom)->sub1(left)->op1
para(path2, right)->op2->e

st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>flowchart.js · Playground</title>
        <style type="text/css">
          .end-element { fill : #FFCCFF; }
        </style>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="http://flowchart.js.org/flowchart-latest.js"></script>
        <!-- <script src="../release/flowchart.min.js"></script> -->
        <script>

            window.onload = function () {
                var btn = document.getElementById("run"),
                    cd = document.getElementById("code"),
                    chart;

                (btn.onclick = function () {
                    var code = cd.value;

                    if (chart) {
                      chart.clean();
                    }

                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas', {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 3,
                      'maxWidth': 3,//ensures the flowcharts fits within a certian width
                      'line-length': 50,
                      'text-margin': 10,
                      'font-size': 14,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': 'yellow'
                        },
                        'end':{
                          'class': 'end-element'
                        }
                      },
                      'flowstate' : {
                        'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : '#FFFF99'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : '#444444'},
                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                      }
                    });

                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
                })();

            };

            function myFunction(event, node) {
              console.log("You just clicked this node:", node);
            }

        </script>
    </head>
    <body>
        <div><textarea id="code" style="width: 100%;" rows="11">
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past:$myFunction
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request
para=>parallel: parallel tasks

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->para
c2(true)->io->e
c2(false)->e

para(path1, bottom)->sub1(left)->op1
para(path2, right)->op2->e

st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})</textarea></div>
        <div><button id="run" type="button">Run</button></div>
        <div id="canvas"></div>
    </body>
</html>

```

<https://github.com/adrai/flowchart.js>

flowchart.js
flowchart.js is a flowchart DSL and SVG render that runs in the browser and terminal.

Nodes and connections are defined separately so that nodes can be reused and connections can be quickly changed. Fine grain changes to node and connection style can also be made right in the DSL.

Example
st=>start: Start:><http://www.google.com[blank>]
e=>end:><http://www.google.com>
getInfo=>input: Input Info
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:><http://www.google.com>
io=>inputoutput: catch something...
printInfo=>output: Print info
para=>parallel: parallel tasks

st->getInfo->op1->cond
cond(yes)->io->printInfo->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
Example Flowchart

CLI
See francoislaberge/diagrams on how to flowchart.js in the terminal.

Browser Usage
flowchart.js is on CDNJS, feel free to use it.

You will also need Raphaël, which is also on CDNJS.

The demo html page is at example/index.html.

Node Syntax
nodeName=>nodeType: nodeText[|flowstate][:>urlLink]

Items in [] are optional.

nodeName defines the nodes variable name within the flowchart document.

nodeType defines what type the node is. See Node Types for more information.

nodeText is the text that will be inserted into the node. Newlines are allowed and will be reflected in the rendered node text.

flowstate is optional and uses the | operator that specifies extra styling for the node.

urlLink is optional and uses the :> operator to specify the url to link to.

Node Types
Defines the shape that the node will take.

start
Used as the first node where flows start from. Default text is Start.

start image

st=>start: start
end
Used as the last node where a flow ends. Default text is End.

end image

e=>end: end
operation
Indicates that an operation needs to happen in the flow.

operation image

op1=>operation: operation
inputoutput
Indicates that IO happens in a flow.

inputoutput image

io=>inputoutput: inputoutput
input
Indicates that Input happens in a flow.

input image

getInfo=>input: Input info
output
Indicates that Output happens in a flow.

output image

printInfo=>output: Print info
subroutine
Indicates that a subroutine happens in the flow and that there should be another flowchart that documents this subroutine.

subroutine image

sub1=>subroutine: subroutine
condition
Allows for a conditional or logical statement to direct the flow into one of two paths.

condition image

cond=>condition: condition
Yes or No?
parallel
Allows for multiple flows to happen simultaneously.

parallel image

para=>parallel: parallel
Connections
Connections are defined in their own section below the node definitions. The -> operator specifies a connection from one node to another like nodeVar1->nodeVar2->nodeVar3.

Not all nodes need to be specified in one string and can be separaged like so

nodeVar1->nodeVar2
nodeVar2->nodeVar3
Connection syntax is as follows:

<node variable name>[(<specification1>[, <specification2])]-><node variable name>[[(<specification1>[, <specification2])]-><node variable name>]

Items in [] are optional.

Directions
The following directions are available and define the direction the connection will leave the node from. If there are more than one specifiers, it is always the last. All nodes have a default direction making this an optional specification. <direction> will be used to indicate that one of the following should be used in its place.

left
right
top
bottom
Node Specific Specifiers by Type
Each node variables has optional specifiers, like direction, and some have special specifiers depending on the node type that are defined below. Specifiers are added after the variable name in () and separated with , like nodeVar(spec1, spec2).

start
Optional direction

startVar(<direction>)->nextNode

end
No specifications because connections only go to the end node and do not leave from it.

previousNode->endVar

operation
Optional direction

operationVar(<direction>)->nextNode

inputoutput
Optional direction

inputoutputVar(<direction>)->nextNode

subroutine
Optional direction

subroutineVar(<direction>)->nextNode

condition
Required logical specification of yes or no

Optional direction

conditionalVar(yes, <direction>)->nextNode1
conditionalVar(no,  <direction>)->nextNode2
parallel
Required path specification of path1, path2, or path3

Optional direction

parallelVar(path1, <direction>)->nextNode1
parallelVar(path2, <direction>)->nextNode2
parallelVar(path3, <direction>)->nextNode3
Links
A external link can be added to a node with the :> operator.

The st node is linked to <http://www.google.com> and will open a new tab because [blank] is at the end of the URL.

The e node is linked to <http://www.yahoo.com> and will cause the page to navigate to that page instead of opening a new tab.

st=>start: Start:><http://www.google.com[blank>]
e=>end: End:><http://www.yahoo.com>
Advice
Symbols that should possibly not be used in the text: => and -> and :> and | and @> and :$

If you want to emphasize a specific path in your flowchart, you can additionally define it like this:

st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})
Custom names for branches
st=>start: Start:><http://www.google.com[blank>]
e=>end:><http://www.google.com>
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: linear or polynomial :><http://www.google.com>
io=>inputoutput: catch something...
para=>parallel: 3 possibilities

st->op1->cond
cond(true@linear)->io->e
cond(false@polynomial)->sub1(right)
sub1(right)->para
para(path1@an1, top)->cond
para(path2@an2, right)->op1
para(path3@an3, bottom)->e
Demonstration

## Directions

The following directions are available and define the direction the connection will leave the node from. If there are more than one specifiers, it is always the last.

All nodes have a default direction making this an optional specification. <direction> will be used to indicate that one of the following should be used in its place.

- left
- right
- top
- bottom

## Node Specific Specifiers by Type

Each node variables has optional specifiers, like direction, and some have special specifiers depending on the node type that are defined below.

Specifiers are added after the variable name in () and separated with , like nodeVar(spec1, spec2).

## start

Optional direction
`startVar(<direction>)->nextNode`

## end

No specifications because connections only go to the end node and do not leave from it.
`previousNode->endVar`

## operation

Optional direction
`operationVar(<direction>)->nextNode`

## inputoutput

Optional direction

inputoutputVar(<direction>)->nextNode

## subroutine

Optional direction

subroutineVar(<direction>)->nextNode

## condition

Required logical specification of yes or no

Optional direction

conditionalVar(yes, <direction>)->nextNode1
conditionalVar(no,  <direction>)->nextNode2

## parallel

Required path specification of path1, path2, or path3

Optional direction

parallelVar(path1, <direction>)->nextNode1
parallelVar(path2, <direction>)->nextNode2
parallelVar(path3, <direction>)->nextNode3

## Links

A external link can be added to a node with the :> operator.

The st node is linked to <http://www.google.com> and will open a new tab because [blank] is at the end of the URL.

The e node is linked to <http://www.yahoo.com> and will cause the page to navigate to that page instead of opening a new tab.

st=>start: Start:><http://www.google.com[blank>]
e=>end: End:><http://www.yahoo.com>

## Advice

Symbols that should possibly not be used in the text: => and -> and :> and | and @> and :$

If you want to emphasize a specific path in your flowchart, you can additionally define it like this:

st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})

## Custom names for branches

st=>start: Start:><http://www.google.com[blank>]
e=>end:><http://www.google.com>
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: linear or polynomial :><http://www.google.com>
io=>inputoutput: catch something...
para=>parallel: 3 possibilities

st->op1->cond
cond(true@linear)->io->e
cond(false@polynomial)->sub1(right)
sub1(right)->para
para(path1@an1, top)->cond
para(path2@an2, right)->op1
para(path3@an3, bottom)->e
