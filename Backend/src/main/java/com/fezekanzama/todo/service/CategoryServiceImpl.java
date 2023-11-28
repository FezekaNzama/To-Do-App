package com.fezekanzama.todo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fezekanzama.todo.entity.Category;
import com.fezekanzama.todo.exceptions.CategoryNotFoundException;
import com.fezekanzama.todo.repository.CategoryRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    CategoryRepository categoryRepo;

    @Override
    public Category getCategory(Long id){
        Optional<Category> category = categoryRepo.findById(id);
        return unwrapCategory(category, id);
    }

    @Override
    public List<Category> getCategories(){
        return (List<Category>) categoryRepo.findAll();
    }

    @Override
    public Category saveCategory(Category category){
        return categoryRepo.save(category);
    }
    
    @Override
    public void deleteCategory(Long id){
        categoryRepo.deleteById(id);
    }

    @Override
    public Category updateCategory(Long id, String categoryName){
        Optional<Category> category = categoryRepo.findById(id);
        Category  unwrappedCategory = unwrapCategory(category, id);
        unwrappedCategory.setCategoryName(categoryName);
        return categoryRepo.save(unwrappedCategory);
    }

    static Category unwrapCategory(Optional<Category> entity, Long id){
        if(entity.isPresent()) return entity.get();
        else throw new CategoryNotFoundException(id);
    }
}
