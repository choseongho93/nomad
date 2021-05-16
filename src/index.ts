import * as CryptoJS from "crypto-js"; // hash를 위함. 

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static 함수 
    static calculateBlockHash =
        (
            index: number,
            previousHash: string,
            timestamp: number,
            data: string
        ): string =>
            CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    // static validateStructure = (aBlock: Block): Boolean => typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.timestamp === "number" && typeof aBlock.data === "string";



    // 생성자 
    constructor
        (
            index: number,
            hash: string,
            previousHash: string,
            data: string,
            timestamp: number
        ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

// 블록 인스턴스 생성 
const genesisBlock: Block = new Block(0, "2020202020", "", "Hello", 123456);

// blockchain 변수에 새로 만든 블록 인스턴스를 배열로 삽입
let blockchain: Block[] = [genesisBlock];

// getBlockchain 함수로써, 블록체인을 리턴 즉, 블록체인 얻기
const getBlockchain = (): Block[] => blockchain;

// getLatestBlock 함수로써, 제일 마지막에 인덱스에 있는 최근 값 가져오기
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

// getNewTimeStamp 함수로써, 현재 시간 가져오기
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 블록체인 생성 
const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const nextTimestamp: number = getNewTimeStamp();
    const nextHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);
    const newBlock: Block = new Block(newIndex, nextHash, previousBlock.hash, data, nextTimestamp);

    return newBlock;
}

console.log(createNewBlock("hello"));
console.log(createNewBlock("bye"));
// const isBlockYalid = (candidateBlock: Block, previousBlock: Block): boolean => {
//     if (!Block.validateStructure(candidateBlock)) {
//         return false;
//     }else if (previousBlock.index+1 !=== candidateBlock.index){
//         return false;
//     }else if(previousBlock.hash !=== candidateBlock.previousHash){
//         return false;
//     }
// }

export { };