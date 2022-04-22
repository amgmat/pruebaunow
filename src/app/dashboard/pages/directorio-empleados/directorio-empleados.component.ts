import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../../services/directorio.service';
import { User } from '../../../interface/user.interface';


@Component({
  selector: 'app-directorio-empleados',
  templateUrl: './directorio-empleados.component.html',
  styleUrls: ['./directorio-empleados.component.css']
})
export class DirectorioEmpleadosComponent implements OnInit {


  usuarios:User[]=[];

  constructor(private directorioService: DirectorioService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados(){
    this.directorioService.getDirectorio().subscribe(resp=>{
      console.log(resp);
      this.usuarios = resp;
    })
  }

}
