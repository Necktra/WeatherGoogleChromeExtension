const defaultOptions = {
    city: "Moscow",
};

const loadOptions = function (cb) {
    chrome.storage.sync.get(['options'], function (result) {
        let opts = defaultOptions;

        if (result.options) {
            opts = result.options;
        }

        console.log('options loaded ', result.options);

        cb(opts);
    });
};

const saveOptions = function (opts, cb) {
    chrome.storage.sync.set({
        options: opts
    }, function () {
        console.log('options saved ', opts);
        if (cb) cb();
    });
};

const onChangeOptions = function (cb) {
    chrome.storage.onChanged.addEventListener(function (changes, namespace) {
        console.log('options changed ', changes.options.newValue);
        cb(changes.options.newValue);
    });
};