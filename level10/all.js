//91

function frequencyObject(arr) {
    let obj = {}

    for (let char of arr) {
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }

    }
    console.log(obj);
}

//92

function maxfrequency(arr) {
    let obj = {}

    for (let char of arr) {
        if (obj[char] == undefined) {
            obj[char] = 1;
        }
        else {
            obj[char]++;
        }

    }

    let max;
    let maxfrequency = 0;
    for (let char in obj) {
        if (obj[char] > maxfrequency) {

            max = char;
            maxfrequency = obj[char];
        }
    }
    console.log(max);


}

//93

function charFrequency(str) {
    const freq = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }
    }
    console.log(freq)
}

//94

function highestmarks(arry) {
    let maxmarks = 0;
    let name = "";
    for (let obj of arry) {
        if (obj.marks > maxmarks) {
            maxmarks = obj.marks;
            name = obj.name;
        }
    }
    console.log(name);
}



//95

function price(obj) {
    let total = 0;
    for (let value in obj) {
        total += obj[value];
    }
    console.log(total);
}

//96

function averagemarks(obj) {
    let count = 0;
    let total = 0;
    for (let value in obj) {

        total += obj[value];
        count++;
    }
    console.log(`average is ${total / count}`)

}

//97

function keys(obj) {
    for (let char in obj) {
        console.log(char);
    }
}

//98

function objects(obj) {
    for (let char in obj) {
        console.log(obj[char]);
    }
}

//99

function key_value(obj) {
    let count = 0;
    for (let char in obj) {
        count++;
    }
    console.log(count);
}

//100

function filter(arr) {
    for (let obj of arr) {
        if (obj.age > 18) {
            console.log(obj);
        }

    }
}
filter([{ name: "A", age: 17 }, { name: "B", age: 20 }, { name: "C", age: 18 }])