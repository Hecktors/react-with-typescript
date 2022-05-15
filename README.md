# React with TypeScipt

### Types

```
let isOpen: boolean = true;                               // boolean
let age: number = 5;                                      // number
let fullName: string = 'John Doe';                        // string
let alpha1: string[] = ['a', 'b', 'c';                    // array
let alpha2: Array<string> = ['a', 'b', 'c'];              // array - other way
let person: object = { name: 'John Doe', age: 50};        // object
let u: undefined = undefined;                             // undefined
let n: null = null;                                       // null
let basket: [string, number] = ['basketball', 5];         // Tuple - array with div. types

enum Size { Small = 1, Medium = 2, Large = 3};            // Enum
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

let x: any = ['a', 1];                                    // any - can be any type, try to avoid
```

### Functions

```
let add = (num: number):string => { return num + "x" };   // function - gets number, returns string
let addPrint = (): void => { console.log(1 + 2) };        // void - error: expects no return
let error = (): never => { throw Error('error!') };       // never - no return and throws error
```

### Type inference (better practice)

```
let name = 'John Doe';                                    // ts realizes that it’s a string type
```

### Union Type

```
let age: string | number = 5;
```

### Type Alias

```
interface Person {
  name: string,
  age?: number
};          // interface - ? = optional
let John: Person;
```

### Generics

```
function addAtBeginning<T>(array: T[], value: T):T[] {    // array has same types as value
  return [value, ...array];
}

const addAtBeginning2 = <T>(array: T[], value: T): T[] => {
  return [value, ...array];
}
```

### Class Component

```
class App extends React.Component<MyProps, MyState>
```

### Functional Component

```
const TodoItem: React.FC<{ text: string; onAddTodo: (text: string) => void }> = (props) => {...}

const HighOrderComponent: React.FC<{ children: React.ReactNode }> = (props) => {...}
```

### Input Change Handler Event

```
const changeHandler= (event: React.FormEvent<HTMLInputElement>) => {...}
```
