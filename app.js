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

// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      // add in web3 here
      var web3 = new Web3(window.ethereum)
    } else {
      console.log('MetaMask is not available')
    }
    } else {
      console.log('window.ethereum is not found')
    }
  })

var web3 = new Web3(window.ethereum)
// Grabbing the button object,
const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  mmEnable.innerHTML = ethereum.selectedAddress

  var web3 = new Web3(window.ethereum);
  const rewardProgramContract = new web3.eth.Contract(rewardProgramABI, rewardProgramAddress);
  rewardProgramContract.setProvider(window.ethereum);
}
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////