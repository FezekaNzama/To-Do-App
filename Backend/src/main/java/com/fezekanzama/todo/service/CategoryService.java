package com.fezekanzama.todo.service;

import java.util.List;

import com.fezekanzama.todo.entity.Category;

public interface CategoryService {
    Category getCategory(Long id);
    List<Category> getCategories();
    Category saveCategory(Category category);
    void deleteCategory(Long id);
    Category updateCategory(Long id, String categoryName);
}
