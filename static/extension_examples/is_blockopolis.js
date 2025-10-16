(function (Scratch) {
    "use strict";
class BlockopolisDetector {
    getInfo() {
      return {
        id: 'BlockopolisDetector',
        name: 'Blockopolis Detector',
        blocks: [
          {
            opcode: 'isBlockopolis',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is Blockopolis?'
          }
        ]
      };
    }

    isBlockopolis() {
      this.isem = Scratch.extensions.isBlockopolis
    ? "true"  : "false";
  return this.isem

    }
  }

  Scratch.extensions.register(new BlockopolisDetector());
})(Scratch);