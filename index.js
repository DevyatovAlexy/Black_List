const ipBlackList = process.env.IP_BLACK_LIST.split(',').map(item => item.trim()).filter(removingEmptyLine => removingEmptyLine != '')
// removingEmptyLine - удоляет пустую строку
const checkIpBlackList = (ip) => {

    for (let i = 0; i < ipBlackList.length; i++) {
        if (ipBlackList[i] === ip) {
            return false

        }

    }
}

console.log(checkIpBlackList('172.128.5.2'))

try {
    if (ipBlackList.length <= 0) {
        throw new Error('IP_BLACK_LIST is not set')
    }
} catch (error) {

    console.log('Сообщение об ошибке: ' + error);
}
