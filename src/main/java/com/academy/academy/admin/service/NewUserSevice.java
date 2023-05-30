package com.academy.academy.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academy.academy.admin.mapper.NewUserMapper;
import com.academy.academy.admin.vo.NewUserVo;

@Service
public class NewUserSevice {
    @Autowired
    public NewUserMapper newuserMapper;
    
    public void insertNewUser(NewUserVo newuserVo) {
        newuserMapper.insertNewUser(newuserVo);
    }

    public List<NewUserVo> getnewUserList() {
        return newuserMapper.getnewUserList();
    }


}
