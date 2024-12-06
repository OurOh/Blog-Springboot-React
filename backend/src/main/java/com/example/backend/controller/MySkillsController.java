package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.MySkills;
import com.example.backend.service.MySkillsService;

@RestController
@CrossOrigin(origins = "/api/myskills")
@RequestMapping("/api/myskills")
public class MySkillsController {

   @Autowired 
   private MySkillsService mySkillsService;

   @GetMapping
   public ResponseEntity<List<MySkills>> getAllMySkills(){
      List<MySkills> mySkills = mySkillsService.getAllMySkills();
      return ResponseEntity.ok(mySkills);
   }

}
