# Tickit 

![Screenshot 2024-09-06 at 21 15 50](https://github.com/user-attachments/assets/5294bf1a-f47c-439e-a17b-30b279a9856a)
![Screenshot 2024-09-06 at 21 16 38](https://github.com/user-attachments/assets/a50b27c7-a196-4c66-afb5-f477dce3c90a)

# Frontend

Built with onchain kit
Points to base sepolia where contracts are deployed.
Can be run with `bun run dev`

## Smart Contract

Can run tests with `forge test`

Sample script simulating 1M ticket requests can be run with
`forge script RunBigEvent --block-gas-limit 60000000000`

## Interactions

Event Promoters can register their events on the `EventRegistry` contract.

Users are able to request tickets for events.

Each event has a ticketing window where tickets can be purchased. 

Users are also able to pre-request tickets before the ticketing window opens.

If an event is oversubscribed in the pre-request window, then the tickets will be randomly allocated to users.

When users register, they can provide a list of friends. The smart contracts will ensure that all the friends will receive tickets if the original user receives a ticket.

Tickets are issued as unique NFTs, with the capability to show further on-chain data.

## Notes

Tickets are allocated via PRNG - it is possible that more tickets are allocated than intended.

### Known issues

- Ticket allocation can be sybil attacked.
