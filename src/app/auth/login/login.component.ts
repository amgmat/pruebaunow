import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    usuario:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  constructor(
              private fb: FormBuilder,
              private router:Router
             ) { }

  ngOnInit(): void {
  }

  showError(field:string){
    return this.loginForm.get(field)?.invalid
            && this.loginForm.get(field)?.touched;
  }  

  login(){
    console.log(this.loginForm.value);

    this.loginForm.markAllAsTouched();

    if(this.loginForm.invalid)return;
    Swal.fire({
      title:'Espere un momento...',
      timerProgressBar: true,
      didOpen:()=>{
        Swal.showLoading()
      }
    }
    )
    
    localStorage.setItem('usuario', JSON.stringify(this.loginForm.value));
    setTimeout(() =>{
      Swal.close()
      this.router.navigateByUrl('')
    },1500)
    

  }

}
