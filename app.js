// contract address on Kovan:
const rewardProgramAddress = '0x868450975AB185EE54F10fBe6Ea829a386dC9fa4'

// add contract ABI:
const rewardProgramABI =

   [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountRaceTicket",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountVinyardTour",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountRolex",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_nftID",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "redeemer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum RewardManager.Reward",
				"name": "reward",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "NewRedemption",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "enum RewardManager.Reward",
				"name": "_reward",
				"type": "uint8"
			}
		],
		"name": "redeemReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amountRaceTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amountRolex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amountVinyardTour",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addressToCheck",
				"type": "address"
			}
		],
		"name": "nftBalanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingRaceTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingRolex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingVinyardTour",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await ethereum.request({ method: 'eth_requestAccounts'});
	const displayAddress = document.getElementById('mm-connect');     
        displayAddress.innerHTML = ethereum.selectedAddress;
	      
	const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
        rewardProgramContract.setProvider(window.ethereum);
	      
	  var displayValue1 = document.getElementById('display-value1');
	  var reward1remaining = await rewardProgramContract.methods.remainingRaceTicket().call();
	  displayValue1.innerHTML = "Remaining: " + reward1remaining;

	  var displayValue2 = document.getElementById('display-value2');
	  var reward2remaining = await rewardProgramContract.methods.remainingVinyardTour().call();
	  displayValue2.innerHTML = "Remaining: " + reward2remaining;

	  var displayValue3 = document.getElementById('display-value3');
	  var reward3remaining = await rewardProgramContract.methods.remainingRolex().call();
	  displayValue3.innerHTML = "Remaining: " + reward3remaining;

	  var nftBalance = await rewardProgramContract.methods.nftBalanceOf(ethereum.selectedAddress).call();

	  if (nftBalance > 0) {
	  document.getElementById("founder-container-state1").style.display = "none";
	  document.getElementById("landing-page-container02-state2").style.display = "block";
	  }

	  else {
	  document.getElementById("founder-container-state1").style.display = "inherit";
	  document.getElementById("landing-page-container02-state2").style.display = "block";
	  }      
	      
      } else {
        console.log('window.ethereum is not found');   
      }
})

window.ethereum.on('accountsChanged', function () {
  window.location.reload();
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'});
  mmEnable.innerHTML = ethereum.selectedAddress;  
  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);	

  var displayValue1 = document.getElementById('display-value1');
  var reward1remaining = await rewardProgramContract.methods.remainingRaceTicket().call();
  displayValue1.innerHTML = "Remaining: " + reward1remaining;
  
  var displayValue2 = document.getElementById('display-value2');
  var reward2remaining = await rewardProgramContract.methods.remainingVinyardTour().call();
  displayValue2.innerHTML = "Remaining: " + reward2remaining;
  
  var displayValue3 = document.getElementById('display-value3');
  var reward3remaining = await rewardProgramContract.methods.remainingRolex().call();
  displayValue3.innerHTML = "Remaining: " + reward3remaining;
  
  var nftBalance = await rewardProgramContract.methods.nftBalanceOf(ethereum.selectedAddress).call();
  
  if (nftBalance > 0) {
  document.getElementById("founder-container-state1").style.display = "none";
  document.getElementById("landing-page-container02-state2").style.display = "block";
  }
  
  else {
  document.getElementById("founder-container-state1").style.display = "inherit";
  document.getElementById("landing-page-container02-state2").style.display = "block";
  }
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
