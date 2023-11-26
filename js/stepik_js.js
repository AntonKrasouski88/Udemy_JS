let input = prompt('Введиите ваше имя:')
console.log(input)


function findLetter (str) {
	let result;
    let vowels = 0;
    let consonants = 0;
    let litter = 'б,в,г,д,ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ';
    let litter_g = 'а,у,о,ы,э,я,ю,ё,и,е';
    str = str.toLowerCase();
    console.log('Hello World');
    for (let i = 0; i < str.length; i++) {
        if(litter.includes(str[i])) {
            consonants += 1;
        }
        if(litter_g.includes(str[i])) {
            vowels += 1;
            console.log(litter_g[i]);
        }
    }
    result = `согласных: ${consonants}, гласных: ${vowels}`;

    return result;
}

console.log(findLetter('Планета'));


console.log('Hel')