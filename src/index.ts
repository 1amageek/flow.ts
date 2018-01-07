import { Promise } from 'es6-promise';

export interface Dependency {

}

export interface Processable<T extends Dependency> {
    execute(input: T)
}

export class Step<T extends Dependency> implements Processable<T> {

    dependency: T

    error?: Error

    script: (T) => Promise<T>

    constructor(script: (T) => Promise<T>) {
        this.script = script
    }

    async execute(input: T) {
        this.dependency = input
        return this.script(input)
    }
}

export class Flow<T extends Dependency> {

    steps: Step<T>[] = []

    error?: Error

    constructor(steps: Step<T>[]) {
        this.steps = steps
    }

    async run(dependency: T) {
        var result
        for (let i=0; i<this.steps.length; i++) {
            let step = this.steps[i]
            try {                
                result = await step.execute(dependency)
            } catch(error) {
                step.error = error
                this.error = error
                throw(error)
            }
        }
        return result
    }
}