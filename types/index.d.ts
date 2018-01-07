export interface Dependency {
}
export interface Processable<T extends Dependency> {
    execute(input: T): any;
}
export declare class Step<T extends Dependency> implements Processable<T> {
    dependency: T;
    error?: Error;
    script: (T) => Promise<T>;
    constructor(script: (T) => Promise<T>);
    execute(input: T): Promise<T>;
}
export declare class Line<T extends Dependency> {
    steps: Step<T>[];
    error?: Error;
    constructor(steps: Step<T>[]);
    run(dependency: T): Promise<void>;
}
