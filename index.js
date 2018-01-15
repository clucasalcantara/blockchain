const Chain = require('./modules/Chain')
const validChain = require('./tools/integrity')

const BlockChain = new Chain()

BlockChain.addBlock({ amount: 5000 })
BlockChain.addBlock({ amount: 500 })
BlockChain.addBlock({ amount: 2000 })
BlockChain.addBlock({ amount: 1000 })

console.log('Valid chain?', validChain(BlockChain))
console.log(BlockChain.getLastBlock())
