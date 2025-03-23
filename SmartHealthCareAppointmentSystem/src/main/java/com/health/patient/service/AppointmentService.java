package com.health.patient.service;


import com.health.patient.entity.Appointment;
import com.health.data.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Optional<Appointment> getNextAppointment(String patientName) {
        return appointmentRepository.findTopByPatientNameOrderByAppointmentDateTimeAsc(patientName);
    }
}

