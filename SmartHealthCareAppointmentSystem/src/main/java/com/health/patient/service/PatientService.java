package com.health.patient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.health.data.repository.DataRepository;
import com.health.patient.entity.Patient;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Service
public class PatientService 
{
	@Autowired
	private DataRepository dataRepository;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public boolean validateUser(String email, String password) 
	{
        Patient user = dataRepository.findByEmail(email);
        return user != null && passwordEncoder.matches(password, user.getPassword());
    }

}
