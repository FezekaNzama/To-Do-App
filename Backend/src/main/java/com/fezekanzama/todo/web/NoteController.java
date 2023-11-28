package com.fezekanzama.todo.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fezekanzama.todo.entity.Note;
import com.fezekanzama.todo.service.NoteService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/note")
@CrossOrigin(origins = "http://localhost:3000/")
public class NoteController {
    
    NoteService service;

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNote(@PathVariable Long id){
        return new ResponseEntity<>(service.getNote(id), HttpStatus.OK);
    }
    

    @GetMapping("/all")
    public ResponseEntity<List<Note>> getNotes(){
        return new ResponseEntity<>(service.getNotes(), HttpStatus.OK);
    }

    @PostMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<Note> saveNote(@RequestBody Note note){
        return new ResponseEntity<>(service.saveNote(note), HttpStatus.CREATED);
    }

    @PostMapping(value="/category/{category_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<Note> saveNote(@RequestBody Note note, @PathVariable Long category_id){
        return new ResponseEntity<>(service.saveNote(note, category_id), HttpStatus.CREATED);
    }

    @PutMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note){
        return new ResponseEntity<>(service.updateNote(id, note), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteNote(@PathVariable Long id){
        service.deleteNote(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
