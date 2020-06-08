let seculo = (ano) => {
    let sec = [`I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`, `IX`, `X`, `XI`, `XII`, `XIII`, `XIV`, `XV`, `XVI`, `XVII`, `XVIII`, `XIX`, `XX`, `XXI`]
    let anos = [1, 101, 201, 301, 401, , 501, , 601, 701, 801, 901, 1001, 1101, 1201, ,1301, 1401, 1501, 1601, , 1701, 1801, 1901, 2001, 2101]

    for(let num = 0 ; num < 21; num++){
        if(ano>=anos[num] && ano<anos[num+1])
        return `O ano ${ano} pertence ao século ${seculos[num]}`
    }
}
console.log(seculo(1));

