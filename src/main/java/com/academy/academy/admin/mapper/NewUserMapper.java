package com.academy.academy.admin.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.academy.academy.admin.vo.NewUserVo;

@Repository
@Mapper

public interface NewUserMapper {

    List<NewUserVo> getnewUserList();

    void insertNewUser(NewUserVo newuserVo);

    NewUserVo getnewUser(String newname);

   
}
