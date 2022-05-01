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
