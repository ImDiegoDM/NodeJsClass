const request = require('request');

const token = 'ecR63Aj1frQUH2zjy3FhZ4epGNVLl3a9bQYMR8bIuL0INDTkOFgzMsAtW5k8';
const url = 'https://www.worldtradingdata.com/api/v1/';

function routing(app){
    app.get('/',(req,res)=>{
        res.render('index',{
            title:'Home'
        });
    });
    app.get('/sobre',(req,res)=>{
        res.render('sobre')
    })
    app.get('/help',(req,res)=>{
        res.render('help')
    })
    app.get('/cotacoes/:symbol',(req,res)=>{

        const api = `${url}stock?symbol=${req.params.symbol}&api_token=${token}`;

        request(api,{json:true},(err,response)=>{
            if(response.statusCode === 200 && response.body.data !== undefined){
                res.render('cotacao',{
                    symbol:response.body.data[0].symbol,
                    content:JSON.stringify(response.body.data[0],null,4)
                });
                return
            }

            res.render('notFound')
        })
    })
}

module.exports = routing;