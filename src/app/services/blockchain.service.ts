import { Injectable } from '@angular/core';
// @ts-ignore
import { Blockchain } from 'blockchain/src/blockchain';
import * as EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys : any[] = []; 
  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
    
  }

  getBlocks(){
    return this.blockchainInstance.chain;
  }  
  private generateWalletKeys() {
    const ec: any = new EC.ec ('secp256k1');
    const key  = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
  }
}
