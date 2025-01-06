const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = "(  )") {
    
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const err = new Error("You can't remove incorrect link!");
    if (typeof position !== "number" || position <= 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw err;
    }
    const removed = this.chain.splice(position - 1, 1);
    return this;
   
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finished = Array.from(this.chain);
    this.chain = [];
    return finished.join("~~");
  },
};

module.exports = {
  chainMaker
};
