// dapp上线排行

const http=require("http");

const ssl = require('ssl')
ssl.loadRootCerts();

let ranK_dapp=function(){
    
	var post=http.post('https://dapp.fo/1.0/app/', {
    	// "json":{},
        "headers": {
            'Content-Type': 'application/graphql',
            'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
        },
        body:`{
        find_dapp(
            skip: 0,
            limit: 24,
            order: "-createdAt"
        ){
            id
            name
            description
            url
            descurl
            img
            token
            name_en
            description_en
            tags{
                id
                tag{
                    id
                    name
                }
            }
            orgs{
                id
                org{
                    id
                    name
                    url
                }
            }
        }
    }`
        
    }).data;

    data=JSON.parse(post).data.find_dapp;

	return data;
}

console.log(ranK_dapp());

