import data from "./json-schema.json" assert { type: "json" };

const newData = {};
let requiredFileds = [];

function convertData(data) {
    requiredFileds = data.required ? [...requiredFileds, ...data.required] : requiredFileds;

    Object.entries(data).map(([key, val]) => {
        if (typeof val === "object") {
            if (requiredFileds.includes(key)) {
                newData[key] = val.description;
            }
            
            return convertData(val);
        }
    })

    return newData;
}

console.log(convertData(data));