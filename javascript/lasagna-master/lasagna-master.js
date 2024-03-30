/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if (remainingTime <= 0){
        return "Lasagna is done.";
    } else if (remainingTime === undefined) {
        return "You forgot to set the timer."
    } else {
        return "Not done, please wait."
    }
} 

export function preparationTime(layers, timePerLayer = 2) {
        return layers.length * timePerLayer;
}

export function quantities (layers){
    var quantities = new Object;
    quantities["noodles"] = layers.filter((layer) => layer === "noodles").length * 50;
    quantities["sauce"] = layers.filter((layer) => layer === "sauce").length * 0.2;
    return quantities;
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe,portions){
    var scaledRecipe = Object.assign({},recipe);
    for (let item in scaledRecipe){
        scaledRecipe[item] = scaledRecipe[item] * portions / 2;
    };
    return scaledRecipe;
}

