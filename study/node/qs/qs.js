const Qs = require('querystring');
let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
Qs.parse(url);
console.log(Qs.parse(url));
let paramsObj = {
    method: 'query_sql_dataset_data',
    projectId: '85',
    appToken: '7d22e38e-5717-11e7-907b-a6006ad3dba0'
}
console.log("http://www.baidu.com?"+Qs.stringify(paramsObj,","));
