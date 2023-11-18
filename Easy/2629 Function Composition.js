var compose = function (functions) {

    return function (x) {
        if (functions.length === 0) {
            return x;
        }

        return functions.reduceRight((acc, fn) => fn(acc), x)
    }
};