import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@candy-shop/feature/dashboard/models';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'coin-market-coin-transaction-modal',
  templateUrl: './coin-transaction-modal.component.html',
  styleUrls: ['./coin-transaction-modal.component.scss'],
})
export class CoinTransactionModalComponent implements OnInit {
  @Input() product: Product;
  @Input() transactionType: string;

  formGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _ref: NbDialogRef<CoinTransactionModalComponent>) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      price: [null, Validators.required],
      imageUrl: [null, Validators.required],
      kcal: [null, Validators.required],
      category: [null, Validators.required],
      weight: [null, Validators.required],
    });



    if(this.product) {
      this.formGroup.patchValue(this.product)
    }
  }

  save(): void {
    if(this.formGroup.valid) {
      this._ref.close(this.formGroup.value)
    }
  }



  cancel(): void {
    this._ref.close();
  }
}
