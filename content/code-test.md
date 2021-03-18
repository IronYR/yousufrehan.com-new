---
title: code-test
posttitle: Testing code snippets
---
TEst

``` Javascript
let name = "YSFDSF";
function namer(n){
    console.log(n)
}
for (let n in name){
    namer(n)
}
```
Now the plan of action is this:
1. ### First isothermal expansion
2. Then adiabatic expansion
3. Then isothermal compression
4. Then adiabatic compression

### Now testing golang

``` Go
type Name struct {
    name string;
    email string;
    number int;
    school string;
}
func (n *Name) getName() string {
    return n.name;
}
```