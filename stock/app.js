const yargs = require('yargs');
const request = require('request')

const token = 'ecR63Aj1frQUH2zjy3FhZ4epGNVLl3a9bQYMR8bIuL0INDTkOFgzMsAtW5k8';
const url = 'https://www.worldtradingdata.com/api/v1/';

yargs.command({
    command: 'cotacao',
    describe: 'get cotacao',
    builder:{
        ativo:{
            describe: 'cotacao name',
            demandOption:true,
            type:'string'
        }
    },
    handler:(args)=>{
        console.log('geting cotacao')
        return new Promise((res)=>{
            const ativo = args.ativo;
            console.log('caling the api')
            request(`${url}stock?symbol=${ativo}&api_token=${token}`,{json:true},(error,response)=>{
                if(error){
                    console.log('ops.. it seems an error has ocurred') 
                    return  
                }

                const {price_open,price} = response.body.data[0];
                const data = {price_open,price}
                console.log(data)
                res()
            })
        })
        console.log('sended promise')
    }
})

yargs.parse();