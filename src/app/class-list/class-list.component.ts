import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Shared/auth.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  ClassListForm!:FormGroup;
  ClassListModel!:any;

  classListData:any;

  isDataGridShow = true;
  isFormShow = true;


  constructor( private fb: FormBuilder,  private router: Router, private auth : AuthService) { }

  ngOnInit() {


    this.CreateClassListForm();

    this.getClassList();

    this.isDataGridShow=true;

  }

  CreateClassListForm() {

  
    this.ClassListForm = this.fb.group({

      ListOfClassesID: ['', Validators.nullValidator],
      ClassName: ['', Validators.required],
      Image: ['', Validators.required],
      Time: ['', Validators.required],
      Location: ['', Validators.required],
      Link: ['', Validators.required],
     
    });    


  }

  getClassList(){
    this.auth.getAllClassList().subscribe(data=>{
      console.log(data)
      this.classListData = data.classlist;

    },err=>{
      console.log(err);
    })
  }

  Create(){
    this.isDataGridShow=false;
  }

  saveClassList(){

    this.ClassListModel = Object.assign({}, this.ClassListForm.value);
      this.ClassListModel.ListOfClassesID = (this.ClassListModel.ListOfClassesID === '') ? null : this.ClassListModel.ListOfClassesID;
      this.auth.postClassList(this.ClassListModel).subscribe(() => {

        alert("Class List Data Saved successfully");

        // if(this.ClassListModel.ListOfClassesID!=null){
        //   this.toastrService.success('', 'Company division information data updated successfully.');
        //   this.reload();


        // }else{
        //   this.toastrService.success('', 'Company division information data saved successfully.');
        //   this.reload();
        // }
        
      }, error => {
        console.log(error);
      });
    

  }

  Cancel(){
    this.isDataGridShow=true;
    this.CreateClassListForm();
  }

  edit(classId:any){

  }

  delete(classId:any){
    this.auth.deleteClassList(classId).
    subscribe(res=>{
      alert("Class Details Deleted Successfully");
      this.getClassList();
    },err=>{
      alert("Error in deleting Class Details");
    })
  }

}
