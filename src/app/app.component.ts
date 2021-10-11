import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRefObject?: BsModalRef;
  tasks = {
    name: '',
    duration: ''
  }

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>, __id: any, __class = '') {
    this.modalRefObject = this.modalService.show(template, {id: __id, class: __class});

    // print all value to get id
    console.log('template: ', this.modalRefObject);
    console.log('modal-id: ', this.modalRefObject.id);
  }

  closeModal(modalId?: any){
    this.modalService.hide(modalId);
  }

  submitForm(ngForm: NgForm) {

    if (ngForm.valid) {
      console.log('ngForm : ', ngForm);
      console.log('ngForm-value: ', ngForm.value);
      console.log('modal-id: ', this.modalRefObject?.id);

      // code here
      this.closeModal(this.modalRefObject?.id);
    } else {
      alert('Please check required fields!');
      return;

    }
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

}
