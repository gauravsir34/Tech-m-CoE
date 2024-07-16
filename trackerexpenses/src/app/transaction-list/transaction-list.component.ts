import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  totalIncome: number = 0;
  totalExpenses: number = 0;
  balance: number = 0;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.transactions$.subscribe(transactions => {
      this.transactions = transactions;
      this.totalIncome = this.transactionService.getTotalIncome();
      this.totalExpenses = this.transactionService.getTotalExpenses();
      this.balance = this.transactionService.getBalance();
    });
  }
}
