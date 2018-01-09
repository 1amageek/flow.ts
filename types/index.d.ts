export interface Dependency {
}
export interface Processable<T extends Dependency> {
    execute(input: T): any;
}
export declare class Step<T extends Dependency> implements Processable<T> {
    dependency: T;
    error?: Error;
    script: (arg: T) => Promise<T> | T;
    constructor(script: (arg: T) => Promise<T> | T);
    execute(input: T): Promise<T>;
}
export declare class Line<T extends Dependency> {
    steps: Step<T>[];
    error?: Error;
    constructor(steps: Step<T>[]);
    run(dependency: T): Promise<void>;
}
