import { Injectable } from '@nestjs/common';
import {LibroI} from './Interface/libro.interface'
import {Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class LibrosService {
   constructor(@InjectModel('libro') private readonly libroModel: Model<LibroI>) {}

   async buscarTodos(): Promise<LibroI[]>{
      return await this.libroModel.find();
 }

   async buscarUnLibro(id:string): Promise<LibroI>{
      return await this.libroModel.findOne({_id : id});
 }

async crearLibros(libro:LibroI): Promise<LibroI>{
   const nuevoLibro = new this.libroModel(libro); //Recibimos el libro que guardamos
   return await nuevoLibro.save();
 }

async modificarLibros(id:string, libro:LibroI):Promise<LibroI>{
   return await this.libroModel.findByIdAndUpdate(id, libro, {new: true});
 }

 async borrarLibros(id:string): Promise<LibroI>{
    return await this.libroModel.findByIdAndRemove(id);
 }
 
}
