package com.academy.academy.admin.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class NewUserVo {

    //Fields
    private String subject;
    private String location;
    private String newname;	
    private String newphone;
    private String newgender;
   
}
