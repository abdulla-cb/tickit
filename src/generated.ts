import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Basefriends
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basefriendsAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'registry_', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newFollows', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'addFollows',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowNodes',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowerNodes',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowers',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollows',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recordVersions', internalType: 'uint64', type: 'uint64' },
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'graph',
    outputs: [
      {
        name: 'follows',
        internalType: 'struct EnumerableSetLib.Bytes32Set',
        type: 'tuple',
        components: [
          { name: '_spacer', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'followers',
        internalType: 'struct EnumerableSetLib.Bytes32Set',
        type: 'tuple',
        components: [
          { name: '_spacer', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'unFollows', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'removeFollows',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'versions',
    outputs: [{ name: 'version', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'ConnectionsCleared',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newFollower',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'FollowerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'removedFollower',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'FollowerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newFollows',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'FollowsAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'removedFollows',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'FollowsRemoved',
  },
  {
    type: 'error',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'InvalidNode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'addr', internalType: 'address', type: 'address' },
    ],
    name: 'NotAuthroized',
  },
] as const

export const basefriendsAddress =
  '0x128AA5d8DaD4148a8eB1F5aeBdA0e0a62510b87e' as const

export const basefriendsConfig = {
  address: basefriendsAddress,
  abi: basefriendsAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ensAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'resolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'setResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'setSubnodeOwner',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setSubnodeRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'ttl', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setTTL',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ttl',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'label',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewResolver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'ttl', internalType: 'uint64', type: 'uint64', indexed: false },
    ],
    name: 'NewTTL',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EnumerableSetLib
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const enumerableSetLibAbi = [
  { type: 'error', inputs: [], name: 'IndexOutOfBounds' },
  { type: 'error', inputs: [], name: 'ValueIsZeroSentinel' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EventRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eventRegistryAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'groupId', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'checkBallotGroupAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'claimTickets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getEventById',
    outputs: [
      {
        name: '',
        internalType: 'struct IEventRegistry.EventInformation',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'location', internalType: 'string', type: 'string' },
          { name: 'ticketSaleStart', internalType: 'uint32', type: 'uint32' },
          { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
          { name: 'eventTimestamp', internalType: 'uint32', type: 'uint32' },
          { name: 'eventOwner', internalType: 'address', type: 'address' },
          { name: 'maxEventCapacity', internalType: 'uint32', type: 'uint32' },
          { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'groupOwner', internalType: 'address', type: 'address' },
    ],
    name: 'getEventUserGroup',
    outputs: [{ name: 'groupId', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumberOfEvents',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTicketContract',
    outputs: [
      {
        name: 'tickeContract',
        internalType: 'contract ITicket',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'issueTickets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'listEvents',
    outputs: [
      {
        name: '',
        internalType: 'struct IEventRegistry.EventInformationWithHash[]',
        type: 'tuple[]',
        components: [
          { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'info',
            internalType: 'struct IEventRegistry.EventInformation',
            type: 'tuple',
            components: [
              { name: 'title', internalType: 'string', type: 'string' },
              { name: 'description', internalType: 'string', type: 'string' },
              { name: 'location', internalType: 'string', type: 'string' },
              {
                name: 'ticketSaleStart',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
              {
                name: 'eventTimestamp',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'eventOwner', internalType: 'address', type: 'address' },
              {
                name: 'maxEventCapacity',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'location', internalType: 'string', type: 'string' },
      { name: 'ticketSaleStart', internalType: 'uint32', type: 'uint32' },
      { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
      { name: 'eventTimestamp', internalType: 'uint32', type: 'uint32' },
      { name: 'maxEventCapacity', internalType: 'uint32', type: 'uint32' },
      { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'registerEvent',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'friends', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'requestTicket',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'groupOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'groupMembers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'BallotEntered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'eventTimestamp',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
    ],
    name: 'EventRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TicketReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'ballotSize',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TicketsAllocated',
  },
  { type: 'error', inputs: [], name: 'AlreadyHasGroup' },
  { type: 'error', inputs: [], name: 'DidNotApplyForTickets' },
  { type: 'error', inputs: [], name: 'EventAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'EventNotFound' },
  { type: 'error', inputs: [], name: 'EventOversubscribed' },
  { type: 'error', inputs: [], name: 'OutOfBounds' },
  { type: 'error', inputs: [], name: 'TicketSaleFinished' },
  { type: 'error', inputs: [], name: 'TicketSaleHasntStarted' },
  { type: 'error', inputs: [], name: 'TicketsAlreadyAllocated' },
  { type: 'error', inputs: [], name: 'TooManyFriends' },
] as const

export const eventRegistryAddress =
  '0x34822b2cdb272A68b4657fBbE93529399473efa4' as const

export const eventRegistryConfig = {
  address: eventRegistryAddress,
  abi: eventRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBasefriends
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBasefriendsAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowNodes',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowerNodes',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollowers',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getFollows',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '_symbol', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEventRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iEventRegistryAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'groupId', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'checkBallotGroupAllocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'claimTickets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getEventById',
    outputs: [
      {
        name: '',
        internalType: 'struct IEventRegistry.EventInformation',
        type: 'tuple',
        components: [
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'location', internalType: 'string', type: 'string' },
          { name: 'ticketSaleStart', internalType: 'uint32', type: 'uint32' },
          { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
          { name: 'eventTimestamp', internalType: 'uint32', type: 'uint32' },
          { name: 'eventOwner', internalType: 'address', type: 'address' },
          { name: 'maxEventCapacity', internalType: 'uint32', type: 'uint32' },
          { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'groupOwner', internalType: 'address', type: 'address' },
    ],
    name: 'getEventUserGroup',
    outputs: [{ name: 'groupId', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumberOfEvents',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTicketContract',
    outputs: [
      {
        name: 'ticketContract',
        internalType: 'contract ITicket',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'issueTickets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'listEvents',
    outputs: [
      {
        name: '',
        internalType: 'struct IEventRegistry.EventInformationWithHash[]',
        type: 'tuple[]',
        components: [
          { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'info',
            internalType: 'struct IEventRegistry.EventInformation',
            type: 'tuple',
            components: [
              { name: 'title', internalType: 'string', type: 'string' },
              { name: 'description', internalType: 'string', type: 'string' },
              { name: 'location', internalType: 'string', type: 'string' },
              {
                name: 'ticketSaleStart',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
              {
                name: 'eventTimestamp',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'eventOwner', internalType: 'address', type: 'address' },
              {
                name: 'maxEventCapacity',
                internalType: 'uint32',
                type: 'uint32',
              },
              { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'location', internalType: 'string', type: 'string' },
      { name: 'ticketSaleStart', internalType: 'uint32', type: 'uint32' },
      { name: 'ticketSaleEnd', internalType: 'uint32', type: 'uint32' },
      { name: 'eventTimestamp', internalType: 'uint32', type: 'uint32' },
      { name: 'maxEventCapacity', internalType: 'uint32', type: 'uint32' },
      { name: 'maxGroupSize', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'registerEvent',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'friends', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'requestTicket',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'groupOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'groupMembers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'BallotEntered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'eventTimestamp',
        internalType: 'uint32',
        type: 'uint32',
        indexed: true,
      },
    ],
    name: 'EventRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TicketReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'eventId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'ballotSize',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TicketsAllocated',
  },
  { type: 'error', inputs: [], name: 'AlreadyHasGroup' },
  { type: 'error', inputs: [], name: 'DidNotApplyForTickets' },
  { type: 'error', inputs: [], name: 'EventAlreadyRegistered' },
  { type: 'error', inputs: [], name: 'EventNotFound' },
  { type: 'error', inputs: [], name: 'EventOversubscribed' },
  { type: 'error', inputs: [], name: 'OutOfBounds' },
  { type: 'error', inputs: [], name: 'TicketSaleFinished' },
  { type: 'error', inputs: [], name: 'TicketSaleHasntStarted' },
  { type: 'error', inputs: [], name: 'TicketsAlreadyAllocated' },
  { type: 'error', inputs: [], name: 'TooManyFriends' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INameResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNameResolverAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITicket
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTicketAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'OnlyEventRegistry' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVersionableResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVersionableResolverAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L2Resolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const l2ResolverAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'ens_', internalType: 'contract ENS', type: 'address' },
      {
        name: 'registrarController_',
        internalType: 'address',
        type: 'address',
      },
      { name: 'reverseRegistrar_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'contentTypes', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ABI',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'addr',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'coinType', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addr',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delegate', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'contenthash',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'name', internalType: 'bytes32', type: 'bytes32' },
      { name: 'resource', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'dnsRecord',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ens',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'name', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'hasDNSRecords',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'interfaceImplementer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'delegate', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nodehash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'multicallWithNodeCheck',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'pubkey',
    outputs: [
      { name: 'x', internalType: 'bytes32', type: 'bytes32' },
      { name: 'y', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'registrarController',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'resolve',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reverseRegistrar',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'contentType', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setABI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'coinType', internalType: 'uint256', type: 'uint256' },
      { name: 'a', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setAddr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'a', internalType: 'address', type: 'address' },
    ],
    name: 'setAddr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'hash', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setContenthash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setDNSRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' },
      { name: 'implementer', internalType: 'address', type: 'address' },
    ],
    name: 'setInterface',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newName', internalType: 'string', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'x', internalType: 'bytes32', type: 'bytes32' },
      { name: 'y', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPubkey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'registrarController_',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setRegistrarController',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'reverseRegistrar_', internalType: 'address', type: 'address' },
    ],
    name: 'setReverseRegistrar',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setText',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'hash', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setZonehash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'text',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'zonehash',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'contentType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ABIChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'a', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AddrChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'coinType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAddress',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: true },
    ],
    name: 'Approved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'hash', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ContenthashChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'resource',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      { name: 'record', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'DNSRecordChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'resource',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
    ],
    name: 'DNSRecordDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'lastzonehash',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'zonehash',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DNSZonehashChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'interfaceID',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
      {
        name: 'implementer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'InterfaceChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'x', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'y', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PubkeyChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRegistrarController',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RegistrarControllerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newReverseRegistrar',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReverseRegistrarUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'indexedKey',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'TextChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'CantSetSelfAsDelegate' },
  { type: 'error', inputs: [], name: 'CantSetSelfAsOperator' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

export const l2ResolverAddress =
  '0x6533C94869D28fAA8dF77cc63f9e2b2D6Cf77eBA' as const

export const l2ResolverConfig = {
  address: l2ResolverAddress,
  abi: l2ResolverAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LibString
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const libStringAbi = [
  { type: 'error', inputs: [], name: 'HexLengthInsufficient' },
  { type: 'error', inputs: [], name: 'StringNot7BitASCII' },
  { type: 'error', inputs: [], name: 'TooBigForSmallString' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'decimals_', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockNameResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockNameResolverAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newName', internalType: 'string', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NameResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nameResolverAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newName', internalType: 'string', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NameChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const registryAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'rootOwner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'resolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'resolver_', internalType: 'address', type: 'address' },
      { name: 'ttl_', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'resolver_', internalType: 'address', type: 'address' },
    ],
    name: 'setResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'setSubnodeOwner',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'label', internalType: 'bytes32', type: 'bytes32' },
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'resolver_', internalType: 'address', type: 'address' },
      { name: 'ttl_', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setSubnodeRecord',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32' },
      { name: 'ttl_', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setTTL',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ttl',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'label',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewResolver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'ttl', internalType: 'uint64', type: 'uint64', indexed: false },
    ],
    name: 'NewTTL',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ResolverBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const resolverBaseAbi = [
  {
    type: 'function',
    inputs: [{ name: 'node', internalType: 'bytes32', type: 'bytes32' }],
    name: 'clearRecords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'recordVersions',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'newVersion',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'VersionChanged',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReverseRegistrar
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reverseRegistrarAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'registry_', internalType: 'contract ENS', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'reverseNode_', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'claim',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimForBaseAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
    ],
    name: 'claimWithResolver',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'controller', internalType: 'address', type: 'address' }],
    name: 'controllers',
    outputs: [{ name: 'approved', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultResolver',
    outputs: [
      { name: '', internalType: 'contract NameResolver', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'node',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', internalType: 'contract ENS', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'reverseNode',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'controller', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setControllerApproval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'resolver', internalType: 'address', type: 'address' }],
    name: 'setDefaultResolver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'setName',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'resolver', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
    ],
    name: 'setNameForAddr',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address', indexed: true },
      { name: 'node', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'BaseReverseClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'controller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ControllerApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'contract NameResolver',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DefaultResolverChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'NoZeroAddress' },
  {
    type: 'error',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'NotAuthorized',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

export const reverseRegistrarAddress =
  '0xa0A8401ECF248a9375a0a71C4dedc263dA18dCd7' as const

export const reverseRegistrarConfig = {
  address: reverseRegistrarAddress,
  abi: reverseRegistrarAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Script
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ticket
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ticketAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_eventId', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'OnlyEventRegistry' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'activeFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'allowCheatcodes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newBlobBaseFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'blobBaseFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'hashes', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'blobhashes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'broadcastRawTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newChainId', internalType: 'uint256', type: 'uint256' }],
    name: 'chainId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clearMockedCalls',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newCoinbase', internalType: 'address', type: 'address' }],
    name: 'coinbase',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'deleteSnapshot',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deleteSnapshots',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'artifactPath', internalType: 'string', type: 'string' },
      { name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCode',
    outputs: [
      { name: 'deployedAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'deployCode',
    outputs: [
      { name: 'deployedAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newDifficulty', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'difficulty',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToStateJson', internalType: 'string', type: 'string' },
    ],
    name: 'dumpState',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'ensNamehash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envExists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'newRuntimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'etch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectEmitAnonymous',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmitAnonymous',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic0', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmitAnonymous',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic0', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmitAnonymous',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes4', type: 'bytes4' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes', type: 'bytes' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemoryCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newBasefee', internalType: 'uint256', type: 'uint256' }],
    name: 'fee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlobBaseFee',
    outputs: [
      { name: 'blobBaseFee', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlobhashes',
    outputs: [{ name: 'hashes', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFoundryVersion',
    outputs: [{ name: 'version', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'indexOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'context',
        internalType: 'enum VmSafe.ForgeContext',
        type: 'uint8',
      },
    ],
    name: 'isContext',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isPersistent',
    outputs: [{ name: 'persistent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsJson',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsToml',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastCallGas',
    outputs: [
      {
        name: 'gas',
        internalType: 'struct VmSafe.Gas',
        type: 'tuple',
        components: [
          { name: 'gasLimit', internalType: 'uint64', type: 'uint64' },
          { name: 'gasTotalUsed', internalType: 'uint64', type: 'uint64' },
          { name: 'gasMemoryUsed', internalType: 'uint64', type: 'uint64' },
          { name: 'gasRefunded', internalType: 'int64', type: 'int64' },
          { name: 'gasRemaining', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToAllocsJson', internalType: 'string', type: 'string' },
    ],
    name: 'loadAllocs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
      { name: 'account2', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonType',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonType',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonTypeArray',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'toml', internalType: 'string', type: 'string' }],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'prevrandao',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'prevrandao',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'prompt',
    outputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptSecret',
    outputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptSecretUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'randomAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'randomUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint256', type: 'uint256' },
      { name: 'max', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'randomUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'readCallers',
    outputs: [
      {
        name: 'callerMode',
        internalType: 'enum VmSafe.CallerMode',
        type: 'uint8',
      },
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'replace',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'resetNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertTo',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertToAndDelete',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newHeight', internalType: 'uint256', type: 'uint256' }],
    name: 'roll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    name: 'selectFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'typeDescription', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeJsonType',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeJsonType',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUintToHex',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setBlockhash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonceUnsafe',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'skipTest', internalType: 'bool', type: 'bool' }],
    name: 'skip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'snapshot',
    outputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'delimiter', internalType: 'string', type: 'string' },
    ],
    name: 'split',
    outputs: [{ name: 'outputs', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopExpectSafeMemory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toLowercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toUppercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'trim',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newGasPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'txGasPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'warp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmSafeAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'broadcastRawTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'artifactPath', internalType: 'string', type: 'string' },
      { name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCode',
    outputs: [
      { name: 'deployedAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'deployCode',
    outputs: [
      { name: 'deployedAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'ensNamehash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envExists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlobBaseFee',
    outputs: [
      { name: 'blobBaseFee', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFoundryVersion',
    outputs: [{ name: 'version', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'indexOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'context',
        internalType: 'enum VmSafe.ForgeContext',
        type: 'uint8',
      },
    ],
    name: 'isContext',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsJson',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsToml',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastCallGas',
    outputs: [
      {
        name: 'gas',
        internalType: 'struct VmSafe.Gas',
        type: 'tuple',
        components: [
          { name: 'gasLimit', internalType: 'uint64', type: 'uint64' },
          { name: 'gasTotalUsed', internalType: 'uint64', type: 'uint64' },
          { name: 'gasMemoryUsed', internalType: 'uint64', type: 'uint64' },
          { name: 'gasRefunded', internalType: 'int64', type: 'int64' },
          { name: 'gasRemaining', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonType',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonType',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonTypeArray',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'toml', internalType: 'string', type: 'string' }],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'prompt',
    outputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptSecret',
    outputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptSecretUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptText', internalType: 'string', type: 'string' }],
    name: 'promptUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'randomAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'randomUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint256', type: 'uint256' },
      { name: 'max', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'randomUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'replace',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'typeDescription', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeJsonType',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'typeDescription', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeJsonType',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUintToHex',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signCompact',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 'vs', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'delimiter', internalType: 'string', type: 'string' },
    ],
    name: 'split',
    outputs: [{ name: 'outputs', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toLowercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toUppercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'trim',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      {
        name: 'keysHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__
 */
export const useReadBasefriends = /*#__PURE__*/ createUseReadContract({
  abi: basefriendsAbi,
  address: basefriendsAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"getFollowNodes"`
 */
export const useReadBasefriendsGetFollowNodes =
  /*#__PURE__*/ createUseReadContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'getFollowNodes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"getFollowerNodes"`
 */
export const useReadBasefriendsGetFollowerNodes =
  /*#__PURE__*/ createUseReadContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'getFollowerNodes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"getFollowers"`
 */
export const useReadBasefriendsGetFollowers =
  /*#__PURE__*/ createUseReadContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'getFollowers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"getFollows"`
 */
export const useReadBasefriendsGetFollows = /*#__PURE__*/ createUseReadContract(
  {
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'getFollows',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"graph"`
 */
export const useReadBasefriendsGraph = /*#__PURE__*/ createUseReadContract({
  abi: basefriendsAbi,
  address: basefriendsAddress,
  functionName: 'graph',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"versions"`
 */
export const useReadBasefriendsVersions = /*#__PURE__*/ createUseReadContract({
  abi: basefriendsAbi,
  address: basefriendsAddress,
  functionName: 'versions',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basefriendsAbi}__
 */
export const useWriteBasefriends = /*#__PURE__*/ createUseWriteContract({
  abi: basefriendsAbi,
  address: basefriendsAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"addFollows"`
 */
export const useWriteBasefriendsAddFollows =
  /*#__PURE__*/ createUseWriteContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'addFollows',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"clearAll"`
 */
export const useWriteBasefriendsClearAll = /*#__PURE__*/ createUseWriteContract(
  {
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'clearAll',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"removeFollows"`
 */
export const useWriteBasefriendsRemoveFollows =
  /*#__PURE__*/ createUseWriteContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'removeFollows',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basefriendsAbi}__
 */
export const useSimulateBasefriends = /*#__PURE__*/ createUseSimulateContract({
  abi: basefriendsAbi,
  address: basefriendsAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"addFollows"`
 */
export const useSimulateBasefriendsAddFollows =
  /*#__PURE__*/ createUseSimulateContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'addFollows',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"clearAll"`
 */
export const useSimulateBasefriendsClearAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'clearAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link basefriendsAbi}__ and `functionName` set to `"removeFollows"`
 */
export const useSimulateBasefriendsRemoveFollows =
  /*#__PURE__*/ createUseSimulateContract({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    functionName: 'removeFollows',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__
 */
export const useWatchBasefriendsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__ and `eventName` set to `"ConnectionsCleared"`
 */
export const useWatchBasefriendsConnectionsClearedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    eventName: 'ConnectionsCleared',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__ and `eventName` set to `"FollowerAdded"`
 */
export const useWatchBasefriendsFollowerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    eventName: 'FollowerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__ and `eventName` set to `"FollowerRemoved"`
 */
export const useWatchBasefriendsFollowerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    eventName: 'FollowerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__ and `eventName` set to `"FollowsAdded"`
 */
export const useWatchBasefriendsFollowsAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    eventName: 'FollowsAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link basefriendsAbi}__ and `eventName` set to `"FollowsRemoved"`
 */
export const useWatchBasefriendsFollowsRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: basefriendsAbi,
    address: basefriendsAddress,
    eventName: 'FollowsRemoved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__
 */
export const useReadEns = /*#__PURE__*/ createUseReadContract({ abi: ensAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadEnsIsApprovedForAll = /*#__PURE__*/ createUseReadContract({
  abi: ensAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"owner"`
 */
export const useReadEnsOwner = /*#__PURE__*/ createUseReadContract({
  abi: ensAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"recordExists"`
 */
export const useReadEnsRecordExists = /*#__PURE__*/ createUseReadContract({
  abi: ensAbi,
  functionName: 'recordExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"resolver"`
 */
export const useReadEnsResolver = /*#__PURE__*/ createUseReadContract({
  abi: ensAbi,
  functionName: 'resolver',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"ttl"`
 */
export const useReadEnsTtl = /*#__PURE__*/ createUseReadContract({
  abi: ensAbi,
  functionName: 'ttl',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__
 */
export const useWriteEns = /*#__PURE__*/ createUseWriteContract({ abi: ensAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteEnsSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setOwner"`
 */
export const useWriteEnsSetOwner = /*#__PURE__*/ createUseWriteContract({
  abi: ensAbi,
  functionName: 'setOwner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setRecord"`
 */
export const useWriteEnsSetRecord = /*#__PURE__*/ createUseWriteContract({
  abi: ensAbi,
  functionName: 'setRecord',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setResolver"`
 */
export const useWriteEnsSetResolver = /*#__PURE__*/ createUseWriteContract({
  abi: ensAbi,
  functionName: 'setResolver',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useWriteEnsSetSubnodeOwner = /*#__PURE__*/ createUseWriteContract({
  abi: ensAbi,
  functionName: 'setSubnodeOwner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useWriteEnsSetSubnodeRecord = /*#__PURE__*/ createUseWriteContract(
  { abi: ensAbi, functionName: 'setSubnodeRecord' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setTTL"`
 */
export const useWriteEnsSetTtl = /*#__PURE__*/ createUseWriteContract({
  abi: ensAbi,
  functionName: 'setTTL',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__
 */
export const useSimulateEns = /*#__PURE__*/ createUseSimulateContract({
  abi: ensAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateEnsSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setOwner"`
 */
export const useSimulateEnsSetOwner = /*#__PURE__*/ createUseSimulateContract({
  abi: ensAbi,
  functionName: 'setOwner',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setRecord"`
 */
export const useSimulateEnsSetRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: ensAbi,
  functionName: 'setRecord',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setResolver"`
 */
export const useSimulateEnsSetResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensAbi,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useSimulateEnsSetSubnodeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useSimulateEnsSetSubnodeRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensAbi,
    functionName: 'setSubnodeRecord',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"setTTL"`
 */
export const useSimulateEnsSetTtl = /*#__PURE__*/ createUseSimulateContract({
  abi: ensAbi,
  functionName: 'setTTL',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__
 */
export const useWatchEnsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ensAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchEnsApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"NewOwner"`
 */
export const useWatchEnsNewOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensAbi,
    eventName: 'NewOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"NewResolver"`
 */
export const useWatchEnsNewResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensAbi,
    eventName: 'NewResolver',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"NewTTL"`
 */
export const useWatchEnsNewTtlEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: ensAbi, eventName: 'NewTTL' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchEnsTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721TokenReceiverAbi}__
 */
export const useWriteErc721TokenReceiver = /*#__PURE__*/ createUseWriteContract(
  { abi: erc721TokenReceiverAbi },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteErc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721TokenReceiverAbi}__
 */
export const useSimulateErc721TokenReceiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: erc721TokenReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateErc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__
 */
export const useReadEventRegistry = /*#__PURE__*/ createUseReadContract({
  abi: eventRegistryAbi,
  address: eventRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"checkBallotGroupAllocation"`
 */
export const useReadEventRegistryCheckBallotGroupAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'checkBallotGroupAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"getEventById"`
 */
export const useReadEventRegistryGetEventById =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'getEventById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"getEventUserGroup"`
 */
export const useReadEventRegistryGetEventUserGroup =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'getEventUserGroup',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"getNumberOfEvents"`
 */
export const useReadEventRegistryGetNumberOfEvents =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'getNumberOfEvents',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"getTicketContract"`
 */
export const useReadEventRegistryGetTicketContract =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'getTicketContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"listEvents"`
 */
export const useReadEventRegistryListEvents =
  /*#__PURE__*/ createUseReadContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'listEvents',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link eventRegistryAbi}__
 */
export const useWriteEventRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: eventRegistryAbi,
  address: eventRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"claimTickets"`
 */
export const useWriteEventRegistryClaimTickets =
  /*#__PURE__*/ createUseWriteContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'claimTickets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"issueTickets"`
 */
export const useWriteEventRegistryIssueTickets =
  /*#__PURE__*/ createUseWriteContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'issueTickets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"registerEvent"`
 */
export const useWriteEventRegistryRegisterEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'registerEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"requestTicket"`
 */
export const useWriteEventRegistryRequestTicket =
  /*#__PURE__*/ createUseWriteContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'requestTicket',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link eventRegistryAbi}__
 */
export const useSimulateEventRegistry = /*#__PURE__*/ createUseSimulateContract(
  { abi: eventRegistryAbi, address: eventRegistryAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"claimTickets"`
 */
export const useSimulateEventRegistryClaimTickets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'claimTickets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"issueTickets"`
 */
export const useSimulateEventRegistryIssueTickets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'issueTickets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"registerEvent"`
 */
export const useSimulateEventRegistryRegisterEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'registerEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link eventRegistryAbi}__ and `functionName` set to `"requestTicket"`
 */
export const useSimulateEventRegistryRequestTicket =
  /*#__PURE__*/ createUseSimulateContract({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    functionName: 'requestTicket',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eventRegistryAbi}__
 */
export const useWatchEventRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eventRegistryAbi}__ and `eventName` set to `"BallotEntered"`
 */
export const useWatchEventRegistryBallotEnteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    eventName: 'BallotEntered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eventRegistryAbi}__ and `eventName` set to `"EventRegistered"`
 */
export const useWatchEventRegistryEventRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    eventName: 'EventRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eventRegistryAbi}__ and `eventName` set to `"TicketReceived"`
 */
export const useWatchEventRegistryTicketReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    eventName: 'TicketReceived',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eventRegistryAbi}__ and `eventName` set to `"TicketsAllocated"`
 */
export const useWatchEventRegistryTicketsAllocatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: eventRegistryAbi,
    address: eventRegistryAddress,
    eventName: 'TicketsAllocated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBasefriendsAbi}__
 */
export const useReadIBasefriends = /*#__PURE__*/ createUseReadContract({
  abi: iBasefriendsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBasefriendsAbi}__ and `functionName` set to `"getFollowNodes"`
 */
export const useReadIBasefriendsGetFollowNodes =
  /*#__PURE__*/ createUseReadContract({
    abi: iBasefriendsAbi,
    functionName: 'getFollowNodes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBasefriendsAbi}__ and `functionName` set to `"getFollowerNodes"`
 */
export const useReadIBasefriendsGetFollowerNodes =
  /*#__PURE__*/ createUseReadContract({
    abi: iBasefriendsAbi,
    functionName: 'getFollowerNodes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBasefriendsAbi}__ and `functionName` set to `"getFollowers"`
 */
export const useReadIBasefriendsGetFollowers =
  /*#__PURE__*/ createUseReadContract({
    abi: iBasefriendsAbi,
    functionName: 'getFollowers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBasefriendsAbi}__ and `functionName` set to `"getFollows"`
 */
export const useReadIBasefriendsGetFollows =
  /*#__PURE__*/ createUseReadContract({
    abi: iBasefriendsAbi,
    functionName: 'getFollows',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20Name = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useReadIerc721Enumerable = /*#__PURE__*/ createUseReadContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721EnumerableBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721EnumerableGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721EnumerableIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721EnumerableOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721EnumerableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadIerc721EnumerableTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadIerc721EnumerableTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc721EnumerableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721EnumerableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWriteIerc721Enumerable = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721EnumerableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721EnumerableApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useSimulateIerc721Enumerable =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721EnumerableApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721EnumerableSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721EnumerableSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721EnumerableTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721EnumerableAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__
 */
export const useWatchIerc721EnumerableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721EnumerableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721EnumerableApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721EnumerableApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721EnumerableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721EnumerableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721EnumerableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__
 */
export const useWriteIerc721TokenReceiver =
  /*#__PURE__*/ createUseWriteContract({ abi: ierc721TokenReceiverAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__
 */
export const useSimulateIerc721TokenReceiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721TokenReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__
 */
export const useReadIEventRegistry = /*#__PURE__*/ createUseReadContract({
  abi: iEventRegistryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"checkBallotGroupAllocation"`
 */
export const useReadIEventRegistryCheckBallotGroupAllocation =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'checkBallotGroupAllocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"getEventById"`
 */
export const useReadIEventRegistryGetEventById =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'getEventById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"getEventUserGroup"`
 */
export const useReadIEventRegistryGetEventUserGroup =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'getEventUserGroup',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"getNumberOfEvents"`
 */
export const useReadIEventRegistryGetNumberOfEvents =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'getNumberOfEvents',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"getTicketContract"`
 */
export const useReadIEventRegistryGetTicketContract =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'getTicketContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"listEvents"`
 */
export const useReadIEventRegistryListEvents =
  /*#__PURE__*/ createUseReadContract({
    abi: iEventRegistryAbi,
    functionName: 'listEvents',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEventRegistryAbi}__
 */
export const useWriteIEventRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: iEventRegistryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"claimTickets"`
 */
export const useWriteIEventRegistryClaimTickets =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEventRegistryAbi,
    functionName: 'claimTickets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"issueTickets"`
 */
export const useWriteIEventRegistryIssueTickets =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEventRegistryAbi,
    functionName: 'issueTickets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"registerEvent"`
 */
export const useWriteIEventRegistryRegisterEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEventRegistryAbi,
    functionName: 'registerEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"requestTicket"`
 */
export const useWriteIEventRegistryRequestTicket =
  /*#__PURE__*/ createUseWriteContract({
    abi: iEventRegistryAbi,
    functionName: 'requestTicket',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEventRegistryAbi}__
 */
export const useSimulateIEventRegistry =
  /*#__PURE__*/ createUseSimulateContract({ abi: iEventRegistryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"claimTickets"`
 */
export const useSimulateIEventRegistryClaimTickets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEventRegistryAbi,
    functionName: 'claimTickets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"issueTickets"`
 */
export const useSimulateIEventRegistryIssueTickets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEventRegistryAbi,
    functionName: 'issueTickets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"registerEvent"`
 */
export const useSimulateIEventRegistryRegisterEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEventRegistryAbi,
    functionName: 'registerEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iEventRegistryAbi}__ and `functionName` set to `"requestTicket"`
 */
export const useSimulateIEventRegistryRequestTicket =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iEventRegistryAbi,
    functionName: 'requestTicket',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEventRegistryAbi}__
 */
export const useWatchIEventRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iEventRegistryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEventRegistryAbi}__ and `eventName` set to `"BallotEntered"`
 */
export const useWatchIEventRegistryBallotEnteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEventRegistryAbi,
    eventName: 'BallotEntered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEventRegistryAbi}__ and `eventName` set to `"EventRegistered"`
 */
export const useWatchIEventRegistryEventRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEventRegistryAbi,
    eventName: 'EventRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEventRegistryAbi}__ and `eventName` set to `"TicketReceived"`
 */
export const useWatchIEventRegistryTicketReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEventRegistryAbi,
    eventName: 'TicketReceived',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iEventRegistryAbi}__ and `eventName` set to `"TicketsAllocated"`
 */
export const useWatchIEventRegistryTicketsAllocatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iEventRegistryAbi,
    eventName: 'TicketsAllocated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iNameResolverAbi}__
 */
export const useReadINameResolver = /*#__PURE__*/ createUseReadContract({
  abi: iNameResolverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iNameResolverAbi}__ and `functionName` set to `"name"`
 */
export const useReadINameResolverName = /*#__PURE__*/ createUseReadContract({
  abi: iNameResolverAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iNameResolverAbi}__
 */
export const useWatchINameResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iNameResolverAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iNameResolverAbi}__ and `eventName` set to `"NameChanged"`
 */
export const useWatchINameResolverNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iNameResolverAbi,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__
 */
export const useReadITicket = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadITicketBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadITicketGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadITicketIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iTicketAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"name"`
 */
export const useReadITicketName = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadITicketOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadITicketSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iTicketAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadITicketSymbol = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadITicketTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: iTicketAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__
 */
export const useWriteITicket = /*#__PURE__*/ createUseWriteContract({
  abi: iTicketAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteITicketApprove = /*#__PURE__*/ createUseWriteContract({
  abi: iTicketAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteITicketMint = /*#__PURE__*/ createUseWriteContract({
  abi: iTicketAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteITicketSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTicketAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteITicketSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iTicketAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteITicketTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: iTicketAbi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__
 */
export const useSimulateITicket = /*#__PURE__*/ createUseSimulateContract({
  abi: iTicketAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateITicketApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTicketAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateITicketMint = /*#__PURE__*/ createUseSimulateContract({
  abi: iTicketAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateITicketSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTicketAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateITicketSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTicketAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iTicketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateITicketTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iTicketAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTicketAbi}__
 */
export const useWatchITicketEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iTicketAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTicketAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchITicketApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTicketAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTicketAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchITicketApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTicketAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iTicketAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchITicketTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iTicketAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVersionableResolverAbi}__
 */
export const useReadIVersionableResolver = /*#__PURE__*/ createUseReadContract({
  abi: iVersionableResolverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVersionableResolverAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadIVersionableResolverRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: iVersionableResolverAbi,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVersionableResolverAbi}__
 */
export const useWatchIVersionableResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iVersionableResolverAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVersionableResolverAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchIVersionableResolverVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVersionableResolverAbi,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__
 */
export const useReadL2Resolver = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"ABI"`
 */
export const useReadL2ResolverAbi = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'ABI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"addr"`
 */
export const useReadL2ResolverAddr = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"contenthash"`
 */
export const useReadL2ResolverContenthash = /*#__PURE__*/ createUseReadContract(
  {
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'contenthash',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"dnsRecord"`
 */
export const useReadL2ResolverDnsRecord = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'dnsRecord',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"ens"`
 */
export const useReadL2ResolverEns = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'ens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"hasDNSRecords"`
 */
export const useReadL2ResolverHasDnsRecords =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'hasDNSRecords',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"interfaceImplementer"`
 */
export const useReadL2ResolverInterfaceImplementer =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'interfaceImplementer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"isApprovedFor"`
 */
export const useReadL2ResolverIsApprovedFor =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'isApprovedFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadL2ResolverIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"name"`
 */
export const useReadL2ResolverName = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"owner"`
 */
export const useReadL2ResolverOwner = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadL2ResolverOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"pubkey"`
 */
export const useReadL2ResolverPubkey = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'pubkey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadL2ResolverRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"registrarController"`
 */
export const useReadL2ResolverRegistrarController =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'registrarController',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"resolve"`
 */
export const useReadL2ResolverResolve = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'resolve',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"reverseRegistrar"`
 */
export const useReadL2ResolverReverseRegistrar =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'reverseRegistrar',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadL2ResolverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"text"`
 */
export const useReadL2ResolverText = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'text',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"zonehash"`
 */
export const useReadL2ResolverZonehash = /*#__PURE__*/ createUseReadContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'zonehash',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__
 */
export const useWriteL2Resolver = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteL2ResolverApprove = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteL2ResolverCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useWriteL2ResolverClearRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteL2ResolverCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"multicall"`
 */
export const useWriteL2ResolverMulticall = /*#__PURE__*/ createUseWriteContract(
  { abi: l2ResolverAbi, address: l2ResolverAddress, functionName: 'multicall' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"multicallWithNodeCheck"`
 */
export const useWriteL2ResolverMulticallWithNodeCheck =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'multicallWithNodeCheck',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteL2ResolverRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteL2ResolverRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setABI"`
 */
export const useWriteL2ResolverSetAbi = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'setABI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setAddr"`
 */
export const useWriteL2ResolverSetAddr = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'setAddr',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteL2ResolverSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setContenthash"`
 */
export const useWriteL2ResolverSetContenthash =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setContenthash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setDNSRecords"`
 */
export const useWriteL2ResolverSetDnsRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setDNSRecords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setInterface"`
 */
export const useWriteL2ResolverSetInterface =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteL2ResolverSetName = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'setName',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setPubkey"`
 */
export const useWriteL2ResolverSetPubkey = /*#__PURE__*/ createUseWriteContract(
  { abi: l2ResolverAbi, address: l2ResolverAddress, functionName: 'setPubkey' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setRegistrarController"`
 */
export const useWriteL2ResolverSetRegistrarController =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setRegistrarController',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setReverseRegistrar"`
 */
export const useWriteL2ResolverSetReverseRegistrar =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setReverseRegistrar',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setText"`
 */
export const useWriteL2ResolverSetText = /*#__PURE__*/ createUseWriteContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
  functionName: 'setText',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setZonehash"`
 */
export const useWriteL2ResolverSetZonehash =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setZonehash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteL2ResolverTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__
 */
export const useSimulateL2Resolver = /*#__PURE__*/ createUseSimulateContract({
  abi: l2ResolverAbi,
  address: l2ResolverAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateL2ResolverApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateL2ResolverCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useSimulateL2ResolverClearRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateL2ResolverCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"multicall"`
 */
export const useSimulateL2ResolverMulticall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'multicall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"multicallWithNodeCheck"`
 */
export const useSimulateL2ResolverMulticallWithNodeCheck =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'multicallWithNodeCheck',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateL2ResolverRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateL2ResolverRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setABI"`
 */
export const useSimulateL2ResolverSetAbi =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setABI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setAddr"`
 */
export const useSimulateL2ResolverSetAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateL2ResolverSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setContenthash"`
 */
export const useSimulateL2ResolverSetContenthash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setContenthash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setDNSRecords"`
 */
export const useSimulateL2ResolverSetDnsRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setDNSRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setInterface"`
 */
export const useSimulateL2ResolverSetInterface =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setInterface',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateL2ResolverSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setPubkey"`
 */
export const useSimulateL2ResolverSetPubkey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setPubkey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setRegistrarController"`
 */
export const useSimulateL2ResolverSetRegistrarController =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setRegistrarController',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setReverseRegistrar"`
 */
export const useSimulateL2ResolverSetReverseRegistrar =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setReverseRegistrar',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setText"`
 */
export const useSimulateL2ResolverSetText =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setText',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"setZonehash"`
 */
export const useSimulateL2ResolverSetZonehash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'setZonehash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link l2ResolverAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateL2ResolverTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__
 */
export const useWatchL2ResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"ABIChanged"`
 */
export const useWatchL2ResolverAbiChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'ABIChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"AddrChanged"`
 */
export const useWatchL2ResolverAddrChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'AddrChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"AddressChanged"`
 */
export const useWatchL2ResolverAddressChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'AddressChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchL2ResolverApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"Approved"`
 */
export const useWatchL2ResolverApprovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'Approved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"ContenthashChanged"`
 */
export const useWatchL2ResolverContenthashChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'ContenthashChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"DNSRecordChanged"`
 */
export const useWatchL2ResolverDnsRecordChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'DNSRecordChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"DNSRecordDeleted"`
 */
export const useWatchL2ResolverDnsRecordDeletedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'DNSRecordDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"DNSZonehashChanged"`
 */
export const useWatchL2ResolverDnsZonehashChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'DNSZonehashChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"InterfaceChanged"`
 */
export const useWatchL2ResolverInterfaceChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'InterfaceChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"NameChanged"`
 */
export const useWatchL2ResolverNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchL2ResolverOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchL2ResolverOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchL2ResolverOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"PubkeyChanged"`
 */
export const useWatchL2ResolverPubkeyChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'PubkeyChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"RegistrarControllerUpdated"`
 */
export const useWatchL2ResolverRegistrarControllerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'RegistrarControllerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"ReverseRegistrarUpdated"`
 */
export const useWatchL2ResolverReverseRegistrarUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'ReverseRegistrarUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"TextChanged"`
 */
export const useWatchL2ResolverTextChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'TextChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link l2ResolverAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchL2ResolverVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: l2ResolverAbi,
    address: l2ResolverAddress,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useReadMockErc20 = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadMockErc20DomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: mockErc20Abi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadMockErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadMockErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"nonces"`
 */
export const useReadMockErc20Nonces = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadMockErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: mockErc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useWriteMockErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteMockErc20Initialize = /*#__PURE__*/ createUseWriteContract(
  { abi: mockErc20Abi, functionName: 'initialize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"permit"`
 */
export const useWriteMockErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteMockErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockErc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useSimulateMockErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: mockErc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockErc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateMockErc20Initialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"permit"`
 */
export const useSimulateMockErc20Permit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateMockErc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__
 */
export const useWatchMockErc20Event = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: mockErc20Abi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useReadMockErc721 = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadMockErc721GetApproved = /*#__PURE__*/ createUseReadContract(
  { abi: mockErc721Abi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadMockErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: mockErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadMockErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadMockErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMockErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: mockErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadMockErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: mockErc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useWriteMockErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: mockErc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteMockErc721Initialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useSimulateMockErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: mockErc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateMockErc721Initialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateMockErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateMockErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__
 */
export const useWatchMockErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: mockErc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchMockErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockNameResolverAbi}__
 */
export const useReadMockNameResolver = /*#__PURE__*/ createUseReadContract({
  abi: mockNameResolverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"name"`
 */
export const useReadMockNameResolverName = /*#__PURE__*/ createUseReadContract({
  abi: mockNameResolverAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadMockNameResolverRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: mockNameResolverAbi,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMockNameResolverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: mockNameResolverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockNameResolverAbi}__
 */
export const useWriteMockNameResolver = /*#__PURE__*/ createUseWriteContract({
  abi: mockNameResolverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useWriteMockNameResolverClearRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockNameResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteMockNameResolverSetName =
  /*#__PURE__*/ createUseWriteContract({
    abi: mockNameResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockNameResolverAbi}__
 */
export const useSimulateMockNameResolver =
  /*#__PURE__*/ createUseSimulateContract({ abi: mockNameResolverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useSimulateMockNameResolverClearRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockNameResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockNameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateMockNameResolverSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mockNameResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockNameResolverAbi}__
 */
export const useWatchMockNameResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: mockNameResolverAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockNameResolverAbi}__ and `eventName` set to `"NameChanged"`
 */
export const useWatchMockNameResolverNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockNameResolverAbi,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockNameResolverAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchMockNameResolverVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: mockNameResolverAbi,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useReadNameResolver = /*#__PURE__*/ createUseReadContract({
  abi: nameResolverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"name"`
 */
export const useReadNameResolverName = /*#__PURE__*/ createUseReadContract({
  abi: nameResolverAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadNameResolverRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: nameResolverAbi,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadNameResolverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: nameResolverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useWriteNameResolver = /*#__PURE__*/ createUseWriteContract({
  abi: nameResolverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useWriteNameResolverClearRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: nameResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteNameResolverSetName = /*#__PURE__*/ createUseWriteContract(
  { abi: nameResolverAbi, functionName: 'setName' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useSimulateNameResolver = /*#__PURE__*/ createUseSimulateContract({
  abi: nameResolverAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useSimulateNameResolverClearRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameResolverAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameResolverAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateNameResolverSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameResolverAbi,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameResolverAbi}__
 */
export const useWatchNameResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: nameResolverAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameResolverAbi}__ and `eventName` set to `"NameChanged"`
 */
export const useWatchNameResolverNameChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameResolverAbi,
    eventName: 'NameChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameResolverAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchNameResolverVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameResolverAbi,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useReadRegistry = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadRegistryIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: registryAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"recordExists"`
 */
export const useReadRegistryRecordExists = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'recordExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"resolver"`
 */
export const useReadRegistryResolver = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'resolver',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"ttl"`
 */
export const useReadRegistryTtl = /*#__PURE__*/ createUseReadContract({
  abi: registryAbi,
  functionName: 'ttl',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useWriteRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteRegistrySetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setOwner"`
 */
export const useWriteRegistrySetOwner = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
  functionName: 'setOwner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setRecord"`
 */
export const useWriteRegistrySetRecord = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
  functionName: 'setRecord',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setResolver"`
 */
export const useWriteRegistrySetResolver = /*#__PURE__*/ createUseWriteContract(
  { abi: registryAbi, functionName: 'setResolver' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useWriteRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useWriteRegistrySetSubnodeRecord =
  /*#__PURE__*/ createUseWriteContract({
    abi: registryAbi,
    functionName: 'setSubnodeRecord',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTTL"`
 */
export const useWriteRegistrySetTtl = /*#__PURE__*/ createUseWriteContract({
  abi: registryAbi,
  functionName: 'setTTL',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__
 */
export const useSimulateRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: registryAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateRegistrySetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setOwner"`
 */
export const useSimulateRegistrySetOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setRecord"`
 */
export const useSimulateRegistrySetRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setRecord',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setResolver"`
 */
export const useSimulateRegistrySetResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 */
export const useSimulateRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setSubnodeRecord"`
 */
export const useSimulateRegistrySetSubnodeRecord =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setSubnodeRecord',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registryAbi}__ and `functionName` set to `"setTTL"`
 */
export const useSimulateRegistrySetTtl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registryAbi,
    functionName: 'setTTL',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__
 */
export const useWatchRegistryEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: registryAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchRegistryApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"NewOwner"`
 */
export const useWatchRegistryNewOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'NewOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"NewResolver"`
 */
export const useWatchRegistryNewResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'NewResolver',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"NewTTL"`
 */
export const useWatchRegistryNewTtlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'NewTTL',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registryAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchRegistryTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registryAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link resolverBaseAbi}__
 */
export const useReadResolverBase = /*#__PURE__*/ createUseReadContract({
  abi: resolverBaseAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link resolverBaseAbi}__ and `functionName` set to `"recordVersions"`
 */
export const useReadResolverBaseRecordVersions =
  /*#__PURE__*/ createUseReadContract({
    abi: resolverBaseAbi,
    functionName: 'recordVersions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link resolverBaseAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadResolverBaseSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: resolverBaseAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link resolverBaseAbi}__
 */
export const useWriteResolverBase = /*#__PURE__*/ createUseWriteContract({
  abi: resolverBaseAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link resolverBaseAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useWriteResolverBaseClearRecords =
  /*#__PURE__*/ createUseWriteContract({
    abi: resolverBaseAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link resolverBaseAbi}__
 */
export const useSimulateResolverBase = /*#__PURE__*/ createUseSimulateContract({
  abi: resolverBaseAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link resolverBaseAbi}__ and `functionName` set to `"clearRecords"`
 */
export const useSimulateResolverBaseClearRecords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: resolverBaseAbi,
    functionName: 'clearRecords',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link resolverBaseAbi}__
 */
export const useWatchResolverBaseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: resolverBaseAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link resolverBaseAbi}__ and `eventName` set to `"VersionChanged"`
 */
export const useWatchResolverBaseVersionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: resolverBaseAbi,
    eventName: 'VersionChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useReadReverseRegistrar = /*#__PURE__*/ createUseReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"controllers"`
 */
export const useReadReverseRegistrarControllers =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'controllers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"defaultResolver"`
 */
export const useReadReverseRegistrarDefaultResolver =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'defaultResolver',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"node"`
 */
export const useReadReverseRegistrarNode = /*#__PURE__*/ createUseReadContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
  functionName: 'node',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"owner"`
 */
export const useReadReverseRegistrarOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'owner',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadReverseRegistrarOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"registry"`
 */
export const useReadReverseRegistrarRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'registry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"reverseNode"`
 */
export const useReadReverseRegistrarReverseNode =
  /*#__PURE__*/ createUseReadContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'reverseNode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useWriteReverseRegistrar = /*#__PURE__*/ createUseWriteContract({
  abi: reverseRegistrarAbi,
  address: reverseRegistrarAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteReverseRegistrarCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteReverseRegistrarClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForBaseAddr"`
 */
export const useWriteReverseRegistrarClaimForBaseAddr =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimForBaseAddr',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const useWriteReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteReverseRegistrarCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteReverseRegistrarRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setControllerApproval"`
 */
export const useWriteReverseRegistrarSetControllerApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setControllerApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const useWriteReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const useWriteReverseRegistrarSetName =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const useWriteReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useSimulateReverseRegistrar =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateReverseRegistrarCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateReverseRegistrarClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimForBaseAddr"`
 */
export const useSimulateReverseRegistrarClaimForBaseAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimForBaseAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"claimWithResolver"`
 */
export const useSimulateReverseRegistrarClaimWithResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'claimWithResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateReverseRegistrarCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateReverseRegistrarRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateReverseRegistrarRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setControllerApproval"`
 */
export const useSimulateReverseRegistrarSetControllerApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setControllerApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setDefaultResolver"`
 */
export const useSimulateReverseRegistrarSetDefaultResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setDefaultResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setName"`
 */
export const useSimulateReverseRegistrarSetName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"setNameForAddr"`
 */
export const useSimulateReverseRegistrarSetNameForAddr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'setNameForAddr',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateReverseRegistrarTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__
 */
export const useWatchReverseRegistrarEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"BaseReverseClaimed"`
 */
export const useWatchReverseRegistrarBaseReverseClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'BaseReverseClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"ControllerApprovalChanged"`
 */
export const useWatchReverseRegistrarControllerApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'ControllerApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"DefaultResolverChanged"`
 */
export const useWatchReverseRegistrarDefaultResolverChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'DefaultResolverChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchReverseRegistrarOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchReverseRegistrarOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reverseRegistrarAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchReverseRegistrarOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reverseRegistrarAbi,
    address: reverseRegistrarAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__
 */
export const useReadScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: scriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useReadStdAssertions = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdAssertionsAbi}__ and `functionName` set to `"failed"`
 */
export const useReadStdAssertionsFailed = /*#__PURE__*/ createUseReadContract({
  abi: stdAssertionsAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__
 */
export const useWatchStdAssertionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdAssertionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log"`
 */
export const useWatchStdAssertionsLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchStdAssertionsLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchStdAssertionsLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchStdAssertionsLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchStdAssertionsLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchStdAssertionsLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchStdAssertionsLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchStdAssertionsLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchStdAssertionsLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchStdAssertionsLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchStdAssertionsLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchStdAssertionsLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchStdAssertionsLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchStdAssertionsLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchStdAssertionsLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchStdAssertionsLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchStdAssertionsLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdAssertionsAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchStdAssertionsLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdAssertionsAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__
 */
export const useReadStdInvariant = /*#__PURE__*/ createUseReadContract({
  abi: stdInvariantAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadStdInvariantExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadStdInvariantExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadStdInvariantExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadStdInvariantExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadStdInvariantTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadStdInvariantTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadStdInvariantTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadStdInvariantTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadStdInvariantTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdInvariantAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadStdInvariantTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: stdInvariantAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__
 */
export const useReadTest = /*#__PURE__*/ createUseReadContract({ abi: testAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadTestExcludeArtifacts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeArtifacts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadTestExcludeContracts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeContracts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadTestExcludeSelectors = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeSelectors',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadTestExcludeSenders = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'excludeSenders',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"failed"`
 */
export const useReadTestFailed = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: testAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadTestTargetArtifacts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadTestTargetContracts = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadTestTargetInterfaces = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetInterfaces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadTestTargetSelectors = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadTestTargetSenders = /*#__PURE__*/ createUseReadContract({
  abi: testAbi,
  functionName: 'targetSenders',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__
 */
export const useWatchTestEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log"`
 */
export const useWatchTestLogEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
  eventName: 'log',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchTestLogsEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: testAbi,
  eventName: 'logs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__
 */
export const useReadTicket = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadTicketBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadTicketGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadTicketIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"name"`
 */
export const useReadTicketName = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadTicketOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadTicketSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadTicketSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadTicketTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: ticketAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__
 */
export const useWriteTicket = /*#__PURE__*/ createUseWriteContract({
  abi: ticketAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteTicketApprove = /*#__PURE__*/ createUseWriteContract({
  abi: ticketAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteTicketMint = /*#__PURE__*/ createUseWriteContract({
  abi: ticketAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteTicketSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteTicketSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteTicketTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ticketAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__
 */
export const useSimulateTicket = /*#__PURE__*/ createUseSimulateContract({
  abi: ticketAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateTicketApprove = /*#__PURE__*/ createUseSimulateContract(
  { abi: ticketAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateTicketMint = /*#__PURE__*/ createUseSimulateContract({
  abi: ticketAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateTicketSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateTicketSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateTicketTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketAbi}__
 */
export const useWatchTicketEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ticketAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchTicketApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchTicketApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchTicketTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useReadVm = /*#__PURE__*/ createUseReadContract({ abi: vmAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"activeFork"`
 */
export const useReadVmActiveFork = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'activeFork',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertApproxEqAbs"`
 */
export const useReadVmAssertApproxEqAbs = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertApproxEqAbs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertApproxEqAbsDecimal"`
 */
export const useReadVmAssertApproxEqAbsDecimal =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'assertApproxEqAbsDecimal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertApproxEqRel"`
 */
export const useReadVmAssertApproxEqRel = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertApproxEqRel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertApproxEqRelDecimal"`
 */
export const useReadVmAssertApproxEqRelDecimal =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'assertApproxEqRelDecimal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertEq"`
 */
export const useReadVmAssertEq = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertEq',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertEqDecimal"`
 */
export const useReadVmAssertEqDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertEqDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertFalse"`
 */
export const useReadVmAssertFalse = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertFalse',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertGe"`
 */
export const useReadVmAssertGe = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertGe',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertGeDecimal"`
 */
export const useReadVmAssertGeDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertGeDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertGt"`
 */
export const useReadVmAssertGt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertGt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertGtDecimal"`
 */
export const useReadVmAssertGtDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertGtDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertLe"`
 */
export const useReadVmAssertLe = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertLe',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertLeDecimal"`
 */
export const useReadVmAssertLeDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertLeDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertLt"`
 */
export const useReadVmAssertLt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertLt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertLtDecimal"`
 */
export const useReadVmAssertLtDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertLtDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertNotEq"`
 */
export const useReadVmAssertNotEq = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertNotEq',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertNotEqDecimal"`
 */
export const useReadVmAssertNotEqDecimal = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertNotEqDecimal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assertTrue"`
 */
export const useReadVmAssertTrue = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assertTrue',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ensNamehash"`
 */
export const useReadVmEnsNamehash = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'ensNamehash',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envExists"`
 */
export const useReadVmEnvExists = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadVmEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlobBaseFee"`
 */
export const useReadVmGetBlobBaseFee = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlobBaseFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlobhashes"`
 */
export const useReadVmGetBlobhashes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlobhashes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmGetBlockTimestamp = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getBlockTimestamp',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmGetDeployedCode = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getDeployedCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getFoundryVersion"`
 */
export const useReadVmGetFoundryVersion = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getFoundryVersion',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadVmGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"indexOf"`
 */
export const useReadVmIndexOf = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'indexOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isContext"`
 */
export const useReadVmIsContext = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'isContext',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isPersistent"`
 */
export const useReadVmIsPersistent = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'isPersistent',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExistsJson"`
 */
export const useReadVmKeyExistsJson = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'keyExistsJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"keyExistsToml"`
 */
export const useReadVmKeyExistsToml = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'keyExistsToml',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"lastCallGas"`
 */
export const useReadVmLastCallGas = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'lastCallGas',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmParseJsonAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmParseJsonBoolArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBoolArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmParseJsonBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmParseJsonBytesArray = /*#__PURE__*/ createUseReadContract(
  { abi: vmAbi, functionName: 'parseJsonBytesArray' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmParseJsonIntArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonIntArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmParseJsonString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonType"`
 */
export const useReadVmParseJsonType = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonType',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonTypeArray"`
 */
export const useReadVmParseJsonTypeArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonTypeArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmParseJsonUintArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseJsonUintArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseToml"`
 */
export const useReadVmParseToml = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseToml',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlAddress"`
 */
export const useReadVmParseTomlAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlAddressArray"`
 */
export const useReadVmParseTomlAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseTomlAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBool"`
 */
export const useReadVmParseTomlBool = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBoolArray"`
 */
export const useReadVmParseTomlBoolArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlBoolArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBytes"`
 */
export const useReadVmParseTomlBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBytes32"`
 */
export const useReadVmParseTomlBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBytes32Array"`
 */
export const useReadVmParseTomlBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseTomlBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlBytesArray"`
 */
export const useReadVmParseTomlBytesArray = /*#__PURE__*/ createUseReadContract(
  { abi: vmAbi, functionName: 'parseTomlBytesArray' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlInt"`
 */
export const useReadVmParseTomlInt = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlIntArray"`
 */
export const useReadVmParseTomlIntArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlIntArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlKeys"`
 */
export const useReadVmParseTomlKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlString"`
 */
export const useReadVmParseTomlString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlStringArray"`
 */
export const useReadVmParseTomlStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmAbi,
    functionName: 'parseTomlStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlUint"`
 */
export const useReadVmParseTomlUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseTomlUintArray"`
 */
export const useReadVmParseTomlUintArray = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseTomlUintArray',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"replace"`
 */
export const useReadVmReplace = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'replace',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useReadVmSerializeJsonType = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'serializeJsonType',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSign = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"signCompact"`
 */
export const useReadVmSignCompact = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'signCompact',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadVmSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"split"`
 */
export const useReadVmSplit = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'split',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadVmToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadVmToBase64Url = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toBase64URL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toLowercase"`
 */
export const useReadVmToLowercase = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toLowercase',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmToString = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"toUppercase"`
 */
export const useReadVmToUppercase = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'toUppercase',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"trim"`
 */
export const useReadVmTrim = /*#__PURE__*/ createUseReadContract({
  abi: vmAbi,
  functionName: 'trim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useWriteVm = /*#__PURE__*/ createUseWriteContract({ abi: vmAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useWriteVmAllowCheatcodes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'allowCheatcodes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"blobBaseFee"`
 */
export const useWriteVmBlobBaseFee = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'blobBaseFee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"blobhashes"`
 */
export const useWriteVmBlobhashes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'blobhashes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcastRawTransaction"`
 */
export const useWriteVmBroadcastRawTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'broadcastRawTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useWriteVmChainId = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useWriteVmClearMockedCalls = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'clearMockedCalls',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useWriteVmCoinbase = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useWriteVmCreateFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useWriteVmCreateSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createSelectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useWriteVmDeal = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useWriteVmDeleteSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useWriteVmDeleteSnapshots = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deleteSnapshots',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deployCode"`
 */
export const useWriteVmDeployCode = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'deployCode',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useWriteVmDifficulty = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useWriteVmDumpState = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'dumpState',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useWriteVmEtch = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useWriteVmExpectCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useWriteVmExpectCallMinGas = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectCallMinGas',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useWriteVmExpectEmit = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmitAnonymous"`
 */
export const useWriteVmExpectEmitAnonymous =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'expectEmitAnonymous',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useWriteVmExpectRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useWriteVmExpectSafeMemory = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'expectSafeMemory',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useWriteVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useWriteVmFee = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmGetMappingLength = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingLength',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmGetMappingSlotAt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getMappingSlotAt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmGetRecordedLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'getRecordedLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useWriteVmLoadAllocs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useWriteVmMakePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'makePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useWriteVmMockCall = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useWriteVmMockCallRevert = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'mockCallRevert',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmPauseGasMetering = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'pauseGasMetering',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useWriteVmPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useWriteVmPrevrandao = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prompt"`
 */
export const useWriteVmPrompt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'prompt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptAddress"`
 */
export const useWriteVmPromptAddress = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'promptAddress',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptSecret"`
 */
export const useWriteVmPromptSecret = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'promptSecret',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptSecretUint"`
 */
export const useWriteVmPromptSecretUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'promptSecretUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptUint"`
 */
export const useWriteVmPromptUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'promptUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"randomAddress"`
 */
export const useWriteVmRandomAddress = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'randomAddress',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"randomUint"`
 */
export const useWriteVmRandomUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'randomUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useWriteVmReadCallers = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'readCallers',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useWriteVmResetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmResumeGasMetering = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'resumeGasMetering' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useWriteVmRevertTo = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useWriteVmRevertToAndDelete = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'revertToAndDelete' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useWriteVmRevokePersistent = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'revokePersistent',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useWriteVmRoll = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useWriteVmRollFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useWriteVmSelectFork = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSerializeAddress = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeAddress',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSerializeBool = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSerializeBytes = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSerializeBytes32 = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeBytes32',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSerializeJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useWriteVmSerializeJsonType = /*#__PURE__*/ createUseWriteContract(
  { abi: vmAbi, functionName: 'serializeJsonType' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSerializeString = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeString',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSerializeUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'serializeUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUintToHex"`
 */
export const useWriteVmSerializeUintToHex =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'serializeUintToHex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setBlockhash"`
 */
export const useWriteVmSetBlockhash = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setBlockhash',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useWriteVmSetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useWriteVmSetNonceUnsafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'setNonceUnsafe',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"signCompact"`
 */
export const useWriteVmSignCompact = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'signCompact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useWriteVmSkip = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useWriteVmSnapshot = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmStartBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useWriteVmStartPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmStopBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopBroadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopExpectSafeMemory"`
 */
export const useWriteVmStopExpectSafeMemory =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopExpectSafeMemory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useWriteVmStopPrank = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useWriteVmStore = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useWriteVmTransact = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useWriteVmTxGasPrice = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useWriteVmWarp = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmWriteFileBinary = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeFileBinary',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeToml"`
 */
export const useWriteVmWriteToml = /*#__PURE__*/ createUseWriteContract({
  abi: vmAbi,
  functionName: 'writeToml',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__
 */
export const useSimulateVm = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmAccesses = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"allowCheatcodes"`
 */
export const useSimulateVmAllowCheatcodes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'allowCheatcodes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"blobBaseFee"`
 */
export const useSimulateVmBlobBaseFee = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'blobBaseFee' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"blobhashes"`
 */
export const useSimulateVmBlobhashes = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'blobhashes',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmBreakpoint = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmBroadcast = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"broadcastRawTransaction"`
 */
export const useSimulateVmBroadcastRawTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'broadcastRawTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"chainId"`
 */
export const useSimulateVmChainId = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'chainId',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"clearMockedCalls"`
 */
export const useSimulateVmClearMockedCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'clearMockedCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmCloseFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"coinbase"`
 */
export const useSimulateVmCoinbase = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'coinbase',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmCopyFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmCreateDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createFork"`
 */
export const useSimulateVmCreateFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'createFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createSelectFork"`
 */
export const useSimulateVmCreateSelectFork =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createSelectFork',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deal"`
 */
export const useSimulateVmDeal = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'deal',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshot"`
 */
export const useSimulateVmDeleteSnapshot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deleteSnapshots"`
 */
export const useSimulateVmDeleteSnapshots =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'deleteSnapshots',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"deployCode"`
 */
export const useSimulateVmDeployCode = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'deployCode',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"difficulty"`
 */
export const useSimulateVmDifficulty = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'difficulty',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"dumpState"`
 */
export const useSimulateVmDumpState = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'dumpState',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"etch"`
 */
export const useSimulateVmEtch = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'etch',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmEthGetLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCall"`
 */
export const useSimulateVmExpectCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectCallMinGas"`
 */
export const useSimulateVmExpectCallMinGas =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectCallMinGas',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmit"`
 */
export const useSimulateVmExpectEmit = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'expectEmit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectEmitAnonymous"`
 */
export const useSimulateVmExpectEmitAnonymous =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectEmitAnonymous',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectRevert"`
 */
export const useSimulateVmExpectRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemory"`
 */
export const useSimulateVmExpectSafeMemory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"expectSafeMemoryCall"`
 */
export const useSimulateVmExpectSafeMemoryCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'expectSafeMemoryCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"fee"`
 */
export const useSimulateVmFee = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'fee',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmGetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"loadAllocs"`
 */
export const useSimulateVmLoadAllocs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'loadAllocs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"makePersistent"`
 */
export const useSimulateVmMakePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'makePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCall"`
 */
export const useSimulateVmMockCall = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'mockCall',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"mockCallRevert"`
 */
export const useSimulateVmMockCallRevert =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'mockCallRevert',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmPauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prank"`
 */
export const useSimulateVmPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prevrandao"`
 */
export const useSimulateVmPrevrandao = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prevrandao',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"prompt"`
 */
export const useSimulateVmPrompt = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'prompt',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptAddress"`
 */
export const useSimulateVmPromptAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'promptAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptSecret"`
 */
export const useSimulateVmPromptSecret =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'promptSecret',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptSecretUint"`
 */
export const useSimulateVmPromptSecretUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'promptSecretUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"promptUint"`
 */
export const useSimulateVmPromptUint = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'promptUint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"randomAddress"`
 */
export const useSimulateVmRandomAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'randomAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"randomUint"`
 */
export const useSimulateVmRandomUint = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'randomUint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"readCallers"`
 */
export const useSimulateVmReadCallers = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'readCallers' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmRecordLogs = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmRememberKey = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'rememberKey' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmRemoveDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmRemoveFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resetNonce"`
 */
export const useSimulateVmResetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'resetNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertTo"`
 */
export const useSimulateVmRevertTo = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'revertTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revertToAndDelete"`
 */
export const useSimulateVmRevertToAndDelete =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revertToAndDelete',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"revokePersistent"`
 */
export const useSimulateVmRevokePersistent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'revokePersistent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"roll"`
 */
export const useSimulateVmRoll = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'roll',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rollFork"`
 */
export const useSimulateVmRollFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rollFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"selectFork"`
 */
export const useSimulateVmSelectFork = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'selectFork',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useSimulateVmSerializeJsonType =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeJsonType',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"serializeUintToHex"`
 */
export const useSimulateVmSerializeUintToHex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'serializeUintToHex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setBlockhash"`
 */
export const useSimulateVmSetBlockhash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'setBlockhash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonce"`
 */
export const useSimulateVmSetNonce = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'setNonce',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"setNonceUnsafe"`
 */
export const useSimulateVmSetNonceUnsafe =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'setNonceUnsafe',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"signCompact"`
 */
export const useSimulateVmSignCompact = /*#__PURE__*/ createUseSimulateContract(
  { abi: vmAbi, functionName: 'signCompact' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"skip"`
 */
export const useSimulateVmSkip = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"snapshot"`
 */
export const useSimulateVmSnapshot = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'snapshot',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startPrank"`
 */
export const useSimulateVmStartPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'startPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopExpectSafeMemory"`
 */
export const useSimulateVmStopExpectSafeMemory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopExpectSafeMemory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"stopPrank"`
 */
export const useSimulateVmStopPrank = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'stopPrank',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"store"`
 */
export const useSimulateVmStore = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'store',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"transact"`
 */
export const useSimulateVmTransact = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'transact',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"txGasPrice"`
 */
export const useSimulateVmTxGasPrice = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'txGasPrice',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmUnixTime = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"warp"`
 */
export const useSimulateVmWarp = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'warp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmWriteFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmWriteJson = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmWriteLine = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmAbi}__ and `functionName` set to `"writeToml"`
 */
export const useSimulateVmWriteToml = /*#__PURE__*/ createUseSimulateContract({
  abi: vmAbi,
  functionName: 'writeToml',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useReadVmSafe = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"addr"`
 */
export const useReadVmSafeAddr = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'addr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertApproxEqAbs"`
 */
export const useReadVmSafeAssertApproxEqAbs =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'assertApproxEqAbs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertApproxEqAbsDecimal"`
 */
export const useReadVmSafeAssertApproxEqAbsDecimal =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'assertApproxEqAbsDecimal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertApproxEqRel"`
 */
export const useReadVmSafeAssertApproxEqRel =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'assertApproxEqRel',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertApproxEqRelDecimal"`
 */
export const useReadVmSafeAssertApproxEqRelDecimal =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'assertApproxEqRelDecimal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertEq"`
 */
export const useReadVmSafeAssertEq = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertEq',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertEqDecimal"`
 */
export const useReadVmSafeAssertEqDecimal = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'assertEqDecimal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertFalse"`
 */
export const useReadVmSafeAssertFalse = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertFalse',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertGe"`
 */
export const useReadVmSafeAssertGe = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertGe',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertGeDecimal"`
 */
export const useReadVmSafeAssertGeDecimal = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'assertGeDecimal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertGt"`
 */
export const useReadVmSafeAssertGt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertGt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertGtDecimal"`
 */
export const useReadVmSafeAssertGtDecimal = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'assertGtDecimal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertLe"`
 */
export const useReadVmSafeAssertLe = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertLe',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertLeDecimal"`
 */
export const useReadVmSafeAssertLeDecimal = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'assertLeDecimal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertLt"`
 */
export const useReadVmSafeAssertLt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertLt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertLtDecimal"`
 */
export const useReadVmSafeAssertLtDecimal = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'assertLtDecimal' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertNotEq"`
 */
export const useReadVmSafeAssertNotEq = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertNotEq',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertNotEqDecimal"`
 */
export const useReadVmSafeAssertNotEqDecimal =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'assertNotEqDecimal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assertTrue"`
 */
export const useReadVmSafeAssertTrue = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assertTrue',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"assume"`
 */
export const useReadVmSafeAssume = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'assume',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreate2Address"`
 */
export const useReadVmSafeComputeCreate2Address =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreate2Address',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"computeCreateAddress"`
 */
export const useReadVmSafeComputeCreateAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'computeCreateAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deriveKey"`
 */
export const useReadVmSafeDeriveKey = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'deriveKey',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ensNamehash"`
 */
export const useReadVmSafeEnsNamehash = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'ensNamehash',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envAddress"`
 */
export const useReadVmSafeEnvAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBool"`
 */
export const useReadVmSafeEnvBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes"`
 */
export const useReadVmSafeEnvBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envBytes32"`
 */
export const useReadVmSafeEnvBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envExists"`
 */
export const useReadVmSafeEnvExists = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envInt"`
 */
export const useReadVmSafeEnvInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envOr"`
 */
export const useReadVmSafeEnvOr = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envOr',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envString"`
 */
export const useReadVmSafeEnvString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"envUint"`
 */
export const useReadVmSafeEnvUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'envUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"fsMetadata"`
 */
export const useReadVmSafeFsMetadata = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'fsMetadata',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlobBaseFee"`
 */
export const useReadVmSafeGetBlobBaseFee = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlobBaseFee',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadVmSafeGetBlockNumber = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getBlockTimestamp"`
 */
export const useReadVmSafeGetBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'getBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getCode"`
 */
export const useReadVmSafeGetCode = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getCode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getDeployedCode"`
 */
export const useReadVmSafeGetDeployedCode = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'getDeployedCode' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getFoundryVersion"`
 */
export const useReadVmSafeGetFoundryVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'getFoundryVersion',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getLabel"`
 */
export const useReadVmSafeGetLabel = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getLabel',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useReadVmSafeGetNonce = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"indexOf"`
 */
export const useReadVmSafeIndexOf = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'indexOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isContext"`
 */
export const useReadVmSafeIsContext = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'isContext',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExists"`
 */
export const useReadVmSafeKeyExists = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExists',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExistsJson"`
 */
export const useReadVmSafeKeyExistsJson = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExistsJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"keyExistsToml"`
 */
export const useReadVmSafeKeyExistsToml = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'keyExistsToml',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"lastCallGas"`
 */
export const useReadVmSafeLastCallGas = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'lastCallGas',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"load"`
 */
export const useReadVmSafeLoad = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'load',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseAddress"`
 */
export const useReadVmSafeParseAddress = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBool"`
 */
export const useReadVmSafeParseBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes"`
 */
export const useReadVmSafeParseBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseBytes32"`
 */
export const useReadVmSafeParseBytes32 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseBytes32',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseInt"`
 */
export const useReadVmSafeParseInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJson"`
 */
export const useReadVmSafeParseJson = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJson',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddress"`
 */
export const useReadVmSafeParseJsonAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonAddressArray"`
 */
export const useReadVmSafeParseJsonAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBool"`
 */
export const useReadVmSafeParseJsonBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBoolArray"`
 */
export const useReadVmSafeParseJsonBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes"`
 */
export const useReadVmSafeParseJsonBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32"`
 */
export const useReadVmSafeParseJsonBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytes32Array"`
 */
export const useReadVmSafeParseJsonBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonBytesArray"`
 */
export const useReadVmSafeParseJsonBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonInt"`
 */
export const useReadVmSafeParseJsonInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonIntArray"`
 */
export const useReadVmSafeParseJsonIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonKeys"`
 */
export const useReadVmSafeParseJsonKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonString"`
 */
export const useReadVmSafeParseJsonString = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'parseJsonString' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonStringArray"`
 */
export const useReadVmSafeParseJsonStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonType"`
 */
export const useReadVmSafeParseJsonType = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonType',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonTypeArray"`
 */
export const useReadVmSafeParseJsonTypeArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonTypeArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUint"`
 */
export const useReadVmSafeParseJsonUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseJsonUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseJsonUintArray"`
 */
export const useReadVmSafeParseJsonUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseJsonUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseToml"`
 */
export const useReadVmSafeParseToml = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseToml',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlAddress"`
 */
export const useReadVmSafeParseTomlAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlAddressArray"`
 */
export const useReadVmSafeParseTomlAddressArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlAddressArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBool"`
 */
export const useReadVmSafeParseTomlBool = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseTomlBool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBoolArray"`
 */
export const useReadVmSafeParseTomlBoolArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlBoolArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBytes"`
 */
export const useReadVmSafeParseTomlBytes = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseTomlBytes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBytes32"`
 */
export const useReadVmSafeParseTomlBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBytes32Array"`
 */
export const useReadVmSafeParseTomlBytes32Array =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlBytes32Array',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlBytesArray"`
 */
export const useReadVmSafeParseTomlBytesArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlBytesArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlInt"`
 */
export const useReadVmSafeParseTomlInt = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseTomlInt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlIntArray"`
 */
export const useReadVmSafeParseTomlIntArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlIntArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlKeys"`
 */
export const useReadVmSafeParseTomlKeys = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseTomlKeys',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlString"`
 */
export const useReadVmSafeParseTomlString = /*#__PURE__*/ createUseReadContract(
  { abi: vmSafeAbi, functionName: 'parseTomlString' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlStringArray"`
 */
export const useReadVmSafeParseTomlStringArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlStringArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlUint"`
 */
export const useReadVmSafeParseTomlUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseTomlUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseTomlUintArray"`
 */
export const useReadVmSafeParseTomlUintArray =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'parseTomlUintArray',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"parseUint"`
 */
export const useReadVmSafeParseUint = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'parseUint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"projectRoot"`
 */
export const useReadVmSafeProjectRoot = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'projectRoot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readDir"`
 */
export const useReadVmSafeReadDir = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readDir',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFile"`
 */
export const useReadVmSafeReadFile = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFile',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readFileBinary"`
 */
export const useReadVmSafeReadFileBinary = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readFileBinary',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLine"`
 */
export const useReadVmSafeReadLine = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLine',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"readLink"`
 */
export const useReadVmSafeReadLink = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'readLink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"replace"`
 */
export const useReadVmSafeReplace = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'replace',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrl"`
 */
export const useReadVmSafeRpcUrl = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrl',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrlStructs"`
 */
export const useReadVmSafeRpcUrlStructs = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrlStructs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpcUrls"`
 */
export const useReadVmSafeRpcUrls = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'rpcUrls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useReadVmSafeSerializeJsonType =
  /*#__PURE__*/ createUseReadContract({
    abi: vmSafeAbi,
    functionName: 'serializeJsonType',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useReadVmSafeSign = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"signCompact"`
 */
export const useReadVmSafeSignCompact = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'signCompact',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"signP256"`
 */
export const useReadVmSafeSignP256 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'signP256',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"split"`
 */
export const useReadVmSafeSplit = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'split',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toBase64"`
 */
export const useReadVmSafeToBase64 = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toBase64',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toBase64URL"`
 */
export const useReadVmSafeToBase64Url = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toBase64URL',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toLowercase"`
 */
export const useReadVmSafeToLowercase = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toLowercase',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toString"`
 */
export const useReadVmSafeToString = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toString',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"toUppercase"`
 */
export const useReadVmSafeToUppercase = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'toUppercase',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"trim"`
 */
export const useReadVmSafeTrim = /*#__PURE__*/ createUseReadContract({
  abi: vmSafeAbi,
  functionName: 'trim',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useWriteVmSafe = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useWriteVmSafeAccesses = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'accesses',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useWriteVmSafeBreakpoint = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'breakpoint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useWriteVmSafeBroadcast = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'broadcast',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcastRawTransaction"`
 */
export const useWriteVmSafeBroadcastRawTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'broadcastRawTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useWriteVmSafeCloseFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'closeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useWriteVmSafeCopyFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'copyFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useWriteVmSafeCreateDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useWriteVmSafeCreateWallet = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'createWallet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deployCode"`
 */
export const useWriteVmSafeDeployCode = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'deployCode',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useWriteVmSafeEthGetLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'eth_getLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useWriteVmSafeExists = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useWriteVmSafeFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useWriteVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useWriteVmSafeGetMappingLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useWriteVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useWriteVmSafeGetNonce = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'getNonce',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useWriteVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useWriteVmSafeIsDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useWriteVmSafeIsFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useWriteVmSafeLabel = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useWriteVmSafePauseGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"prompt"`
 */
export const useWriteVmSafePrompt = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'prompt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptAddress"`
 */
export const useWriteVmSafePromptAddress = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'promptAddress' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptSecret"`
 */
export const useWriteVmSafePromptSecret = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'promptSecret',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptSecretUint"`
 */
export const useWriteVmSafePromptSecretUint =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'promptSecretUint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptUint"`
 */
export const useWriteVmSafePromptUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'promptUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"randomAddress"`
 */
export const useWriteVmSafeRandomAddress = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'randomAddress' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"randomUint"`
 */
export const useWriteVmSafeRandomUint = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'randomUint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useWriteVmSafeRecord = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useWriteVmSafeRecordLogs = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'recordLogs',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useWriteVmSafeRememberKey = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rememberKey',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useWriteVmSafeRemoveDir = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeDir',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useWriteVmSafeRemoveFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'removeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useWriteVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useWriteVmSafeRpc = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useWriteVmSafeSerializeAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useWriteVmSafeSerializeBool = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeBool' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useWriteVmSafeSerializeBytes =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useWriteVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useWriteVmSafeSerializeInt = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'serializeInt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useWriteVmSafeSerializeJson = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeJson' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useWriteVmSafeSerializeJsonType =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeJsonType',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useWriteVmSafeSerializeString =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useWriteVmSafeSerializeUint = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'serializeUint' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUintToHex"`
 */
export const useWriteVmSafeSerializeUintToHex =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'serializeUintToHex',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useWriteVmSafeSetEnv = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useWriteVmSafeSign = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"signCompact"`
 */
export const useWriteVmSafeSignCompact = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'signCompact',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useWriteVmSafeSleep = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useWriteVmSafeStartBroadcast =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useWriteVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useWriteVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useWriteVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useWriteVmSafeStopBroadcast = /*#__PURE__*/ createUseWriteContract(
  { abi: vmSafeAbi, functionName: 'stopBroadcast' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useWriteVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useWriteVmSafeTryFfi = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useWriteVmSafeUnixTime = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'unixTime',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useWriteVmSafeWriteFile = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeFile',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useWriteVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseWriteContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useWriteVmSafeWriteJson = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeJson',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useWriteVmSafeWriteLine = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeLine',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeToml"`
 */
export const useWriteVmSafeWriteToml = /*#__PURE__*/ createUseWriteContract({
  abi: vmSafeAbi,
  functionName: 'writeToml',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__
 */
export const useSimulateVmSafe = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"accesses"`
 */
export const useSimulateVmSafeAccesses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'accesses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"breakpoint"`
 */
export const useSimulateVmSafeBreakpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'breakpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcast"`
 */
export const useSimulateVmSafeBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'broadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"broadcastRawTransaction"`
 */
export const useSimulateVmSafeBroadcastRawTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'broadcastRawTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"closeFile"`
 */
export const useSimulateVmSafeCloseFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'closeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"copyFile"`
 */
export const useSimulateVmSafeCopyFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'copyFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createDir"`
 */
export const useSimulateVmSafeCreateDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"createWallet"`
 */
export const useSimulateVmSafeCreateWallet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'createWallet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"deployCode"`
 */
export const useSimulateVmSafeDeployCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'deployCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"eth_getLogs"`
 */
export const useSimulateVmSafeEthGetLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'eth_getLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"exists"`
 */
export const useSimulateVmSafeExists = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'exists',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"ffi"`
 */
export const useSimulateVmSafeFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'ffi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingKeyAndParentOf"`
 */
export const useSimulateVmSafeGetMappingKeyAndParentOf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingKeyAndParentOf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingLength"`
 */
export const useSimulateVmSafeGetMappingLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getMappingSlotAt"`
 */
export const useSimulateVmSafeGetMappingSlotAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getMappingSlotAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getNonce"`
 */
export const useSimulateVmSafeGetNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"getRecordedLogs"`
 */
export const useSimulateVmSafeGetRecordedLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'getRecordedLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isDir"`
 */
export const useSimulateVmSafeIsDir = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isDir',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"isFile"`
 */
export const useSimulateVmSafeIsFile = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'isFile',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"label"`
 */
export const useSimulateVmSafeLabel = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'label',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"pauseGasMetering"`
 */
export const useSimulateVmSafePauseGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'pauseGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"prompt"`
 */
export const useSimulateVmSafePrompt = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'prompt',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptAddress"`
 */
export const useSimulateVmSafePromptAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'promptAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptSecret"`
 */
export const useSimulateVmSafePromptSecret =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'promptSecret',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptSecretUint"`
 */
export const useSimulateVmSafePromptSecretUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'promptSecretUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"promptUint"`
 */
export const useSimulateVmSafePromptUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'promptUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"randomAddress"`
 */
export const useSimulateVmSafeRandomAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'randomAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"randomUint"`
 */
export const useSimulateVmSafeRandomUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'randomUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"record"`
 */
export const useSimulateVmSafeRecord = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'record',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"recordLogs"`
 */
export const useSimulateVmSafeRecordLogs =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'recordLogs',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rememberKey"`
 */
export const useSimulateVmSafeRememberKey =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'rememberKey',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeDir"`
 */
export const useSimulateVmSafeRemoveDir =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeDir',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"removeFile"`
 */
export const useSimulateVmSafeRemoveFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'removeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"resumeGasMetering"`
 */
export const useSimulateVmSafeResumeGasMetering =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'resumeGasMetering',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"rpc"`
 */
export const useSimulateVmSafeRpc = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'rpc',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeAddress"`
 */
export const useSimulateVmSafeSerializeAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBool"`
 */
export const useSimulateVmSafeSerializeBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes"`
 */
export const useSimulateVmSafeSerializeBytes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeBytes32"`
 */
export const useSimulateVmSafeSerializeBytes32 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeBytes32',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeInt"`
 */
export const useSimulateVmSafeSerializeInt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeInt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJson"`
 */
export const useSimulateVmSafeSerializeJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeJsonType"`
 */
export const useSimulateVmSafeSerializeJsonType =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeJsonType',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeString"`
 */
export const useSimulateVmSafeSerializeString =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeString',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUint"`
 */
export const useSimulateVmSafeSerializeUint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeUint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"serializeUintToHex"`
 */
export const useSimulateVmSafeSerializeUintToHex =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'serializeUintToHex',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"setEnv"`
 */
export const useSimulateVmSafeSetEnv = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'setEnv',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sign"`
 */
export const useSimulateVmSafeSign = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sign',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"signCompact"`
 */
export const useSimulateVmSafeSignCompact =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'signCompact',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"sleep"`
 */
export const useSimulateVmSafeSleep = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'sleep',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startBroadcast"`
 */
export const useSimulateVmSafeStartBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startMappingRecording"`
 */
export const useSimulateVmSafeStartMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"startStateDiffRecording"`
 */
export const useSimulateVmSafeStartStateDiffRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'startStateDiffRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopAndReturnStateDiff"`
 */
export const useSimulateVmSafeStopAndReturnStateDiff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopAndReturnStateDiff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopBroadcast"`
 */
export const useSimulateVmSafeStopBroadcast =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopBroadcast',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"stopMappingRecording"`
 */
export const useSimulateVmSafeStopMappingRecording =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'stopMappingRecording',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"tryFfi"`
 */
export const useSimulateVmSafeTryFfi = /*#__PURE__*/ createUseSimulateContract({
  abi: vmSafeAbi,
  functionName: 'tryFfi',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"unixTime"`
 */
export const useSimulateVmSafeUnixTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'unixTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFile"`
 */
export const useSimulateVmSafeWriteFile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeFileBinary"`
 */
export const useSimulateVmSafeWriteFileBinary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeFileBinary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeJson"`
 */
export const useSimulateVmSafeWriteJson =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeJson',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeLine"`
 */
export const useSimulateVmSafeWriteLine =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeLine',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vmSafeAbi}__ and `functionName` set to `"writeToml"`
 */
export const useSimulateVmSafeWriteToml =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vmSafeAbi,
    functionName: 'writeToml',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__
 */
export const useReadStdError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"arithmeticError"`
 */
export const useReadStdErrorArithmeticError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'arithmeticError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"assertionError"`
 */
export const useReadStdErrorAssertionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'assertionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"divisionError"`
 */
export const useReadStdErrorDivisionError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'divisionError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"encodeStorageError"`
 */
export const useReadStdErrorEncodeStorageError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'encodeStorageError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"enumConversionError"`
 */
export const useReadStdErrorEnumConversionError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'enumConversionError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"indexOOBError"`
 */
export const useReadStdErrorIndexOobError = /*#__PURE__*/ createUseReadContract(
  { abi: stdErrorAbi, functionName: 'indexOOBError' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"memOverflowError"`
 */
export const useReadStdErrorMemOverflowError =
  /*#__PURE__*/ createUseReadContract({
    abi: stdErrorAbi,
    functionName: 'memOverflowError',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"popError"`
 */
export const useReadStdErrorPopError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'popError',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stdErrorAbi}__ and `functionName` set to `"zeroVarError"`
 */
export const useReadStdErrorZeroVarError = /*#__PURE__*/ createUseReadContract({
  abi: stdErrorAbi,
  functionName: 'zeroVarError',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__
 */
export const useWatchStdStorageSafeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stdStorageSafeAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"SlotFound"`
 */
export const useWatchStdStorageSafeSlotFoundEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'SlotFound',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stdStorageSafeAbi}__ and `eventName` set to `"WARNING_UninitedSlot"`
 */
export const useWatchStdStorageSafeWarningUninitedSlotEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stdStorageSafeAbi,
    eventName: 'WARNING_UninitedSlot',
  })
