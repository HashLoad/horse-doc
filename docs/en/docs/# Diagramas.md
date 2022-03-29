# Diagramas

graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D

stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]

States
A state can be declared in multiple ways. The simplest way is to define a state id as a description.

```
stateDiagram-v2
    s1
```

> s1

Another way is by using the state keyword with a description as per below:

```
stateDiagram-v2
    state "This is a state description" as s2
```
> This is a state description

Another way to define a state with a description is to define the state id followed by a colon and the description:

```
stateDiagram-v2
    s2 : This is a state description
```
> This is a state description

Transitions
Transitions are path/edges when one state passes into another. This is represented using text arrow, "-->".

When you define a transition between two states and the states are not already defined the undefined states are defined with the id from the transition. You can later add descriptions to states defined this way.

```
stateDiagram-v2
    s1 --> s2
```

>s1
>v
>s2
It is possible to add text to a transition. To describe what it represents.

```
stateDiagram-v2
    s1 --> s2: A transition
```

>s1
>|
>A transition
>v
>s2

Start and End
There are two special states indicating the start and stop of the diagram. These are written with the [*] syntax and the direction of the transition to it defines it either as a start or a stop state.

```
stateDiagram-v2
    [*] --> s1
    s1 --> [*]
```
>(o)-->s1-->(o)