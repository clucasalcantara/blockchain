const Block = require('./block')

class Chain {
    constructor(difficulty = 1) {
        this.blocks = [new Block()]
        this.index = 1
        this.difficulty = difficulty
    }

    getLastBlock() {
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(data) {
        const index = this.index
        const difficulty = this.difficulty
        const previousHash = this.getLastBlock().hash

        const block = new Block(index, previousHash, data, difficulty)

        this.index++
        this.blocks.push(block)
    }
}

module.exports = Chain