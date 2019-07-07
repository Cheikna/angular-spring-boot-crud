package com.crud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crud.entity.User;
import com.crud.repository.UserRepository;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {
	

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(CrudBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("1", "1"));
		userRepository.save(new User("2", "2"));
		userRepository.save(new User("3", "3"));
		
	}

}
