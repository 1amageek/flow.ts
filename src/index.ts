export interface Dependency {

}

export interface Processable<T extends Dependency> {
    execute(input: T)
}

export class Step<T extends Dependency> implements Processable<T> {

    dependency: T

    error?: Error

    script: (arg: T) => Promise<T> | T

    constructor(script: (arg: T) => Promise<T> | T) {
        this.script = script
    }

    async execute(input: T) {
        this.dependency = input
        return this.script(input)
    }
}

export class Line<T extends Dependency> {

    steps: Step<T>[] = []

    error?: Error

    constructor(steps: Step<T>[]) {
        this.steps = steps
    }

    async run(dependency: T) {
        for (const step of this.steps) {
            try {                
                await step.execute(dependency)
            } catch(error) {
                step.error = error
                this.error = error
                throw(error)
            }
        }
    }
}