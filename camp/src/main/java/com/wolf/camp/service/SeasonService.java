package com.wolf.camp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wolf.camp.model.Camp;
import com.wolf.camp.model.Season;
import com.wolf.camp.repository.SeasonRepository;

@Service
public class SeasonService {
	@Autowired
	private SeasonRepository seasons;
	
	public List<Season> getSesaons(){
		return (List<Season>)seasons.findAll();
	}
	
	public Season getSeason(Integer id) {
		return seasons.findOne(id);
	}
	
	public Season saveSeason(Season season) {
		Season currentSeeson = seasons.findOne(season.getId());
		
		currentSeeson.setName(season.getName());
		
		return seasons.save(currentSeeson);
	}
	
}
