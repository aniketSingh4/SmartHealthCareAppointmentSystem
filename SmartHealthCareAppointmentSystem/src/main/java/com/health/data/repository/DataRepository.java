package com.health.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.health.patient.entity.Patient;

public interface DataRepository extends JpaRepository<Patient, Long>
{
	Patient findByEmail(String email); // Query method to fetch user by email
}
