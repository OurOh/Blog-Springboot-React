package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.CategoryEntity;
import com.example.backend.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {

   @Autowired 
   private CategoryRepository categoryRepository;

   @GetMapping("/categories")
   public ResponseEntity<List<CategoryEntity>> getCategories(){
      List<CategoryEntity> categoryies = categoryRepository.findAllByOrderByNumAsc();
      return ResponseEntity.ok(categoryies);
   }

}
