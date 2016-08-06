'use strict';

// Node item processing with native promises

export class EachError extends Error {
    index: number;
    constructor(message?: string, index?: number) {
        super(message);
        this.message = message;
        this.index = index;
    }
}

export function eachItem<T>(
  items : T[], 
  processItemFunction: (item: T) => Promise<any>) : Promise<any> {
    let index = 0;
    let promise = new Promise<any>((resolve, reject) => {
        let continueWhile = function(nextItem: any, processItem: (item: any) => Promise<any>) {
            let item = nextItem();
            if (item) {
                processItem(item).then(function() {
                    index++;
                    continueWhile(nextItem, processItem);
                }, function(error) {
                  let eachError = new EachError(error.message, index);
                  reject(eachError);
                });
            }
            else {
                resolve();
            }
        };

        let nextItemFunction = function() {
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
