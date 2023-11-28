package com.fezekanzama.todo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fezekanzama.todo.entity.Category;
import com.fezekanzama.todo.entity.Note;
import com.fezekanzama.todo.exceptions.NoteNotFoundException;
import com.fezekanzama.todo.repository.CategoryRepository;
import com.fezekanzama.todo.repository.NoteRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class NoteServiceImpl implements NoteService{
    
    NoteRepository noteRepo; 
    CategoryRepository categoryRepo;

    @Override
    public Note getNote(Long id){
        Optional<Note> note  = noteRepo.findById(id);
        return unwrapNote(note, id);
    }

    @Override
    public List<Note> getNotes(){
        return (List<Note>) noteRepo.findAll();
    }

    @Override
    public Note saveNote(Note note){
        return noteRepo.save(note);
    }

    @Override
    public Note saveNote(Note note, Long categoryId) {
        Category category = CategoryServiceImpl.unwrapCategory(categoryRepo.findById(categoryId), categoryId);
        note.setCategory(category);
        return noteRepo.save(note);
    }

    @Override 
    public void deleteNote(Long id){
        noteRepo.deleteById(id);
    }

    @Override
    public Note updateNote(Long id, Note note){
        Optional<Note> oldNote = noteRepo.findById(id);
        Note unwrappedNote = unwrapNote(oldNote, id);
        unwrappedNote.setTitle(note.getTitle());
        unwrappedNote.setDescription(note.getDescription());
        unwrappedNote.setCategory(note.getCategory());

        return noteRepo.save(unwrappedNote);
    }

    static Note unwrapNote(Optional<Note> entity, Long id){
        if(entity.isPresent()) return entity.get();
        else throw new NoteNotFoundException(id);
    }
        
}


