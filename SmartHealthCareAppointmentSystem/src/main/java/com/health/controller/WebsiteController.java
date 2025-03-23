package com.health.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.health.data.repository.DataRepository;
import com.health.patient.entity.Appointment;
import com.health.patient.entity.Patient;
import com.health.patient.service.AppointmentService;

@Controller
public class WebsiteController 
{
	@GetMapping("/login")
	public String login()
	{
		return "login";
	}
	
	//Code related inserting data into table using register form
	
	@Autowired
	private DataRepository dataRepository;
	
	@Autowired
    private AppointmentService appointmentService;
	
	// Show the form
    @GetMapping("/register")
    public String showForm(Model model) {
        model.addAttribute("user", new Patient());
        return "register";
    }
	
	// Handle form submission
    @PostMapping("/register")
    public String registerUser(@ModelAttribute Patient patient, Model model) 
    {
    	dataRepository.save(patient);
    	model.addAttribute("message", "Data Inserted Successfully");
        return "login";
    }
    
    @GetMapping("/next-visit")
    public String getNextVisit(@RequestParam("patient") String patientName, Model model) {
        Optional<Appointment> nextAppointment = appointmentService.getNextAppointment(patientName);

        if (nextAppointment.isPresent()) {
            model.addAttribute("appointment", nextAppointment.get());
        } else {
            model.addAttribute("error", "No upcoming appointments found.");
        }
        
        return "nextVisit";
    }
    
    
    
    

}
