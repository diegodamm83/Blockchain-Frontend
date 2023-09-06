import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent {
  
  public pendingTransactions = [];
    constructor(private blockchainService: BlockchainService) { 
      this.pendingTransactions = blockchainService.getPendingTransactions();
    }

    minePendigTransactions(){
      this.blockchainService.minePendingTransactions();
    }
}
