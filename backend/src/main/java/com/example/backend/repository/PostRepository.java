package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long>{

    //post 기준으로 검색
    Optional<Post> findByPost(String post);
}
