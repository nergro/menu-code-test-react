export enum ErrorCodes {
    AxiosNotInitialized = 100,
    MissingMandatoryProps = 101,
    StoreNotInitialized = 1001,
}

export interface StoreError {
    type: 'StoreError';
    message: string;
    code?: ErrorCodes;
}

export const newStoreError = (message: string, code: ErrorCodes): StoreError => ({
    type: 'StoreError',
    message,
    code,
});

export const isStoreError = (error: unknown): error is StoreError =>
    typeof error === 'object' && error !== null && (error as StoreError).type === 'StoreError';
