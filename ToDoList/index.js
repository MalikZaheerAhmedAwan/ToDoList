#! /usr/bin/env node
import inquirer from "inquirer";
let toDoList = [];
let repeat = true;
while (repeat == true) {
    let operation = await inquirer.prompt([{ name: "option", type: "list", choices: ["Add Item", "Find Item", "Update Item", "Delete Item", "Show List"] }]);
    if (operation.option == "Add Item") {
        let itm = await inquirer.prompt([{ name: "itemName", type: "string", message: "Enter description or title to insert in list" }]);
        if (itm.itemName == "")
            console.log("Blank text cannot be added in the list");
        else
            toDoList.push(itm.itemName);
    }
    if (operation.option == "Find Item") {
        let itm = await inquirer.prompt([{ name: "itemName", type: "string", message: "Enter description or title to find in list" }]);
        if (itm.itemName == "")
            console.log("Enter valid value");
        else {
            let index = toDoList.indexOf(itm.itemName);
            if (index != -1) {
                console.log(`Item is exist at index ${index} in array ${toDoList[index]}`);
            }
            else
                console.log(`Item ${itm.itemName} is not exist in the array`);
        }
    }
    if (operation.option == "Update Item") {
        let itm = await inquirer.prompt([{ name: "itemName", type: "string", message: "Enter description or title to update in list" },
            { name: "newitemName", type: "string", message: "Enter description or title to replace with in list" }
        ]);
        if (itm.itemName == "" || itm.newitemName == "")
            console.log("Enter valid value");
        else {
            let index = toDoList.indexOf(itm.itemName);
            if (index != -1) {
                toDoList[index] = itm.newitemName;
                console.log(`Item is ${itm.itemName} at index ${index} in array replace with ${toDoList[index]}`);
            }
            else
                console.log(`Item ${itm.itemName} is not exist in the array`);
        }
    }
    if (operation.option == "Delete Item") {
        let itm = await inquirer.prompt([{ name: "itemName", type: "string", message: "Enter description or title to delete from list" }]);
        if (itm.itemName == "")
            console.log("Enter valid value");
        else {
            let index = toDoList.indexOf(itm.itemName);
            if (index != -1) {
                let removeitem = toDoList.splice(index, 1);
                console.log(`Item ${removeitem} is remove from the array `);
            }
            else
                console.log(`Item ${itm.itemName} is not exist in the array`);
        }
    }
    if (operation.option == "Show List") {
        for (let x in toDoList)
            console.log(` Value of list at Index ${(x)} is ${toDoList[x]}`);
    }
    console.log(toDoList);
    let isContinue = await inquirer.prompt([{ name: "addMore", type: "confirm", default: "false", message: "Do you want to continue ......." }]);
    repeat = isContinue.addMore;
}
