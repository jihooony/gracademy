package com.academy.academy.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.academy.academy.admin.service.NewUserSevice;
import com.academy.academy.admin.vo.NewUserVo;

@Controller
public class AdminController {
    @Autowired
    private NewUserSevice newUserSevice;

    @PostMapping("/result")
    public String handleFormSubmission(@ModelAttribute NewUserVo newUserVo) {
        // 폼 데이터 처리 로직
        newUserSevice.insertNewUser(newUserVo);

        // 리다이렉트할 URL 반환
        return "redirect:/";
    }

    @RequestMapping("/List")
    public ModelAndView list() {

        ModelAndView mv = new ModelAndView();

        List<NewUserVo> userList = newUserSevice.getnewUserList();

        mv.setViewName("result/result");
       
        mv.addObject("newuserList", userList);
        return mv;
    }
}
