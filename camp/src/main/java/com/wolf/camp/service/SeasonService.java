package com.wolf.camp.service;

import java.util.List;
import java.util.Set;

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
		Season currentSeason = seasons.findOne(season.getId());
		
		currentSeason.setName(season.getName());
		currentSeason.setItems(season.getItems());
		
		
		return seasons.save(currentSeason);
	}
	
}
