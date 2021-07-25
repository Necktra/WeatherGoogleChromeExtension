const cityName = document.getElementById("cityName");
const save = document.getElementById("save");

loadOptions(function (opts) {
    cityName.value = opts.city;
});

save.addEventListener('click', function () {
    saveOptions({
        city: cityName.value
    });
});