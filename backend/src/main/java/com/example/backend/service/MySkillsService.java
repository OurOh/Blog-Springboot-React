package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.MySkills;
import com.example.backend.repository.MySkillsRepository;

@Service
public class MySkillsService {
    
    @Autowired
    private MySkillsRepository mySkillsRepository;

    //save
    public MySkills saveMySkills(MySkills mySkills){
        return mySkillsRepository.save(mySkills);
    }

    //update
    public Optional<MySkills> updateMySkills(Long id, MySkills updateMySkills){
        return mySkillsRepository.findById(id).map(skill -> {
           skill.setName(updateMySkills.getName());
           skill.setValue(updateMySkills.getValue());
           return mySkillsRepository.save(skill);
        });
    }

    //delete
    public boolean deleteMySkills(Long id){
        if(mySkillsRepository.existsById(id)){
            mySkillsRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    //list
    public List<MySkills> getAllMySkills(){
        return mySkillsRepository.findAll();
    }
}
