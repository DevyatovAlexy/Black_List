const ipBlackList = process.env.IP_BLACK_LIST.split(',')

function checkIpBlackList(ip) {
    for (let i = 0; i < ipBlackList.length; i++) {
        if (ipBlackList[i] === ip) {
            return ipBlackList[i]
        }
    }
}

console.log(checkIpBlackList('172.128.5.2'))
