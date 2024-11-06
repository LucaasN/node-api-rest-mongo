import mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    publication_date: String
})

// Crear el modelo usando el esquema
const Book = mongoose.model('Book', bookSchema);

// Exportar el modelo
export default Book;