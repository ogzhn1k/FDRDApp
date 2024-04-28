var SmartContractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "airline",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "flightNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "altitude",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "speed",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "FlightDataRecorded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_flightNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_altitude",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_speed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "recordFlightData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "flightDataRecords",
		"outputs": [
			{
				"internalType": "address",
				"name": "airline",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "flightNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "altitude",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "speed",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "recordCount",
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
];

var SmartContractAddress = "0x3A7a623f34029fDbb08fdBf79ff0a563Cd06dd59";