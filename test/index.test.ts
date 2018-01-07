import * as Flow from '../src'

class Item implements Flow.Dependency {

    status?: string

    isDoneStep0: boolean = false
    isDoneStep1: boolean = false
    isDoneStep2: boolean = false
}

describe("Flow success test", () => {

    const step0: Flow.Step<Item> = new Flow.Step((item) => {
        item.isDoneStep0 = true
        return item
    })

    const step1: Flow.Step<Item> = new Flow.Step((item) => {
        item.isDoneStep1 = true
        return item
    })

    const step2: Flow.Step<Item> = new Flow.Step((item) => {
        item.isDoneStep2 = true
        return item
    })

    const flow: Flow.Line<Item> = new Flow.Line([step0, step1, step2])

    var item: Item = new Item()

    beforeAll(async () => {
        try {
            await flow.run(item)
        } catch(error) {
            console.log(error)
        }
    });

    describe("test", async () => {

        test("Step 0 is Done", () => {
            expect(item.isDoneStep0).toEqual(true)
        })

        test("Step 1 is Done", () => {
            expect(item.isDoneStep1).toEqual(true)
        })

        test("Step 2 is Done", () => {
            expect(item.isDoneStep2).toEqual(true)
        })
    })
})

describe("Flow failure test", () => {

    const step0: Flow.Step<Item> = new Flow.Step((item) => {
        item.isDoneStep0 = true
        return item
    })

    const step1: Flow.Step<Item> = new Flow.Step( async (item) => {
        try {
            return await sleep(item)
        } catch(err) {
            item.status = "fail"
            throw(err)
        }
    })

    const sleep = async (item) => {
        await setTimeout({

        }, 1)
        throw Error("message")
    }

    const step2: Flow.Step<Item> = new Flow.Step((item) => {
        item.isDoneStep2 = true
        return item
    })

    const flow: Flow.Line<Item> = new Flow.Line([step0, step1, step2])

    var item: Item = new Item()

    beforeAll(async () => {
        try {
            await flow.run(item)
        } catch(error) {

        }
    });

    describe("test", async () => {

        test("Step 0 is Done", () => {
            expect(item.isDoneStep0).toEqual(true)
        })

        test("Step 1 is fail", () => {
            expect(item.isDoneStep1).toEqual(false)
        })

        test("Step 2 is fail", () => {
            expect(item.isDoneStep2).toEqual(false)
        })

        test("Item status", () => {
            expect(item.status).toEqual("fail")
        })
    })
})
