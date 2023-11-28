package com.fezekanzama.todo.service;

import java.util.List;

import com.fezekanzama.todo.entity.Note;

public interface NoteService {
    Note getNote(Long id);
    List<Note> getNotes();
    Note saveNote(Note note);
    Note saveNote(Note note, Long category_id);
    void deleteNote(Long id);
    Note updateNote(Long id, Note note);

}
