package com.health.patient.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	private String fullName;
	
	private String fatherName;
	
	private String address;
	
	private long aadharcard;
	
	@Column(nullable = true)
	private String email;
	
	private String mobileNo;
	
	private String password;

	// getter and setter
	public long getId() 
	{
		return id;
	}

	public void setId(long id) 
	{
		this.id = id;
	}

	public String getFullName() 
	{
		return fullName;
	}

	public void setFullName(String fullName) 
	{
		this.fullName = fullName;
	}

	public String getFatherName() 
	{
		return fatherName;
	}

	public void setFatherName(String fatherName) 
	{
		this.fatherName = fatherName;
	}

	public String getAddress() 
	{
		return address;
	}

	public void setAddress(String address) 
	{
		this.address = address;
	}

	public long getAadharcard() 
	{
		return aadharcard;
	}

	public void setAadharcard(long aadharcard) 
	{
		this.aadharcard = aadharcard;
	}

	public String getEmail() 
	{
		return email;
	}

	public void setEmail(String email) 
	{
		this.email = email;
	}

	public String getMobileNo() 
	{
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) 
	{
		this.mobileNo = mobileNo;
	}

	public String getPassword() 
	{
		return password;
	}

	public void setPassword(String password) 
	{
		this.password = password;
	}

}
