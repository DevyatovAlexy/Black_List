
const localIP ='172.128.5.2';
const ipBlackLsit = process.env.IP_BLACK_LIST
.split(',');
function getIpBlackList (local){
    let num = 0;
    while (num < ipBlackLsit.length){
        if (local[num] === localIP){
            console.log(local[num] + ' в черном списке')
            break;
        }
        num++;
    }
}
getIpBlackList(ipBlackLsit)