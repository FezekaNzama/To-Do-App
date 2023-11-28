package com.fezekanzama.todo.repository;

import org.springframework.data.repository.CrudRepository;

import com.fezekanzama.todo.entity.Category;

public interface CategoryRepository extends CrudRepository<Category, Long>{
    
}
