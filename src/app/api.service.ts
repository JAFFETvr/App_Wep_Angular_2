import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // ** Canciones **

  // Crear una nueva canción
  createCancion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/canciones`, data);
  }

  // Obtener todas las canciones
  getAllCanciones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/canciones`);
  }

  // Obtener una canción por ID
  getCancion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/canciones/${id}`);
  }

  // Actualizar una canción por ID
  updateCancion(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/canciones/${id}`, data);
  }

  // Eliminar una canción por ID
  deleteCancion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/canciones/${id}`);
  }

  // Eliminar todas las canciones
  deleteAllCanciones(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/canciones`);
  }

  // ** Lista de Canciones **

  // Crear una nueva lista de canciones
  createListaCancion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/listaCanciones`, data);
  }

  // Obtener todas las listas de canciones
  getAllListaCanciones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listaCanciones`);
  }

  // Obtener una lista de canciones por ID
  getListaCancion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/listaCanciones/${id}`);
  }

  // Eliminar una lista de canciones por ID
  deleteListaCancion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/listaCanciones/${id}`);
  }

  // Eliminar todas las listas de canciones
  deleteAllListaCanciones(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/listaCanciones`);
  }

  // ** Lista de Reproducción **

  // Crear una nueva lista de reproducción
  createListaReproduccion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/listaReproducciones`, data);
}

  // Obtener todas las listas de reproducción
  getAllListaReproducciones(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listaReproducciones`);
  }

  // Obtener una lista de reproducción por ID
  getListaReproduccion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/listaReproducciones/${id}`);
  }

  // Actualizar una lista de reproducción por ID
  updateListaReproduccion(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/listaReproducciones/${id}`, data);
  }

  // Eliminar una lista de reproducción por ID
  deleteListaReproduccion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/listaReproducciones/${id}`);
  }

  // Eliminar todas las listas de reproducción
  deleteAllListaReproducciones(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/listaReproducciones`);
  }
  // Obtener canciones de una lista de reproducción por ID
getSongsFromListaReproduccion(playlistId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/listaCanciones/playlist/${playlistId}`);
}

}
