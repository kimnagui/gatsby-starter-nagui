const win = typeof window !== `undefined` ? window : {};

export const local = win.localStorage;
export const session = win.sessionStorage;

export const getItem = (storage, key) => {
    if (!storage) {
        return;
    }
    const data = storage.getItem(key);

    if (!data) {
        return;
    }
    return JSON.parse(data);
};

export const setItem = (storage, key, value) => {
    return storage.setItem(key, JSON.stringify(value));
};

export const clearItem = storage => {
    return storage.clear();
};
