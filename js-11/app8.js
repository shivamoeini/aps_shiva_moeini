const phone = {
    brand: "iPhone",
    model: "iPhone X",
    launchYear: 2017,
    isUnlocked: true,
};

phone.brand = "Apple";

const phoneBrand = phone.brand;
const phoneLaunchYear = phone["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);