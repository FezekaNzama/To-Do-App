package com.fezekanzama.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fezekanzama.todo.entity.Category;
import com.fezekanzama.todo.repository.CategoryRepository;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner{

	@Autowired
	CategoryRepository categoryRepo;

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception{
		Category[] categories = new Category[]{
			new Category("Shopping"),
			new Category("Meetings"),
			new Category("Events"),
			new Category("Classes")
		};

		for(int i =0; i<categories.length; i++){
			categoryRepo.save(categories[i]);
		}
	}

}
