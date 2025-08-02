import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  private subscription!: Subscription;

  constructor(
    private _ProductService: ProductService,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscription = this._ProductService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('this.products: ', this.products);
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  deleteProduct(productName: string): void {
    Swal.fire({
      title: 'Delete Confirmation!',
      text: `Are you sure you want to Delete "${productName}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this._ToastrService.success(
          'Deleted Successfully',
          `${productName} has been deleted.`
        );
      }
    });
  }

  editProduct(product: any): void {
    console.log('product: ', product);
    this._ToastrService.success(
      'Edited Successfully',
      `${product.name} product has been edited.`
    );
  }

  addProduct(): void {
    this._ToastrService.success(
      'Added Successfully',
      `You have added a new product successfully.`
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
