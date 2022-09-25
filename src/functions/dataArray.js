export function addItemToArrayObjects (arr, key, value) {
    arr.forEach((item) => {
        item[key] = value;
    });

    return arr;
}

export function getSumAddonValueFromArray (arr, isMonthly) {
    let addonValue = 0;
    let filterArr = arr.filter(item => item.isSelected === true);

    filterArr.forEach((item) => {
        addonValue = addonValue + parseFloat((isMonthly ? item.monthlyPrice : item.annualPrice));
    });

    return addonValue;
}