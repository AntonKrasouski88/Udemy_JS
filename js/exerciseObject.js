'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month',
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// ferst exercise;
// ferst way;
/* function showProgrammingLangs(plan) {
    let copy = {};
    for (let key in plan) {
        copy[key] = plan[key];
    }
    return console.log(copy);
}   

showProgrammingLangs(personalPlanPeter); */

//second way;
/* function showExperience(object) {
    let copySecond = Object.assign({}, object);
    console.log(`${copySecond.skills.exp}`);
    return `${copySecond.skills.exp}`;
}   

showExperience(personalPlanPeter); */


//third way;
/* function showProgrammingLangs (plan) {
    let copyThird = {...plan};
    let arrLang = Object.keys(copyThird.skills.programmingLangs);
    let valuesLang =Object.values(copyThird.skills.programmingLangs);
    let ruselt = "";
    for (let i = 0; i < arrLang.length; i++){
            if (typeof arrLang[i] === 'undefined') {
                ruselt = " ";
                return ruselt;
            } else {
                ruselt += `Язык ${arrLang[i]} изучен на ${valuesLang[i]} `;
            }
        }
    return console.log(ruselt);
}

showProgrammingLangs(personalPlanPeter); */

/* for (let key in copyThird) {
    if ((typeof(copyThird[key])) === 'object') {
        for (let i in copyThird[key]) {
            if(typeof(copyThird[key][i]) === 'object' && typeof(copyThird[key][i])) {
                for (let j in copyThird[key][i]) {
                    console.log(`${copyThird[key][i][j]}`);
                }
            }
        }
    }
} */
function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
let result = strokes - par; 
if (strokes == 1) {
  return names[0];
} else if (result <= -2) {
  return names[1];
} else if (result  == -1) {
  return names[2];
} else if (result == 0) {
  return names[3];
} else if (result == 1) {
  return names[4];
} else if (result == 2) {
  return names[5];
} else if (result >= 3) {
  return names[6];
} 

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

let count = 0;

function cc(card) {
  // Only change code below this line
if (card >= 2 && card <= 6) {
  return count += 1;
} else if (card >= 7 && card <= 9) {
  return count += 0;
} else if (card >= 10 || card.typeof === "string") {
  return count -= 1;
}

if (count > 0) {
  return console.log(`${count} Hold`);
} else if (count <= 0) {
  return `${count} + "Hold"`;
}


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');