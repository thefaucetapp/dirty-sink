var CONTRACT_ADDRESS = '0x278C2C66f10d54b788b1F0a5ceEb7b7d227eF142';

var referrer = '0x513CDC7297659e71845F76E7119566A957767c8F'
var upline = '0x513CDC7297659e71845F76E7119566A957767c8F'


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var refurl = getUrlParameter('ref');

if(refurl){
    localStorage.setItem('ref', refurl);
}

upline = localStorage.getItem('ref') ?   localStorage.getItem('ref') : referrer;

var ABI = [{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"uint256","name":"_whitelistUNIX","type":"uint256"},{"internalType":"uint256","name":"_whitelistLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"GAS_PER_FAUCET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyGas","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateGasBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateGasBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"calculateGasSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"constructFaucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"councilFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"interventionType","type":"uint256"}],"name":"councilIntervention","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"faucet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getGasSinceLastConstruct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyFaucet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProgressiveMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interventionStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastConstruct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextInterventionUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellGas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"whitelistAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"whitelistRemove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];

var tokenContract;

var currentAddr;
var contract = null;
var gasPrice = '70000000000' //10000000000
var percent1,percent2,percent3,percent4,percent5,percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;

var affiliate = 0;


window.addEventListener('load', Connect)

async function Connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
            await ethereum.enable()

            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
			console.log(currentAddr)
			runAPP()
            return
        } catch (error) {
            console.error(error)
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)

        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        console.log(currentAddr)
        runAPP()
        return
    }
    //setTimeout(checkForBinanceChain, 1500)
}
async function checkForBinanceChain() {
    try {
        await window.BinanceChain.enable()
        console.log(typeof(window.BinanceChain))
        if (window.BinanceChain) {
            console.log('BinanceChain')
            await BinanceChain.enable()
            window.web3 = new Web3(window.BinanceChain)
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            
            console.log(contract)
            runAPP()
            return
        }
    } catch (e) {}
}  

async function runAPP(){
    let networkID = await web3.eth.net.getId()
    if (networkID == 137) { // 56 - BSC Live. 97 -- BSC Test
		contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
		console.log(contract)
    } 
}

    setInterval(() => {				
        if(contract){
			$("#refString").val('https://' + window.location.host  + '/?ref=' + currentAddr)
			
        } 
    }, 3000);
        
    setInterval(() => {
        if(contract){
            web3.eth.getAccounts().then(res=>{
                currentAddr = res[0]
            })
    
            var connectedAddr = currentAddr[0] + 
                                currentAddr[1] + 
                                currentAddr[2] + 
                                currentAddr[3] + 
                                currentAddr[4] + '...' +
                                currentAddr[currentAddr.length-5] + 
                                currentAddr[currentAddr.length-4] + 
                                currentAddr[currentAddr.length-3] + 
                                currentAddr[currentAddr.length-2] + 
                                currentAddr[currentAddr.length-1]

            $("#connect-btn1").text(connectedAddr)

            getContractBalance();
            web3.eth.getBalance(currentAddr).then(bal => {
                bal = web3.utils.fromWei(bal);
                bal = (Math.round(bal * 100) / 100).toFixed(2);
                $("#walletBalance").text(bal + " BNB")
            })
            getFishermen(currentAddr)
            getRewards(currentAddr)
		}
        
    }, 3000);



function approve() {
	tokenContract.methods.approve(CONTRACT_ADDRESS, web3.utils.toWei("1")).send({ from: currentAddr });
}

function stakeBNB() {
if (contract) {
	var amount = document.getElementById("app__inputbnb").value;
    amount = web3.utils.toWei(String(amount), 'ether')

	contract.methods.buyGas(upline/*, (trxspenddoc.value*1e9)*/)
		.send({
						value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function sellFarmers() {
if (contract) {
	contract.methods.sellGas()
		.send({
						// value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function compound() {
if (contract) {
	contract.methods.constructFaucet(upline)
		.send({
						// value: amount,
						from: currentAddr,
						gasPrice: gasPrice,
					})
			
	}
}

function getContractBalance() {
	contract.methods.getBalance().call().then(res=>{
        res = web3.utils.fromWei(res);
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#contractBalance").text("Total Matic in Faucet: " + res + " MATIC");
        console.log(res);
    })

}

function getFishermen(currentAddr) {
    contract.methods.getMyFaucet(currentAddr).call().then(res=>{
        res = (Math.round(res * 100) / 100).toFixed(2);
        $("#frmrs").text(res + " Farmers");
        console.log(res);
    })
}

function getRewards(currentAddr) {
    contract.methods.farmRewards(currentAddr).call().then(res=>{
        res = web3.utils.fromWei(res);
        res = (Math.abs(res * 100) / 100).toFixed(4);
        $("#yourRewards").text("Your Gas Funds: " + res + " MATIC");
        console.log(res);
    })
}


function calcuate(number)
{
	console.log(number);
	 if (number && number >= 0) 
		contract.methods.calculatePrinterBuySimple((number*1e7 ).toString()).call().then(res=>{
		console.log((res/1e7))	;
		})
																						   
}

function spendLimit(callback) {
	tokenContract.methods.allowance(currentAddr,contract).call().then(result => {
			callback(web3.utils.fromWei(result));
		}).catch((err) => {
			console.log(err)
		});
	}

function calculateprinter(anzahl) {
	tokenContract.methods.allowance(currentAddr,contract).call().then(result => {
			callback(web3.utils.fromWei(result));
		}).catch((err) => {
			console.log(err)
		});
	}

function userBalance(callback){
	tokenContract.methods.balanceOf(currentAddr).call().then(result => {
				var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
		callback(amt);
				usrBal=amt;
	}).catch((err) => {
		console.log(err)
	});
}
	

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    showAlert('Successfuly copied','success')
}

/*$.getJSON( "https://api.pancakeswap.info/api/v2/tokens/0xc8AE7ded8b33ea0Da0d7c7FC6FEd35e3C1822be0", function( data ) {
   $("#tpg-price").text((data["data"]["price"]*100).toFixed(3));
	console.log(data["data"]["price"]);
});*/

