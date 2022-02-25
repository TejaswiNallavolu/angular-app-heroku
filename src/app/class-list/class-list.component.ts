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
      // console.log(data)
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

         if(this.ClassListModel.ListOfClassesID!=null){
          alert("Class List Data Updated successfully");


        }else{
          alert("Class List Data Saved successfully");

        }
        
        this.isDataGridShow=true;
        this.getClassList();

        const url = this.router.url;
        this.router.navigateByUrl('/list', { skipLocationChange: true }).then(() => {
          this.router.navigate([url]);
        });

       
        
      }, error => {
        console.log(error);
      });
    

  }

  Cancel(){
    this.isDataGridShow=true;
    this.CreateClassListForm();
  }

  edit(classId:any){
    this.isDataGridShow=false;

     this.auth.getClassById(classId).subscribe(data=>{
      //  console.log(data);
       var cls = data.classlist;

      //  ListOfClassesID: ['', Validators.nullValidator],
      //  ClassName: ['', Validators.required],
      //  Image: ['', Validators.required],
      //  Time: ['', Validators.required],
      //  Location: ['', Validators.required],
      //  Link: ['', Validators.required],

       this.ClassListForm.controls.ListOfClassesID.setValue(cls.listOfClassesID);
       this.ClassListForm.controls.ClassName.setValue(cls.className);
       this.ClassListForm.controls.Image.setValue(cls.image);
       this.ClassListForm.controls.Time.setValue(cls.time);
       this.ClassListForm.controls.Location.setValue(cls.location);
       this.ClassListForm.controls.Link.setValue(cls.link);

     },err=>{
      console.log(err);
     })
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
