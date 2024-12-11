package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.Post;
import com.example.backend.repository.PostRepository;

@Service
public class PostService {

   @Autowired 
   private PostRepository postRepository;

   //crud를 맹글자!!!
   public List<Post> getAllPosts(){
      return postRepository.findAll();
   }

   public Optional<Post> getPostByPost(String post){
      return postRepository.findByPost(post);
   }

   public Post createPost(Post post){
       return postRepository.save(post);
   }

   public void deletePost(Long id) {
      postRepository.deleteById(id);
   }

   public Post updatePost(Long id, Post updatePost){
      return postRepository.findById(id).map(existingPost -> {
          existingPost.setPost(updatePost.getPost());
          existingPost.setCategory(updatePost.getCategory());
          existingPost.setTitle(updatePost.getTitle());
          existingPost.setContent(updatePost.getContent());
          existingPost.setHashtag(updatePost.getHashtag());
          return postRepository.save(existingPost);
      }).orElseThrow(()-> new RuntimeException(id +"번 업데이트 에러"));
   }

}
