package com.crud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.crud.entity.User;
import com.crud.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> findAll(){
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> getUser(@PathVariable Long id){
		return userRepository.findById(id);
	}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id){
		userRepository.deleteById(id);
		return true;
	}
	
	@PostMapping("/user")
	public User createUser(User user){
		return userRepository.save(user);
	}
	
	@PutMapping("/user")
	public User updateUser(User user){
		return userRepository.save(user);
	}

}
