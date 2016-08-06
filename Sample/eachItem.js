'use strict';
class EachError extends Error {
    constructor(message, index) {
        super(message);
        this.message = message;
        this.index = index;
    }
}
exports.EachError = EachError;
function eachItem(items, processItemFunction) {
    let index = 0;
    let promise = new Promise((resolve, reject) => {
        let continueWhile = function (nextItem, processItem) {
            let item = nextItem();
            if (item) {
                processItem(item).then(function () {
                    index++;
                    continueWhile(nextItem, processItem);
                }, function (error) {
                    let eachError = new EachError(error.message, index);
                    reject(eachError);
                });
            }
            else {
                resolve();
            }
        };
        let nextItemFunction = function () {
            if (items && index < items.length) {
                let item = items[index];
                return item;
            }
            else {
                return null;
            }
        };
        continueWhile(nextItemFunction, processItemFunction);
    });
    return promise;
}
exports.eachItem = eachItem;
//# sourceMappingURL=eachItem.js.map