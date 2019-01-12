# Signing messages

In order to sign messages we need a private key (which will sign the message) and a public key, which will decrypt and verify the signature.

## Usage

> If you do not want to generate a new key, use the `pem` files provided

1. `node index.js {payload}`

If you want to generate new keys, run the `genkeys.sh` in your shell by one of two ways:

- `chmod +x ./genkeys.sh && ./genkeys.sh`
- `sh ./genkeys.sh`

This will generate a key pair which can be used to sign and verify the message.