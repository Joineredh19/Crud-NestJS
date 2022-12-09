import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libro';
import { LibrosService} from './libros.service';
import { LibroI } from './Interface/libro.interface';

@Controller('libros')
export class LibrosController {
    constructor(private readonly librosService: LibrosService){}

    @Get()
    buscarTodosLibros(): Promise<LibroI[]> {
        return this.librosService.buscarTodos();
    }

    @Get(':id')
    buscarUnLibro(@Param('id') idLibro:string): Promise<LibroI>  {
        return this.librosService.buscarUnLibro(idLibro);
    }

    @Post()
    crearLibros(@Body() libroDto:CrearLibroDto): Promise<LibroI> {
        return this.librosService.crearLibros(libroDto);
    }

    @Put(':id')
    modificarLibros(@Param('id') idLibro:string, @Body() libroDto: CrearLibroDto): Promise<LibroI> {
        return this.librosService.modificarLibros(idLibro, libroDto);
    }
    @Delete()
    borrarLibros(@Param('id') idLibro:string): Promise<LibroI> {
        return this.librosService.borrarLibros(idLibro);
    }
}