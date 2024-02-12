// Получает список
// Проверяет есть ли в списке ip адреса
const getBlackList = () => {
    try {
        const ipBlackList = process.env.IP_BLACK_LIST.split(',').map(item => item.trim()).filter(item => item != '')
        if (ipBlackList.length <= 0) {
            throw new Error('IP_BLACK_LIST is not set')
        }
        return ipBlackList
    } catch (error) {
        console.log('Сообщение об ошибке: ' + error);
    }
}

// Проверяет наличе ip в ipBlackList
function checkIpBlackList(ip) {

    return getBlackList().find(item => item === ip) != null
}

console.log(checkIpBlackList('172.128.5.2'))

