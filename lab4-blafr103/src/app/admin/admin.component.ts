import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Author, Book} from '../books/model/book';
import {BooksService} from '../books/service/books.service';


/*
function categoryValidator(control: FormControl<string>): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
  return null;
}
*/

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bookForm = this.builder.group({
    id: ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{2}[1-9]{1}[0-9]{6}$")]],
    category: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    title: ['', Validators.required],
    cost: ['', Validators.required],
    authors: this.builder.array([]),
    year: [''],
    description: ['']
  });

  get id(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('id'); }
  get category(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('category'); }
  get title(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('title'); }
  get cost(): AbstractControl<string> {return <AbstractControl>this.bookForm.get('cost'); }
  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  constructor(private builder: FormBuilder,
              private booksService: BooksService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const book =  new Book(Number(this.bookForm.value.id),
      <string>this.bookForm.value.category,
      <string>this.bookForm.value.title,
      <string>this.bookForm.value.cost,
      <Author[]>this.bookForm.value.authors,
      Number(this.bookForm.value.year),
      <string>this.bookForm.value.description);
    this.booksService.addBook(book);
    this.bookForm.reset();
    this.authors.clear();
  }

/*
  addAuthor(): void {
    this.authors.push(
      this.builder.group({
        firstName: [''],
        lastName: ['']
      })
    );
  }

  removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }
*/

}

