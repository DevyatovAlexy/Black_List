const getBlackList = () => {
    const ipBlackList = process.env.IP_BLACK_LIST.split(',').map(item => item.trim()).filter(item => item != '')
    try {
        if (ipBlackList.length < 0) {
            throw new Error('IP_BLACK_LIST is not set')
        }
        return ipBlackList

    } catch (error) {
        console.log('Сообщение об ошибке: ' + error);

    }
}

function checkIpBlackList(ip) {
    let getIpBlackList = getBlackList()
    for (let i = 0; i < getIpBlackList.length; i++) {
        if (getIpBlackList[i] === ip) {
            return false

        }

    }
}

console.log(checkIpBlackList('172.128.5.2'))
