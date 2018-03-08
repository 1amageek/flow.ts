# flow.ts

Flow enables coding of structured scripts.

# Installation

```shell
npm add @1amageek/flow
```

# Usage

```typescript
class Item implements Flow.Dependency {
    status?: string
}

```

```typescript
var item: Item = new Item()

const step0: Flow.Step<Item> = new Flow.Step((item) => {
    // Do something
    return item
})

const step1: Flow.Step<Item> = new Flow.Step( async (item) => {
    try {
        return await asyncFunction()
    } catch(err) {
        // Error handling
        throw(err)
    }
})

const step2: Flow.Step<Item> = new Flow.Step((item) => {
    // Do something
    return item
})

const flow: Flow.Line<Item> = new Flow.Line([step0, step1, step2])

try {
    await flow.run(item)
} catch(error) {
    // Error handling
}   
```
