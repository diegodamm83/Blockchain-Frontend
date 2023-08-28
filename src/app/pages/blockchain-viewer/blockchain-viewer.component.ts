import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent {
  /* Blockchain viewer component will allow user to view the chain of blocks that have been created thus far, 
  using the BockchainService import to use original Javascript code*/
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService){
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }

  showTransactions(block){
    this.selectedBlock = block;
  }

}
