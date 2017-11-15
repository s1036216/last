package com.airbnb.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.airbnb.web.command.Command;
@Repository
public interface BKMapper {

	public void insert(Object o);
	public List<?> selectList (Command cmd);
    public Object  selectOne (Command cmd);
    public Object  selectSearch (Command cmd);
	public String count(Command cmd);
	public void update (Object o);
	public void deleteId(Command cmd);
	public void deleteRes(Command cmd);
	public Object deleterev(Command cmd);
}