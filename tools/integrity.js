const validChain = (blockChain) => {
  blockChain.blocks.map(block => {
    const previousBlock = block.index - 1

    if (block.hash !== block.generateHash()) {
      return false
    }

    if (block.index !== previousBlock.index + 1) {
      return false
    }

    if (block.previousHash !== previousBlock.hash) {
      return false
    }
  })

  return true
}

module.exports = validChain
