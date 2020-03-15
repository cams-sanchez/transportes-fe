
class LocalStorageHelper {

    localStorageKey = '';
    localStorageValue = {};

    getValueForKey = (keyToFind) => {
        this.localStorageKey = keyToFind;
        let foundValue = localStorage.getItem(this.localStorageKey);

        if (foundValue !== null) {
            this.localStorageValue = foundValue;
        }

        return this.localStorageValue;
    };

    saveValueToLocalStorage = (keyToSave, valueTosave) => {
        localStorage.setItem(keyToSave, valueTosave);
        this.localStorageKey = keyToSave;
        this.localStorageValue = valueTosave;
    }
}

export default LocalStorageHelper;
