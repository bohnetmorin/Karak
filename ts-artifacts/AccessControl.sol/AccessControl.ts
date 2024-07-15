export const AccessControl = {
  "abi": [
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "callerConfirmation",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "previousAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "newAdminRole",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "name": "role",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AccessControlBadConfirmation",
      "inputs": []
    },
    {
      "type": "error",
      "name": "AccessControlUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "neededRole",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "DEFAULT_ADMIN_ROLE()": "a217fddf",
    "getRoleAdmin(bytes32)": "248a9ca3",
    "grantRole(bytes32,address)": "2f2ff15d",
    "hasRole(bytes32,address)": "91d14854",
    "renounceRole(bytes32,address)": "36568abe",
    "revokeRole(bytes32,address)": "d547741f",
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AccessControlBadConfirmation\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"neededRole\",\"type\":\"bytes32\"}],\"name\":\"AccessControlUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"callerConfirmation\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module that allows children to implement role-based access control mechanisms. This is a lightweight version that doesn't allow enumerating role members except through off-chain means by accessing the contract event logs. Some applications may benefit from on-chain enumerability, for those cases see {AccessControlEnumerable}. Roles are referred to by their `bytes32` identifier. These should be exposed in the external API and be unique. The best way to achieve this is by using `public constant` hash digests: ```solidity bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\"); ``` Roles can be used to represent a set of permissions. To restrict access to a function call, use {hasRole}: ```solidity function foo() public {     require(hasRole(MY_ROLE, msg.sender));     ... } ``` Roles can be granted and revoked dynamically via the {grantRole} and {revokeRole} functions. Each role has an associated admin role, and only accounts that have a role's admin role can call {grantRole} and {revokeRole}. By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means that only accounts with this role will be able to grant or revoke other roles. More complex role relationships can be created by using {_setRoleAdmin}. WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to grant and revoke this role. Extra precautions should be taken to secure accounts that have been granted it. We recommend using {AccessControlDefaultAdminRules} to enforce additional security measures for this role.\",\"errors\":{\"AccessControlBadConfirmation()\":[{\"details\":\"The caller of a function is not the expected one. NOTE: Don't confuse with {AccessControlUnauthorizedAccount}.\"}],\"AccessControlUnauthorizedAccount(address,bytes32)\":[{\"details\":\"The `account` is missing a role.\"}]},\"events\":{\"RoleAdminChanged(bytes32,bytes32,bytes32)\":{\"details\":\"Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole` `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite {RoleAdminChanged} not being emitted signaling this.\"},\"RoleGranted(bytes32,address,address)\":{\"details\":\"Emitted when `account` is granted `role`. `sender` is the account that originated the contract call, an admin role bearer except when using {AccessControl-_setupRole}.\"},\"RoleRevoked(bytes32,address,address)\":{\"details\":\"Emitted when `account` is revoked `role`. `sender` is the account that originated the contract call:   - if using `revokeRole`, it is the admin role bearer   - if using `renounceRole`, it is the role bearer (i.e. `account`)\"}},\"kind\":\"dev\",\"methods\":{\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/access/AccessControl.sol\":\"AccessControl\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80\",\"dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z\"]},\"node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26\",\"dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8\",\"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "AccessControlBadConfirmation"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "AccessControlUnauthorizedAccount"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleAdminChanged",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleGranted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RoleRevoked",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "grantRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokeRole"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getRoleAdmin(bytes32)": {
            "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
          },
          "grantRole(bytes32,address)": {
            "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
          },
          "hasRole(bytes32,address)": {
            "details": "Returns `true` if `account` has been granted `role`."
          },
          "renounceRole(bytes32,address)": {
            "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `callerConfirmation`. May emit a {RoleRevoked} event."
          },
          "revokeRole(bytes32,address)": {
            "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/",
        "@openzeppelin/=node_modules/@openzeppelin/",
        "forge-std/=lib/forge-std/src/",
        "solady/=node_modules/solady/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 20000
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "node_modules/@openzeppelin/contracts/access/AccessControl.sol": "AccessControl"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/access/AccessControl.sol": {
        "keccak256": "0xa0e92d42942f4f57c5be50568dac11e9d00c93efcb458026e18d2d9b9b2e7308",
        "urls": [
          "bzz-raw://46326c0bb1e296b67185e81c918e0b40501b8b6386165855df0a3f3c634b6a80",
          "dweb:/ipfs/QmTwyrDYtsxsk6pymJTK94PnEpzsmkpUxFuzEiakDopy4Z"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/access/IAccessControl.sol": {
        "keccak256": "0xb6b36edd6a2999fd243ff226d6cbf84bd71af2432bbd0dfe19392996a1d9cb41",
        "urls": [
          "bzz-raw://1fd2f35495652e57e3f99bc6c510bc5f7dd398a176ea2e72d8ed730aebc6ca26",
          "dweb:/ipfs/QmTQV6X4gkikTib49cho5iDX3JvSQbdsoEChoDwrk3CbbH"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
        "urls": [
          "bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
          "dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
        "urls": [
          "bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
          "dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/access/AccessControl.sol",
    "id": 47740,
    "exportedSymbols": {
      "AccessControl": [
        47739
      ],
      "Context": [
        51334
      ],
      "ERC165": [
        52758
      ],
      "IAccessControl": [
        47822
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:6942:28",
    "nodes": [
      {
        "id": 47445,
        "nodeType": "PragmaDirective",
        "src": "108:24:28",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 47447,
        "nodeType": "ImportDirective",
        "src": "134:52:28",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/access/IAccessControl.sol",
        "file": "./IAccessControl.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47740,
        "sourceUnit": 47823,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47446,
              "name": "IAccessControl",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 47822,
              "src": "142:14:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47449,
        "nodeType": "ImportDirective",
        "src": "187:45:28",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47740,
        "sourceUnit": 51335,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47448,
              "name": "Context",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 51334,
              "src": "195:7:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47451,
        "nodeType": "ImportDirective",
        "src": "233:57:28",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol",
        "file": "../utils/introspection/ERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 47740,
        "sourceUnit": 52759,
        "symbolAliases": [
          {
            "foreign": {
              "id": 47450,
              "name": "ERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 52758,
              "src": "241:6:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 47739,
        "nodeType": "ContractDefinition",
        "src": "1953:5096:28",
        "nodes": [
          {
            "id": 47465,
            "nodeType": "StructDefinition",
            "src": "2026:100:28",
            "nodes": [],
            "canonicalName": "AccessControl.RoleData",
            "members": [
              {
                "constant": false,
                "id": 47462,
                "mutability": "mutable",
                "name": "hasRole",
                "nameLocation": "2085:7:28",
                "nodeType": "VariableDeclaration",
                "scope": 47465,
                "src": "2052:40:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 47461,
                  "keyName": "account",
                  "keyNameLocation": "2068:7:28",
                  "keyType": {
                    "id": 47459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2060:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "2052:32:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueName": "",
                  "valueNameLocation": "-1:-1:-1",
                  "valueType": {
                    "id": 47460,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2079:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 47464,
                "mutability": "mutable",
                "name": "adminRole",
                "nameLocation": "2110:9:28",
                "nodeType": "VariableDeclaration",
                "scope": 47465,
                "src": "2102:17:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 47463,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2102:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "RoleData",
            "nameLocation": "2033:8:28",
            "scope": 47739,
            "visibility": "public"
          },
          {
            "id": 47470,
            "nodeType": "VariableDeclaration",
            "src": "2132:48:28",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_roles",
            "nameLocation": "2174:6:28",
            "scope": 47739,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
              "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
            },
            "typeName": {
              "id": 47469,
              "keyName": "role",
              "keyNameLocation": "2148:4:28",
              "keyType": {
                "id": 47466,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "2140:7:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "2132:33:28",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                "typeString": "mapping(bytes32 => struct AccessControl.RoleData)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 47468,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 47467,
                  "name": "RoleData",
                  "nameLocations": [
                    "2156:8:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47465,
                  "src": "2156:8:28"
                },
                "referencedDeclaration": 47465,
                "src": "2156:8:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_RoleData_$47465_storage_ptr",
                  "typeString": "struct AccessControl.RoleData"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 47473,
            "nodeType": "VariableDeclaration",
            "src": "2187:49:28",
            "nodes": [],
            "constant": true,
            "functionSelector": "a217fddf",
            "mutability": "constant",
            "name": "DEFAULT_ADMIN_ROLE",
            "nameLocation": "2211:18:28",
            "scope": 47739,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 47471,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2187:7:28",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "30783030",
              "id": 47472,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2232:4:28",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0x00"
            },
            "visibility": "public"
          },
          {
            "id": 47484,
            "nodeType": "ModifierDefinition",
            "src": "2422:76:28",
            "nodes": [],
            "body": {
              "id": 47483,
              "nodeType": "Block",
              "src": "2454:44:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47479,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47476,
                        "src": "2475:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47478,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        47537,
                        47558
                      ],
                      "referencedDeclaration": 47537,
                      "src": "2464:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) view"
                      }
                    },
                    "id": 47480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2464:16:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47481,
                  "nodeType": "ExpressionStatement",
                  "src": "2464:16:28"
                },
                {
                  "id": 47482,
                  "nodeType": "PlaceholderStatement",
                  "src": "2490:1:28"
                }
              ]
            },
            "documentation": {
              "id": 47474,
              "nodeType": "StructuredDocumentation",
              "src": "2243:174:28",
              "text": " @dev Modifier that checks that an account has a specific role. Reverts\n with an {AccessControlUnauthorizedAccount} error including the required role."
            },
            "name": "onlyRole",
            "nameLocation": "2431:8:28",
            "parameters": {
              "id": 47477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47476,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2448:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47484,
                  "src": "2440:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47475,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2440:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2439:14:28"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 47506,
            "nodeType": "FunctionDefinition",
            "src": "2565:202:28",
            "nodes": [],
            "body": {
              "id": 47505,
              "nodeType": "Block",
              "src": "2656:111:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 47503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "id": 47498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 47493,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47487,
                        "src": "2673:11:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 47495,
                              "name": "IAccessControl",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47822,
                              "src": "2693:14:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$47822_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_type$_t_contract$_IAccessControl_$47822_$",
                                "typeString": "type(contract IAccessControl)"
                              }
                            ],
                            "id": 47494,
                            "name": "type",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -27,
                            "src": "2688:4:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 47496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2688:20:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_meta_type_t_contract$_IAccessControl_$47822",
                            "typeString": "type(contract IAccessControl)"
                          }
                        },
                        "id": 47497,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "2709:11:28",
                        "memberName": "interfaceId",
                        "nodeType": "MemberAccess",
                        "src": "2688:32:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "src": "2673:47:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "arguments": [
                        {
                          "id": 47501,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47487,
                          "src": "2748:11:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 47499,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -25,
                          "src": "2724:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_AccessControl_$47739_$",
                            "typeString": "type(contract super AccessControl)"
                          }
                        },
                        "id": 47500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2730:17:28",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 52757,
                        "src": "2724:23:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 47502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2724:36:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2673:87:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47492,
                  "id": 47504,
                  "nodeType": "Return",
                  "src": "2666:94:28"
                }
              ]
            },
            "baseFunctions": [
              52757
            ],
            "documentation": {
              "id": 47485,
              "nodeType": "StructuredDocumentation",
              "src": "2504:56:28",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "2574:17:28",
            "overrides": {
              "id": 47489,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2632:8:28"
            },
            "parameters": {
              "id": 47488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47487,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "2599:11:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47506,
                  "src": "2592:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 47486,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2592:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2591:20:28"
            },
            "returnParameters": {
              "id": 47492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47491,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47506,
                  "src": "2650:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2650:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2649:6:28"
            },
            "scope": 47739,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47524,
            "nodeType": "FunctionDefinition",
            "src": "2854:136:28",
            "nodes": [],
            "body": {
              "id": 47523,
              "nodeType": "Block",
              "src": "2937:53:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 47516,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47470,
                          "src": "2954:6:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 47518,
                        "indexExpression": {
                          "id": 47517,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47509,
                          "src": "2961:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2954:12:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$47465_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 47519,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2967:7:28",
                      "memberName": "hasRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47462,
                      "src": "2954:20:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 47521,
                    "indexExpression": {
                      "id": 47520,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47511,
                      "src": "2975:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2954:29:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 47515,
                  "id": 47522,
                  "nodeType": "Return",
                  "src": "2947:36:28"
                }
              ]
            },
            "baseFunctions": [
              47789
            ],
            "documentation": {
              "id": 47507,
              "nodeType": "StructuredDocumentation",
              "src": "2773:76:28",
              "text": " @dev Returns `true` if `account` has been granted `role`."
            },
            "functionSelector": "91d14854",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "hasRole",
            "nameLocation": "2863:7:28",
            "parameters": {
              "id": 47512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47509,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "2879:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47524,
                  "src": "2871:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47508,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2871:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47511,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "2893:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47524,
                  "src": "2885:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47510,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2885:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2870:31:28"
            },
            "returnParameters": {
              "id": 47515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47514,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47524,
                  "src": "2931:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47513,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2931:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2930:6:28"
            },
            "scope": 47739,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47537,
            "nodeType": "FunctionDefinition",
            "src": "3199:103:28",
            "nodes": [],
            "body": {
              "id": 47536,
              "nodeType": "Block",
              "src": "3255:47:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47531,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47527,
                        "src": "3276:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 47532,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 51316,
                          "src": "3282:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 47533,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3282:12:28",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47530,
                      "name": "_checkRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        47537,
                        47558
                      ],
                      "referencedDeclaration": 47558,
                      "src": "3265:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) view"
                      }
                    },
                    "id": 47534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3265:30:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47535,
                  "nodeType": "ExpressionStatement",
                  "src": "3265:30:28"
                }
              ]
            },
            "documentation": {
              "id": 47525,
              "nodeType": "StructuredDocumentation",
              "src": "2996:198:28",
              "text": " @dev Reverts with an {AccessControlUnauthorizedAccount} error if `_msgSender()`\n is missing `role`. Overriding this function changes the behavior of the {onlyRole} modifier."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3208:10:28",
            "parameters": {
              "id": 47528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47527,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3227:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47537,
                  "src": "3219:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47526,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3219:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3218:14:28"
            },
            "returnParameters": {
              "id": 47529,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3255:0:28"
            },
            "scope": 47739,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47558,
            "nodeType": "FunctionDefinition",
            "src": "3432:197:28",
            "nodes": [],
            "body": {
              "id": 47557,
              "nodeType": "Block",
              "src": "3505:124:28",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 47549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3519:23:28",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 47546,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47540,
                          "src": "3528:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 47547,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47542,
                          "src": "3534:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 47545,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47524,
                        "src": "3520:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 47548,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3520:22:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47556,
                  "nodeType": "IfStatement",
                  "src": "3515:108:28",
                  "trueBody": {
                    "id": 47555,
                    "nodeType": "Block",
                    "src": "3544:79:28",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 47551,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47542,
                              "src": "3598:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 47552,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47540,
                              "src": "3607:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 47550,
                            "name": "AccessControlUnauthorizedAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47749,
                            "src": "3565:32:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$_t_bytes32_$returns$__$",
                              "typeString": "function (address,bytes32) pure"
                            }
                          },
                          "id": 47553,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3565:47:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47554,
                        "nodeType": "RevertStatement",
                        "src": "3558:54:28"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47538,
              "nodeType": "StructuredDocumentation",
              "src": "3308:119:28",
              "text": " @dev Reverts with an {AccessControlUnauthorizedAccount} error if `account`\n is missing `role`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkRole",
            "nameLocation": "3441:10:28",
            "parameters": {
              "id": 47543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47540,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3460:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47558,
                  "src": "3452:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47539,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3452:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47542,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3474:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47558,
                  "src": "3466:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47541,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3466:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3451:31:28"
            },
            "returnParameters": {
              "id": 47544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3505:0:28"
            },
            "scope": 47739,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47572,
            "nodeType": "FunctionDefinition",
            "src": "3810:120:28",
            "nodes": [],
            "body": {
              "id": 47571,
              "nodeType": "Block",
              "src": "3884:46:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 47566,
                        "name": "_roles",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47470,
                        "src": "3901:6:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                          "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                        }
                      },
                      "id": 47568,
                      "indexExpression": {
                        "id": 47567,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47561,
                        "src": "3908:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3901:12:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_RoleData_$47465_storage",
                        "typeString": "struct AccessControl.RoleData storage ref"
                      }
                    },
                    "id": 47569,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3914:9:28",
                    "memberName": "adminRole",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 47464,
                    "src": "3901:22:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 47565,
                  "id": 47570,
                  "nodeType": "Return",
                  "src": "3894:29:28"
                }
              ]
            },
            "baseFunctions": [
              47797
            ],
            "documentation": {
              "id": 47559,
              "nodeType": "StructuredDocumentation",
              "src": "3635:170:28",
              "text": " @dev Returns the admin role that controls `role`. See {grantRole} and\n {revokeRole}.\n To change a role's admin, use {_setRoleAdmin}."
            },
            "functionSelector": "248a9ca3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRoleAdmin",
            "nameLocation": "3819:12:28",
            "parameters": {
              "id": 47562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47561,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "3840:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47572,
                  "src": "3832:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47560,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3832:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3831:14:28"
            },
            "returnParameters": {
              "id": 47565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47564,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47572,
                  "src": "3875:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47563,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3875:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3874:9:28"
            },
            "scope": 47739,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47591,
            "nodeType": "FunctionDefinition",
            "src": "4226:136:28",
            "nodes": [],
            "body": {
              "id": 47590,
              "nodeType": "Block",
              "src": "4320:42:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47586,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47575,
                        "src": "4341:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47587,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47577,
                        "src": "4347:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47585,
                      "name": "_grantRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47700,
                      "src": "4330:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) returns (bool)"
                      }
                    },
                    "id": 47588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4330:25:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47589,
                  "nodeType": "ExpressionStatement",
                  "src": "4330:25:28"
                }
              ]
            },
            "baseFunctions": [
              47805
            ],
            "documentation": {
              "id": 47573,
              "nodeType": "StructuredDocumentation",
              "src": "3936:285:28",
              "text": " @dev Grants `role` to `account`.\n If `account` had not been already granted `role`, emits a {RoleGranted}\n event.\n Requirements:\n - the caller must have ``role``'s admin role.\n May emit a {RoleGranted} event."
            },
            "functionSelector": "2f2ff15d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 47581,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47575,
                        "src": "4313:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47580,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47572,
                      "src": "4300:12:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 47582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4300:18:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 47583,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47579,
                  "name": "onlyRole",
                  "nameLocations": [
                    "4291:8:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47484,
                  "src": "4291:8:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "4291:28:28"
              }
            ],
            "name": "grantRole",
            "nameLocation": "4235:9:28",
            "parameters": {
              "id": 47578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47575,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4253:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47591,
                  "src": "4245:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47574,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4245:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47577,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4267:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47591,
                  "src": "4259:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47576,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4259:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4244:31:28"
            },
            "returnParameters": {
              "id": 47584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4320:0:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47610,
            "nodeType": "FunctionDefinition",
            "src": "4642:138:28",
            "nodes": [],
            "body": {
              "id": 47609,
              "nodeType": "Block",
              "src": "4737:43:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47605,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47594,
                        "src": "4759:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47606,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47596,
                        "src": "4765:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47604,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47738,
                      "src": "4747:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) returns (bool)"
                      }
                    },
                    "id": 47607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4747:26:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47608,
                  "nodeType": "ExpressionStatement",
                  "src": "4747:26:28"
                }
              ]
            },
            "baseFunctions": [
              47813
            ],
            "documentation": {
              "id": 47592,
              "nodeType": "StructuredDocumentation",
              "src": "4368:269:28",
              "text": " @dev Revokes `role` from `account`.\n If `account` had been granted `role`, emits a {RoleRevoked} event.\n Requirements:\n - the caller must have ``role``'s admin role.\n May emit a {RoleRevoked} event."
            },
            "functionSelector": "d547741f",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "id": 47600,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47594,
                        "src": "4730:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47599,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47572,
                      "src": "4717:12:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 47601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4717:18:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 47602,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 47598,
                  "name": "onlyRole",
                  "nameLocations": [
                    "4708:8:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 47484,
                  "src": "4708:8:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "4708:28:28"
              }
            ],
            "name": "revokeRole",
            "nameLocation": "4651:10:28",
            "parameters": {
              "id": 47597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47594,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "4670:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47610,
                  "src": "4662:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47593,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4662:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47596,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "4684:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47610,
                  "src": "4676:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47595,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4676:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4661:31:28"
            },
            "returnParameters": {
              "id": 47603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4737:0:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47633,
            "nodeType": "FunctionDefinition",
            "src": "5328:245:28",
            "nodes": [],
            "body": {
              "id": 47632,
              "nodeType": "Block",
              "src": "5407:166:28",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 47621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 47618,
                      "name": "callerConfirmation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47615,
                      "src": "5421:18:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 47619,
                        "name": "_msgSender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51316,
                        "src": "5443:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                          "typeString": "function () view returns (address)"
                        }
                      },
                      "id": 47620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5443:12:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5421:34:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47626,
                  "nodeType": "IfStatement",
                  "src": "5417:102:28",
                  "trueBody": {
                    "id": 47625,
                    "nodeType": "Block",
                    "src": "5457:62:28",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 47622,
                            "name": "AccessControlBadConfirmation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47752,
                            "src": "5478:28:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 47623,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5478:30:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47624,
                        "nodeType": "RevertStatement",
                        "src": "5471:37:28"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 47628,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47613,
                        "src": "5541:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47629,
                        "name": "callerConfirmation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47615,
                        "src": "5547:18:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47627,
                      "name": "_revokeRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47738,
                      "src": "5529:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) returns (bool)"
                      }
                    },
                    "id": 47630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5529:37:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 47631,
                  "nodeType": "ExpressionStatement",
                  "src": "5529:37:28"
                }
              ]
            },
            "baseFunctions": [
              47821
            ],
            "documentation": {
              "id": 47611,
              "nodeType": "StructuredDocumentation",
              "src": "4786:537:28",
              "text": " @dev Revokes `role` from the calling account.\n Roles are often managed via {grantRole} and {revokeRole}: this function's\n purpose is to provide a mechanism for accounts to lose their privileges\n if they are compromised (such as when a trusted device is misplaced).\n If the calling account had been revoked `role`, emits a {RoleRevoked}\n event.\n Requirements:\n - the caller must be `callerConfirmation`.\n May emit a {RoleRevoked} event."
            },
            "functionSelector": "36568abe",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "renounceRole",
            "nameLocation": "5337:12:28",
            "parameters": {
              "id": 47616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47613,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "5358:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47633,
                  "src": "5350:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47612,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5350:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47615,
                  "mutability": "mutable",
                  "name": "callerConfirmation",
                  "nameLocation": "5372:18:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47633,
                  "src": "5364:26:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5364:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5349:42:28"
            },
            "returnParameters": {
              "id": 47617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5407:0:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 47661,
            "nodeType": "FunctionDefinition",
            "src": "5698:247:28",
            "nodes": [],
            "body": {
              "id": 47660,
              "nodeType": "Block",
              "src": "5771:174:28",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    47642
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 47642,
                      "mutability": "mutable",
                      "name": "previousAdminRole",
                      "nameLocation": "5789:17:28",
                      "nodeType": "VariableDeclaration",
                      "scope": 47660,
                      "src": "5781:25:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 47641,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5781:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47646,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 47644,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47636,
                        "src": "5822:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47643,
                      "name": "getRoleAdmin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47572,
                      "src": "5809:12:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 47645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5809:18:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5781:46:28"
                },
                {
                  "expression": {
                    "id": 47652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 47647,
                          "name": "_roles",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47470,
                          "src": "5837:6:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                            "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                          }
                        },
                        "id": 47649,
                        "indexExpression": {
                          "id": 47648,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47636,
                          "src": "5844:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5837:12:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RoleData_$47465_storage",
                          "typeString": "struct AccessControl.RoleData storage ref"
                        }
                      },
                      "id": 47650,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5850:9:28",
                      "memberName": "adminRole",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 47464,
                      "src": "5837:22:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 47651,
                      "name": "adminRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47638,
                      "src": "5862:9:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5837:34:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 47653,
                  "nodeType": "ExpressionStatement",
                  "src": "5837:34:28"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 47655,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47636,
                        "src": "5903:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47656,
                        "name": "previousAdminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47642,
                        "src": "5909:17:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47657,
                        "name": "adminRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47638,
                        "src": "5928:9:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 47654,
                      "name": "RoleAdminChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47761,
                      "src": "5886:16:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32,bytes32,bytes32)"
                      }
                    },
                    "id": 47658,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5886:52:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47659,
                  "nodeType": "EmitStatement",
                  "src": "5881:57:28"
                }
              ]
            },
            "documentation": {
              "id": 47634,
              "nodeType": "StructuredDocumentation",
              "src": "5579:114:28",
              "text": " @dev Sets `adminRole` as ``role``'s admin role.\n Emits a {RoleAdminChanged} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setRoleAdmin",
            "nameLocation": "5707:13:28",
            "parameters": {
              "id": 47639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47636,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "5729:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47661,
                  "src": "5721:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47635,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5721:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47638,
                  "mutability": "mutable",
                  "name": "adminRole",
                  "nameLocation": "5743:9:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47661,
                  "src": "5735:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47637,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5735:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5720:33:28"
            },
            "returnParameters": {
              "id": 47640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5771:0:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47700,
            "nodeType": "FunctionDefinition",
            "src": "6179:316:28",
            "nodes": [],
            "body": {
              "id": 47699,
              "nodeType": "Block",
              "src": "6262:233:28",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 47675,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6276:23:28",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 47672,
                          "name": "role",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47664,
                          "src": "6285:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 47673,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 47666,
                          "src": "6291:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 47671,
                        "name": "hasRole",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47524,
                        "src": "6277:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address) view returns (bool)"
                        }
                      },
                      "id": 47674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6277:22:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 47697,
                    "nodeType": "Block",
                    "src": "6452:37:28",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 47695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6473:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 47670,
                        "id": 47696,
                        "nodeType": "Return",
                        "src": "6466:12:28"
                      }
                    ]
                  },
                  "id": 47698,
                  "nodeType": "IfStatement",
                  "src": "6272:217:28",
                  "trueBody": {
                    "id": 47694,
                    "nodeType": "Block",
                    "src": "6301:145:28",
                    "statements": [
                      {
                        "expression": {
                          "id": 47683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 47676,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47470,
                                  "src": "6315:6:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 47678,
                                "indexExpression": {
                                  "id": 47677,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47664,
                                  "src": "6322:4:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6315:12:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$47465_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 47679,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6328:7:28",
                              "memberName": "hasRole",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47462,
                              "src": "6315:20:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 47681,
                            "indexExpression": {
                              "id": 47680,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47666,
                              "src": "6336:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "6315:29:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 47682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6347:4:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "6315:36:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 47684,
                        "nodeType": "ExpressionStatement",
                        "src": "6315:36:28"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 47686,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47664,
                              "src": "6382:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 47687,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47666,
                              "src": "6388:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 47688,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51316,
                                "src": "6397:10:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 47689,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6397:12:28",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 47685,
                            "name": "RoleGranted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47770,
                            "src": "6370:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 47690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6370:40:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47691,
                        "nodeType": "EmitStatement",
                        "src": "6365:45:28"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 47692,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6431:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 47670,
                        "id": 47693,
                        "nodeType": "Return",
                        "src": "6424:11:28"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47662,
              "nodeType": "StructuredDocumentation",
              "src": "5951:223:28",
              "text": " @dev Attempts to grant `role` to `account` and returns a boolean indicating if `role` was granted.\n Internal function without access restriction.\n May emit a {RoleGranted} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_grantRole",
            "nameLocation": "6188:10:28",
            "parameters": {
              "id": 47667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47664,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6207:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47700,
                  "src": "6199:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47663,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6199:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47666,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6221:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47700,
                  "src": "6213:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6213:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6198:31:28"
            },
            "returnParameters": {
              "id": 47670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47669,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47700,
                  "src": "6256:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47668,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6256:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6255:6:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 47738,
            "nodeType": "FunctionDefinition",
            "src": "6730:317:28",
            "nodes": [],
            "body": {
              "id": 47737,
              "nodeType": "Block",
              "src": "6814:233:28",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "arguments": [
                      {
                        "id": 47711,
                        "name": "role",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47703,
                        "src": "6836:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 47712,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47705,
                        "src": "6842:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 47710,
                      "name": "hasRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47524,
                      "src": "6828:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                        "typeString": "function (bytes32,address) view returns (bool)"
                      }
                    },
                    "id": 47713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6828:22:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 47735,
                    "nodeType": "Block",
                    "src": "7004:37:28",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 47733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7025:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 47709,
                        "id": 47734,
                        "nodeType": "Return",
                        "src": "7018:12:28"
                      }
                    ]
                  },
                  "id": 47736,
                  "nodeType": "IfStatement",
                  "src": "6824:217:28",
                  "trueBody": {
                    "id": 47732,
                    "nodeType": "Block",
                    "src": "6852:146:28",
                    "statements": [
                      {
                        "expression": {
                          "id": 47721,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "expression": {
                                "baseExpression": {
                                  "id": 47714,
                                  "name": "_roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47470,
                                  "src": "6866:6:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RoleData_$47465_storage_$",
                                    "typeString": "mapping(bytes32 => struct AccessControl.RoleData storage ref)"
                                  }
                                },
                                "id": 47716,
                                "indexExpression": {
                                  "id": 47715,
                                  "name": "role",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 47703,
                                  "src": "6873:4:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6866:12:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_RoleData_$47465_storage",
                                  "typeString": "struct AccessControl.RoleData storage ref"
                                }
                              },
                              "id": 47717,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6879:7:28",
                              "memberName": "hasRole",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 47462,
                              "src": "6866:20:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 47719,
                            "indexExpression": {
                              "id": 47718,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47705,
                              "src": "6887:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "6866:29:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "66616c7365",
                            "id": 47720,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6898:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "6866:37:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 47722,
                        "nodeType": "ExpressionStatement",
                        "src": "6866:37:28"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 47724,
                              "name": "role",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47703,
                              "src": "6934:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 47725,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 47705,
                              "src": "6940:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 47726,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 51316,
                                "src": "6949:10:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 47727,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6949:12:28",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 47723,
                            "name": "RoleRevoked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 47779,
                            "src": "6922:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address,address)"
                            }
                          },
                          "id": 47728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6922:40:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 47729,
                        "nodeType": "EmitStatement",
                        "src": "6917:45:28"
                      },
                      {
                        "expression": {
                          "hexValue": "74727565",
                          "id": 47730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6983:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 47709,
                        "id": 47731,
                        "nodeType": "Return",
                        "src": "6976:11:28"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 47701,
              "nodeType": "StructuredDocumentation",
              "src": "6501:224:28",
              "text": " @dev Attempts to revoke `role` to `account` and returns a boolean indicating if `role` was revoked.\n Internal function without access restriction.\n May emit a {RoleRevoked} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_revokeRole",
            "nameLocation": "6739:11:28",
            "parameters": {
              "id": 47706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47703,
                  "mutability": "mutable",
                  "name": "role",
                  "nameLocation": "6759:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47738,
                  "src": "6751:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 47702,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6751:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 47705,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6773:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 47738,
                  "src": "6765:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6765:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6750:31:28"
            },
            "returnParameters": {
              "id": 47709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47708,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 47738,
                  "src": "6808:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 47707,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6808:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6807:6:28"
            },
            "scope": 47739,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 47453,
              "name": "Context",
              "nameLocations": [
                "1988:7:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 51334,
              "src": "1988:7:28"
            },
            "id": 47454,
            "nodeType": "InheritanceSpecifier",
            "src": "1988:7:28"
          },
          {
            "baseName": {
              "id": 47455,
              "name": "IAccessControl",
              "nameLocations": [
                "1997:14:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 47822,
              "src": "1997:14:28"
            },
            "id": 47456,
            "nodeType": "InheritanceSpecifier",
            "src": "1997:14:28"
          },
          {
            "baseName": {
              "id": 47457,
              "name": "ERC165",
              "nameLocations": [
                "2013:6:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 52758,
              "src": "2013:6:28"
            },
            "id": 47458,
            "nodeType": "InheritanceSpecifier",
            "src": "2013:6:28"
          }
        ],
        "canonicalName": "AccessControl",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 47452,
          "nodeType": "StructuredDocumentation",
          "src": "292:1660:28",
          "text": " @dev Contract module that allows children to implement role-based access\n control mechanisms. This is a lightweight version that doesn't allow enumerating role\n members except through off-chain means by accessing the contract event logs. Some\n applications may benefit from on-chain enumerability, for those cases see\n {AccessControlEnumerable}.\n Roles are referred to by their `bytes32` identifier. These should be exposed\n in the external API and be unique. The best way to achieve this is by\n using `public constant` hash digests:\n ```solidity\n bytes32 public constant MY_ROLE = keccak256(\"MY_ROLE\");\n ```\n Roles can be used to represent a set of permissions. To restrict access to a\n function call, use {hasRole}:\n ```solidity\n function foo() public {\n     require(hasRole(MY_ROLE, msg.sender));\n     ...\n }\n ```\n Roles can be granted and revoked dynamically via the {grantRole} and\n {revokeRole} functions. Each role has an associated admin role, and only\n accounts that have a role's admin role can call {grantRole} and {revokeRole}.\n By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\n that only accounts with this role will be able to grant or revoke other\n roles. More complex role relationships can be created by using\n {_setRoleAdmin}.\n WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\n grant and revoke this role. Extra precautions should be taken to secure\n accounts that have been granted it. We recommend using {AccessControlDefaultAdminRules}\n to enforce additional security measures for this role."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          47739,
          52758,
          52770,
          47822,
          51334
        ],
        "name": "AccessControl",
        "nameLocation": "1971:13:28",
        "scope": 47740,
        "usedErrors": [
          47749,
          47752
        ],
        "usedEvents": [
          47761,
          47770,
          47779
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 28
} as const;