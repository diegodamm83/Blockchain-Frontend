import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'blockchain/src/blockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockchainService: BlockchainService) { // Injects Blockchain Service to our class

    this.walletKey = blockchainService.walletKeys[0]; // Sets the wallet key to the first key in the array

  }

  ngOnInit() {
    this.newTx = new Transaction(); // Creates a new transaction object
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey; // Sets the from address to the public key
    this.newTx.signTransaction(this.walletKey.keyObj); // Signs the transaction with the key object

    this.blockchainService.addTransaction(this.newTx); // Adds the transaction to the blockchain service of pending transactions

    this.newTx = new Transaction(); // Creates a new transaction object so the newTx object is clear


  }

  

}
