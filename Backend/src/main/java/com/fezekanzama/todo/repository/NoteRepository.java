package com.fezekanzama.todo.repository;

import org.springframework.data.repository.CrudRepository;

import com.fezekanzama.todo.entity.Note;

public interface NoteRepository extends CrudRepository<Note, Long>{
    
}
