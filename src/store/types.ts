export interface Action<T> {
    readonly type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
    readonly payload: P;
}

export type Reducer<S, A> = (state: S, action: A) => S;
export type Dispatch<A> = (action: A) => void;
