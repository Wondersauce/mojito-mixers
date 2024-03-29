/**
 * Allows you to type an object literal. For example, `to<MyInterface>({ ... })`. Doing `{ ... } as MyInterface` won't
 * work as that casts the object, so that will never fail, even if the object does not satisfy the interface.
 */
export declare const to: <T>(obj: T) => T;
export declare type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
