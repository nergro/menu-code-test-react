export const newStoreError = (message, code) => ({
    type: 'StoreError',
    message,
    code,
});

export const isStoreError = (error) =>
    typeof error === 'object' && error !== null && error.type === 'StoreError';
